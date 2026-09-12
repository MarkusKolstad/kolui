import { cn } from "@/lib/utils";
import { Accordion as BaseAccordion } from "@base-ui/react/accordion";
import { ChevronDown } from "lucide-react";
import * as React from "react";
import "./accordion.css";

const styles = {
  Accordion: "Accordion",
  Item: "AccordionItem",
  Header: "AccordionHeader",
  Trigger: "AccordionTrigger",
  TriggerIcon: "AccordionTriggerIcon",
  Panel: "AccordionPanel",
} as const;

export const Accordion = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseAccordion.Root>
>(function Accordion({ className, ...props }, ref) {
  return (
    <BaseAccordion.Root
      ref={ref}
      className={cn(styles.Accordion, className)}
      {...props}
    />
  );
});

Accordion.displayName = "Accordion";

export const AccordionItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseAccordion.Item>
>(function AccordionItem({ className, ...props }, ref) {
  return (
    <BaseAccordion.Item
      ref={ref}
      className={cn(styles.Item, className)}
      {...props}
    />
  );
});

AccordionItem.displayName = "AccordionItem";

export const AccordionHeader = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<typeof BaseAccordion.Header>
>(function AccordionHeader({ className, ...props }, ref) {
  return (
    <BaseAccordion.Header
      ref={ref}
      className={cn(styles.Header, className)}
      {...props}
    />
  );
});

AccordionHeader.displayName = "AccordionHeader";

export const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof BaseAccordion.Trigger>
>(function AccordionTrigger({ children, className, ...props }, ref) {
  return (
    <BaseAccordion.Trigger
      ref={ref}
      className={cn(styles.Trigger, className)}
      {...props}
    >
      <span>{children}</span>
      <ChevronDown className={styles.TriggerIcon} aria-hidden="true" />
    </BaseAccordion.Trigger>
  );
});

AccordionTrigger.displayName = "AccordionTrigger";

export const AccordionPanel = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseAccordion.Panel>
>(function AccordionPanel({ className, ...props }, ref) {
  return (
    <BaseAccordion.Panel
      ref={ref}
      className={cn(styles.Panel, className)}
      {...props}
    />
  );
});

AccordionPanel.displayName = "AccordionPanel";
