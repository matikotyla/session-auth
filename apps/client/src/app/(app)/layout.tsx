"use client";

import { AuthClient } from "@/clients";
import { FunctionComponent, PropsWithChildren } from "react";

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const { data, error, isPending } = AuthClient.useSession();

  if (isPending) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  return children;
};

export default Layout;
