import { GithubLogo } from "@/assets/logos";
import { Button } from "@repo/ui/button";
import { Input } from "@repo/ui/input";
import { Label } from "@repo/ui/label";
import { Separator } from "@repo/ui/separator";
import Link from "next/link";
import { FunctionComponent } from "react";

const Page: FunctionComponent = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="flex w-full flex-col justify-center gap-6 max-w-xs">
        <div className="flex flex-col gap-1 text-center">
          <h4 className="text-xl font-medium tracking-tight">
            Create an account
          </h4>
          <p className="text-sm text-muted-foreground">
            Sign up for an account
          </p>
        </div>
        <form className="flex flex-col gap-4">
          <div className="grid w-full gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="name@example.com" />
          </div>
          <div className="grid w-full gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" placeholder="name" />
          </div>
          <div className="grid w-full gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
          <Button>Sign up with email</Button>
        </form>
        <Separator />
        <Button variant="outlined">
          <GithubLogo />
          Sign up with github
        </Button>
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link className="text-foreground font-medium" href="/login">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
