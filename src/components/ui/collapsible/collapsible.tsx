import { cn } from "@/lib/utils";
import { Collapsible as BaseCollapsible } from "@base-ui/react/collapsible";
import { ChevronDown } from "lucide-react";
import * as React from "react";
import styles from "./collapsible.module.css";

export const Collapsible = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseCollapsible.Root>
>(function Collapsible({ className, ...props }, ref) {
  return (
    <BaseCollapsible.Root
      ref={ref}
      className={cn(styles.Collapsible, className)}
      {...props}
    />
  );
});

Collapsible.displayName = "Collapsible";

export const CollapsibleTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof BaseCollapsible.Trigger>
>(function CollapsibleTrigger({ children, className, ...props }, ref) {
  return (
    <BaseCollapsible.Trigger
      ref={ref}
      className={cn(styles.Trigger, className)}
      {...props}
    >
      <span>{children}</span>
      <ChevronDown className={styles.TriggerIcon} aria-hidden="true" />
    </BaseCollapsible.Trigger>
  );
});

CollapsibleTrigger.displayName = "CollapsibleTrigger";

export const CollapsiblePanel = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseCollapsible.Panel>
>(function CollapsiblePanel({ className, ...props }, ref) {
  return (
    <BaseCollapsible.Panel
      ref={ref}
      className={cn(styles.Panel, className)}
      {...props}
    />
  );
});

CollapsiblePanel.displayName = "CollapsiblePanel";
