import { AppRouter } from "@next-trpc-starter/app/server/routers/_app";
import { createTRPCReact } from "@trpc/react-query";
export const trpcReact = createTRPCReact<AppRouter>();
