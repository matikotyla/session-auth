import { Button } from "@repo/ui/button";

export default function Home() {
  return (
    <div className="p-4">
      <h4 className="font-sans text-xl">Page</h4>
      <div className="flex gap-2">
        <Button>Click me</Button>
        <Button variant="outlined">Click me</Button>
      </div>
    </div>
  );
}
