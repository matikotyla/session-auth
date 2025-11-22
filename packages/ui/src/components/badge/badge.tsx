import { type BadgeProps, BadgeVariants } from "@/components/badge";
import { cn } from "@/utils";
import { Slot } from "@radix-ui/react-slot";
import { type FunctionComponent } from "react";

export const Badge: FunctionComponent<BadgeProps> = ({
  className,
  variant = "default",
  asChild = false,
  ...props
}) => {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(BadgeVariants({ variant }), className)}
      {...props}
    />
  );
};
