import { AppRouter } from "@next-trpc-starter/app/server/routers/_app";
import { httpBatchLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";

export const trpcNext = createTRPCNext<AppRouter>({
  config(opts) {
    return {
      links: [
        httpBatchLink({
          // With internal nextjs fetch handler
          url: `/api/trpc`,

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
