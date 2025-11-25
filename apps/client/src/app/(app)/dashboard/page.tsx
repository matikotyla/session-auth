"use client";

import { AuthClient } from "@/clients";
import { Button } from "@repo/ui/button";
import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";

const Page: FunctionComponent = () => {
  const router = useRouter();
  const { data, isPending } = AuthClient.useSession();

  // if (!data && !isPending) {
  //   router.push("/login");
  //   return null;
  // }

  const handleLogout = () => {
    AuthClient.signOut({
      fetchOptions: {
        onSuccess: () => router.push("/login"),
      },
    });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-2">
        <h4 className="text-md font-medium">Dashboard page</h4>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </div>
  );
};

export default Page;
