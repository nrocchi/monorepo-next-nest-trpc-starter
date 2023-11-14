"use client";

import { trpcNext } from "@next-trpc-starter/app/utils/next-internal-api/trpc-next";
import { PropsWithChildren } from "react";

const RootLayout = (props: PropsWithChildren) => {
  return props.children;
};

export default trpcNext.withTRPC(RootLayout);
