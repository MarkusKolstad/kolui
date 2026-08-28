import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { type VariantProps } from "class-variance-authority";

import { useRipple } from "@/hooks/useRipple";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./button";
import "./button.styles.css";

const iconButtonVariants = (props: VariantProps<typeof buttonVariants>) =>
  cn(buttonVariants(props), "icon-btn");

function IconButton({
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
      className={cn(
        iconButtonVariants({ variant, theme, size, shape }),
        className,
      )}
      {...props}
    />
  );
}

export { IconButton, iconButtonVariants };
