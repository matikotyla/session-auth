import { Badge } from "@repo/ui/badge";
import { Button } from "@repo/ui/button";
import { Blocks, Key, Layers } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <div className="w-full h-[--navigation-height]" />
      <div className="py-24">
        <section id="hero" className="w-full relative">
          <div className="flex flex-col items-center locker">
            <div className="max-w-3xl mx-auto w-full flex flex-col gap-10 items-center justify-center">
              <Badge variant="outline">
                <Layers />
                Introducing custom automations
              </Badge>
              <div className="flex flex-col items-center justify-center gap-5">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal tracking-tighter text-balance text-center text-foreground">
                  Meet your <span className="text-primary">AI Agent</span>{" "}
                  Streamline your workflow
                </h1>
                <p className="text-base md:text-lg text-center text-muted-foreground font-normal text-balance leading-relaxed tracking-tight">
                  AI assistant designed to streamline your digital workflows and
                  handle mundane tasks, so you can focus on what truly matters
                </p>
              </div>
              <div className="flex items-center gap-2 flex-wrap justify-center">
                <Button size="md" variant="contained">
                  <Blocks />
                  Get started for free
                </Button>
                <Button size="md" variant="outlined">
                  <Key />
                  Log in now
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
