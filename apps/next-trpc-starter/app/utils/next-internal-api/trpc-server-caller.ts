import { appRouter } from "@next-trpc-starter/app/server/routers/_app";
import { httpBatchLink } from "@trpc/client";

export const trpcServerCaller = appRouter.createCaller({
  links: [
    httpBatchLink({
      // With internal nextjs fetch handler
      url: `/api/trpc`,
    }),
  ],
});
