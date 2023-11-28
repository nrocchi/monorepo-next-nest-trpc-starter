import { trpcServerCaller } from "@next-trpc-starter/app/utils/nest-external-api/trpc-server-caller";
import Link from "next/link";
import ClientSide from "./ClientSide";

export default async function NextReactProvider() {
  const response = await trpcServerCaller.hello({ name: "Server side" });

  return (
    <>
      <h1 className="mb-10">
        TrpcReactProvider with Next internal API (React Query)
      </h1>
      <div className="mb-10">Server side: {response}</div>
      <ClientSide />

      <Link
        role="button"
        href="/next"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-10"
      >
        Back to Next menu page
      </Link>
    </>
  );
}
