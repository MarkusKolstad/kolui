import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import "./badge.css";

const badgeVariants = cva("badge", {
  variants: {
    theme: {
      primary: "badge-primary",
      secondary: "badge-secondary",
      accent: "badge-accent",
      success: "badge-success",
      warning: "badge-warning",
      error: "badge-error",
    },
    variant: {
      filled: "badge-filled",
      outlined: "badge-outlined",
      soft: "badge-soft",
    },
    size: {
      xs: "badge-xs",
      sm: "badge-sm",
      md: "badge-md",
    },
    shape: {
      rounded: "badge-rounded",
      square: "badge-square",
    },
  },
  defaultVariants: {
    theme: "secondary",
    variant: "soft",
    size: "sm",
    shape: "rounded",
  },
});

export interface BadgeProps
  extends
    React.ComponentPropsWithoutRef<"span">,
    VariantProps<typeof badgeVariants> {}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  function Badge({ className, theme, variant, size, shape, ...props }, ref) {
    return (
      <span
        ref={ref}
        className={cn(
          badgeVariants({ theme, variant, size, shape }),
          className,
        )}
        {...props}
      />
    );
  },
);

Badge.displayName = "Badge";

export { badgeVariants };
