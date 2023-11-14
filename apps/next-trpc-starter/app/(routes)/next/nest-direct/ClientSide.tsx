"use client";

import { trpcNest } from "@next-trpc-starter/app/utils/next-internal-api/trpc-nest";
import { useEffect, useState } from "react";

export default function ClientSide() {
  const [hello, setHello] = useState("");

  useEffect(() => {
    trpcNest.hello
      .query({ name: "Client side" })
      .then((response) => setHello(response));
  }, []);

  return <div>Client side: {hello}</div>;
}
