import { trpcNest } from "@next-trpc-starter/app/utils/nest-external-api/trpc-nest";
import ClientSide from "./ClientSide";
import Link from "next/link";

export default async function NestDirect() {
  const response = await trpcNest.hello.query({ name: `Server side` });

  return (
    <>
      <h1 className="mb-10">TrpcNest with Nest external API (direct call)</h1>
      <div>Server side: {response}</div>
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
