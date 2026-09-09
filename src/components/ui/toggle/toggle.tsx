import { cn } from "@/lib/utils";
import { Toggle as BaseToggle } from "@base-ui/react/toggle";
import { ToggleGroup as BaseToggleGroup } from "@base-ui/react/toggle-group";
import * as React from "react";
import styles from "./toggle.module.css";

export const Toggle = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof BaseToggle>
>(function Toggle({ className, ...props }, ref) {
  return (
    <BaseToggle ref={ref} className={cn(styles.Toggle, className)} {...props} />
  );
});

Toggle.displayName = "Toggle";

export const ToggleGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseToggleGroup>
>(function ToggleGroup({ className, ...props }, ref) {
  return (
    <BaseToggleGroup
      ref={ref}
      className={cn(styles.ToggleGroup, className)}
      {...props}
    />
  );
});

ToggleGroup.displayName = "ToggleGroup";
