"use client";

import { trpcReact } from "@next-trpc-starter/app/utils/nest-external-api/trpc-react/trpc-react";

export default function ClientSide() {
  const { data, isLoading, isRefetching, status } = trpcReact.hello.useQuery({
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
