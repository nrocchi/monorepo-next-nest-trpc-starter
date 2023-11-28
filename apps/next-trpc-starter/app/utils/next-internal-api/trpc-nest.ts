import { AppRouter } from "@next-trpc-starter/app/server/routers/_app";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";

export const trpcNest = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      // With internal nextjs fetch handler
      url: `/api/trpc`,

      // async headers() {
      //   return {
      //     authorization: getAuthCookie(),
      //   };
      // },
    }),
  ],
});
