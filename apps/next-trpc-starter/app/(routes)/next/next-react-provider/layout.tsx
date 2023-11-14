"use client";

import { TrpcProvider } from "@next-trpc-starter/app/utils/next-internal-api/trpc-react/trpc-provider";
import { PropsWithChildren } from "react";

const RootLayout = (props: PropsWithChildren) => {
  return <TrpcProvider>{props.children}</TrpcProvider>;
};

export default RootLayout;
