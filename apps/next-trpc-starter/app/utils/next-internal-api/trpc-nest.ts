import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "@nest-trpc-starter/trpc/trpc.router";

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
