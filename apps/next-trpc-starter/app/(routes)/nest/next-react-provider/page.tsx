import Link from "next/link";
import ClientSide from "./ClientSide";
import { trpcServerCaller } from "@next-trpc-starter/app/utils/nest-external-api/trpc-server-caller";

export default async function NextReactProvider() {
  const response = await trpcServerCaller.hello({ name: "Server side" });

  return (
    <>
      <h1 className="mb-10">
        TrpcReactProvider with Nest external API (React Query)
      </h1>
      <div className="mb-10">Server side: {response}</div>
      <ClientSide />

      <Link
        role="button"
        href="/nest"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-10"
      >
        Back to Nest menu page
      </Link>
    </>
  );
}
