"use client";

import { trpcNext } from "@next-trpc-starter/app/utils/next-internal-api/trpc-next";

export default function ClientSide() {
  const { data, isLoading, isRefetching, status } = trpcNext.hello.useQuery({
    name: "from React Query",
  });

  return (
    <>
      <div>Status: {status}</div>
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
    </>
  );
}
