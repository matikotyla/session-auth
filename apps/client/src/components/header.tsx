import { MonkeyTieLogo } from "@/assets/logos";
import { Button } from "@repo/ui/button";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 animate-fade-in border-b backdrop-blur-[12px]">
      <div className="container mx-auto flex h-[--navigation-height] w-full items-center justify-between">
        <Link href="/" className="flex gap-2 items-center">
          <MonkeyTieLogo className="w-5 h-5" />
          <p className="text-md font-normal">Auth</p>
        </Link>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="soft" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button size="sm" variant="contained" asChild>
            <Link href="/register">Register</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
