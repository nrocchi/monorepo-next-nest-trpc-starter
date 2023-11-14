import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import { AppRouter } from "@nest-trpc-starter/trpc/trpc.router";

function getBaseUrl() {
  if (typeof window !== "undefined")
    // browser should use relative path
    return "";

  // localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

export const trpcNext = createTRPCNext<AppRouter>({
  config(opts) {
    return {
      links: [
        httpBatchLink({
          // With external nestjs server
          url: `${process.env.NEXT_PUBLIC_NEST_URL}/trpc`,

          // You can pass any HTTP headers you wish here
          // async headers() {
          //   return {
          //     authorization: getAuthCookie(),
          //   };
          // },
        }),
      ],
    };
  },

  ssr: false,
});
