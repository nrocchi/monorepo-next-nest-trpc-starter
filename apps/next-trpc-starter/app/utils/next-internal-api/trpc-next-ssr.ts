import { AppRouter } from "@next-trpc-starter/app/server/routers/_app";
import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";

function getBaseUrl() {
  if (typeof window !== "undefined")
    // browser should use relative path
    return "";

  // localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export const trpcNextSSR = createTRPCNext<AppRouter>({
  config(opts) {
    const { ctx } = opts;
    if (typeof window !== "undefined") {
      // during client requests
      return {
        // transformer: superjson, // optional - adds superjson serialization
        links: [
          httpBatchLink({
            // If you want to use SSR, you need to use the server's full URL
            url: `${getBaseUrl()}/api/trpc`,
          }),
        ],
      };
    }

    return {
      links: [
        httpBatchLink({
          // If you want to use SSR, you need to use the server's full URL
          url: `${getBaseUrl()}/api/trpc`,

          headers() {
            if (!ctx?.req?.headers) {
              return {};
            }
            // To use SSR properly, you need to forward client headers to the server
            // This is so you can pass through things like cookies when we're server-side rendering
            return {
              cookie: ctx.req.headers.cookie,
            };
          },
        }),
      ],
    };
  },

  ssr: true,
});
