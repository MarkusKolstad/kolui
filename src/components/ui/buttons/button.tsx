import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { useRipple } from "@/hooks/useRipple";
import { cn } from "@/lib/utils";
import "./button.styles.css";

const buttonVariants = cva("btn", {
  variants: {
    variant: {
      filled: "btn-filled",
      outlined: "btn-outlined",
      ghost: "btn-ghost",
    },
    theme: {
      primary: "btn-primary",
      secondary: "btn-secondary",
      accent: "btn-accent",
      success: "btn-success",
      error: "btn-error",
      warning: "btn-warning",
    },
    size: {
      sm: "btn-sm",
      md: "btn-md",
      lg: "btn-lg",
    },
    shape: {
      rounded: "btn-rounded",
      square: "btn-square",
    },
  },
  defaultVariants: {
    variant: "filled",
    size: "md",
    shape: "square",
  },
});

function Button({
  className,
  variant = "filled",
  theme = "primary",
  size = "md",
  shape = "square",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  const { createRipple } = useRipple({});

  return (
    <ButtonPrimitive
      data-slot="button"
      onMouseDown={createRipple}
      className={cn(buttonVariants({ variant, theme, size, shape, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
