import { type ComponentProps } from "react";

export type ButtonProps = ComponentProps<"button"> & {
  size?: "sm" | "md" | "lg" | "icon-sm" | "icon-md" | "icon-lg";
  variant?: "contained" | "outlined" | "tonal" | "soft" | "link";
  asChild?: boolean;
};
