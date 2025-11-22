import { type LabelProps } from "@/components/label";
import { cn } from "@/utils";
import { Root as RootPrimitive } from "@radix-ui/react-label";
import type { FunctionComponent } from "react";

export const Label: FunctionComponent<LabelProps> = ({
  className,
  ...props
}) => {
  return (
    <RootPrimitive
      data-slot="label"
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
};
