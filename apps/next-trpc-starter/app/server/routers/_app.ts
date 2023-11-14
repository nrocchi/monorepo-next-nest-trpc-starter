import { z } from "zod";
import { procedure, router } from "../trpc";

export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        name: z.string().optional(),
      })
    )
    .query((opts) => {
      return `Hello ${opts.input.name ? opts.input.name : "Trpc"}`;
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
