import { ButtonStyles as styles } from "@/components/button";
import { cva } from "class-variance-authority";

export const ButtonVariants = cva(styles.root, {
  variants: {
    variant: {
      contained: styles.contained,
      // destructive:
      //   "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
      outlined: styles.outlined,
      // secondary:
      //   "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      // ghost:
      //   "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
      // link: "text-primary underline-offset-4 hover:underline",
    },
    size: {
      sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
      md: "h-9 px-4 py-2 has-[>svg]:px-3",
      lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
      "icon-sm": "size-8",
      "icon-md": "size-9",
      "icon-lg": "size-10",
    },
  },
  defaultVariants: {
    variant: "contained",
    size: "md",
  },
});
