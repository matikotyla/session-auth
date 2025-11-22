import { type ComponentProps } from "react";

export type BadgeProps = ComponentProps<"span"> & {
  variant?: "default" | "secondary" | "destructive" | "outline";
} & { asChild?: boolean };
