import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import styles from "./badge.module.css";

const badgeVariants = cva(styles.Badge, {
  variants: {
    theme: {
      primary: styles.Primary,
      secondary: styles.Secondary,
      accent: styles.Accent,
      success: styles.Success,
      warning: styles.Warning,
      error: styles.Error,
    },
    variant: {
      filled: styles.Filled,
      outlined: styles.Outlined,
      soft: styles.Soft,
    },
    size: {
      xs: styles.ExtraSmall,
      sm: styles.Small,
      md: styles.Medium,
    },
    shape: {
      rounded: styles.Rounded,
      square: styles.Square,
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
