"use client";

import { trpcNextSSR } from "@next-trpc-starter/app/utils/nest-external-api/trpc-next-ssr";
import Link from "next/link";

export default function NextSSRReactQuery() {
  const { data, isLoading, isRefetching, status } = trpcNextSSR.hello.useQuery({
    name: "from React Query with SSR",
  });

  return (
    <>
      <h1 className="mb-10">TrpcNextSSR with Nest external API (React Query)</h1>
      <div className="mb-10">Status: {status}</div>

      {isLoading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : isRefetching ? (
        <div>
          <h1>Refetching...</h1>
        </div>
      ) : (
        <div>Client side: {data}</div>
      )}

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
