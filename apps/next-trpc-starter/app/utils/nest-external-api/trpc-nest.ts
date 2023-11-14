import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "@nest-trpc-starter/trpc/trpc.router";

export const trpcNest = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${process.env.NEXT_PUBLIC_NEST_URL}/trpc`,

      // async headers() {
      //   return {
      //     authorization: getAuthCookie(),
      //   };
      // },
    }),
  ],
});
