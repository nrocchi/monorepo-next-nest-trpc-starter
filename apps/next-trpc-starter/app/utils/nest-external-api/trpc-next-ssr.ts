import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import { AppRouter } from "@nest-trpc-starter/trpc/trpc.router";

export const trpcNextSSR = createTRPCNext<AppRouter>({
  config(opts) {
    const { ctx } = opts;
    if (typeof window !== "undefined") {
      // during client requests
      return {
        links: [
          httpBatchLink({
            // With external nestjs server
            url: `${process.env.NEXT_PUBLIC_NEST_URL}/trpc`,
          }),
        ],
      };
    }

    return {
      links: [
        httpBatchLink({
          // With external nestjs server
          url: `${process.env.NEXT_PUBLIC_NEST_URL}/trpc`,

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
