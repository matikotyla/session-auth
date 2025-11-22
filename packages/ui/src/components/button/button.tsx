import { Slot } from "@radix-ui/react-slot";
import { type ButtonProps, ButtonVariants } from "@/components/button";
import { cn } from "@/utils";
import { type FunctionComponent } from "react";

export const Button: FunctionComponent<ButtonProps> = ({
  className,
  variant = "contained",
  size = "md",
  asChild = false,
  ...props
}) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(ButtonVariants({ variant, size, className }))}
      {...props}
    />
  );
};
