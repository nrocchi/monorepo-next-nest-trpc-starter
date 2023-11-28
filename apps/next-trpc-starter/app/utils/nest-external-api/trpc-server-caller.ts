import { appRouter } from "@next-trpc-starter/app/server/routers/_app";
import { httpBatchLink } from "@trpc/client";

export const trpcServerCaller = appRouter.createCaller({
  links: [
    httpBatchLink({
      // With external nestjs server
      url: `${process.env.NEXT_PUBLIC_NEST_URL}/trpc`,
    }),
  ],
});
