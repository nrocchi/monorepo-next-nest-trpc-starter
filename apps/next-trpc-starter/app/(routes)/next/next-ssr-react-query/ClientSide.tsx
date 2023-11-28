"use client";

import { trpcNextSSR } from "@next-trpc-starter/app/utils/next-internal-api/trpc-next-ssr";

export default function ClientSide() {
  const { data, isLoading, isRefetching, status } = trpcNextSSR.hello.useQuery({
    name: "from React Query with SSR",
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
