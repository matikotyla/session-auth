import { type SeparatorProps } from "@/components/separator";
import { cn } from "@/utils";
import { Root as RootPrimitive } from "@radix-ui/react-separator";
import type { FunctionComponent } from "react";

export const Separator: FunctionComponent<SeparatorProps> = ({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) => {
  return (
    <RootPrimitive
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  );
};
