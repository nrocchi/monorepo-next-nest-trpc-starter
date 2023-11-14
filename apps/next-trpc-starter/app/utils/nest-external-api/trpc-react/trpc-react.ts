import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@nest-trpc-starter/trpc/trpc.router";
export const trpcReact = createTRPCReact<AppRouter>();
