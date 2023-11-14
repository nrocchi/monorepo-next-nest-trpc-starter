"use client";

import { trpcNextSSR } from "@next-trpc-starter/app/utils/next-internal-api/trpc-next-ssr";
import { PropsWithChildren } from "react";

const RootLayout = (props: PropsWithChildren) => {
  return props.children;
};

export default trpcNextSSR.withTRPC(RootLayout);
