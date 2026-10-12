"use client";

import { cn } from "@/lib/utils";
import { Combobox as BaseCombobox } from "@base-ui/react/combobox";
import { forwardRef, type ComponentPropsWithoutRef } from "react";
import "./combobox.css";

const styles = {
  InputGroup: "ComboboxInputGroup",
  Input: "ComboboxInput",
  Trigger: "ComboboxTrigger",
  Clear: "ComboboxClear",
  Positioner: "ComboboxPositioner",
  Popup: "ComboboxPopup",
  List: "ComboboxList",
  Item: "ComboboxItem",
  ItemIndicator: "ComboboxItemIndicator",
  Empty: "ComboboxEmpty",
} as const;

/** Coordinates a combobox's items, value, and open state. */
export const Combobox = BaseCombobox.Root;

/** Groups the input with its trigger and clear controls. */
export const ComboboxInputGroup = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<typeof BaseCombobox.InputGroup> & {
    /** Disables the default group styling when composing with another input wrapper. */
    unstyled?: boolean;
  }
>(function ComboboxInputGroup({ className, unstyled = false, ...props }, ref) {
  return (
    <BaseCombobox.InputGroup
      ref={ref}
      className={cn(!unstyled && styles.InputGroup, className)}
      {...props}
    />
  );
});

ComboboxInputGroup.displayName = "ComboboxInputGroup";

/** The text input used to search and filter combobox items. */
export const ComboboxInput = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<typeof BaseCombobox.Input> & {
    /** Disables the default input styling when composing with another input wrapper. */
    unstyled?: boolean;
  }
>(function ComboboxInput({ className, unstyled = false, ...props }, ref) {
  return (
    <BaseCombobox.Input
      ref={ref}
      className={cn(!unstyled && styles.Input, className)}
      {...props}
    />
  );
});

ComboboxInput.displayName = "ComboboxInput";

/** Opens and closes the combobox popup. */
export const ComboboxTrigger = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<typeof BaseCombobox.Trigger>
>(function ComboboxTrigger({ className, ...props }, ref) {
  return (
    <BaseCombobox.Trigger
      ref={ref}
      className={cn(styles.Trigger, className)}
      {...props}
    />
  );
});

ComboboxTrigger.displayName = "ComboboxTrigger";

/** Clears the current combobox value and input text. */
export const ComboboxClear = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<typeof BaseCombobox.Clear>
>(function ComboboxClear({ className, ...props }, ref) {
  return (
    <BaseCombobox.Clear
      ref={ref}
      className={cn(styles.Clear, className)}
      {...props}
    />
  );
});

ComboboxClear.displayName = "ComboboxClear";

/** Renders combobox popup content outside the current DOM hierarchy. */
export const ComboboxPortal = BaseCombobox.Portal;

/** Positions the combobox popup relative to its input. */
export const ComboboxPositioner = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<typeof BaseCombobox.Positioner>
>(function ComboboxPositioner({ className, ...props }, ref) {
  return (
    <BaseCombobox.Positioner
      ref={ref}
      className={cn(styles.Positioner, className)}
      {...props}
    />
  );
});

ComboboxPositioner.displayName = "ComboboxPositioner";

/** The styled surface that contains the combobox list. */
export const ComboboxPopup = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<typeof BaseCombobox.Popup>
>(function ComboboxPopup({ className, ...props }, ref) {
  return (
    <BaseCombobox.Popup
      ref={ref}
      className={cn(styles.Popup, className)}
      {...props}
    />
  );
});

ComboboxPopup.displayName = "ComboboxPopup";

/** Renders the collection of available combobox items. */
export const ComboboxList = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<typeof BaseCombobox.List>
>(function ComboboxList({ className, ...props }, ref) {
  return (
    <BaseCombobox.List
      ref={ref}
      className={cn(styles.List, className)}
      {...props}
    />
  );
});

ComboboxList.displayName = "ComboboxList";

/** Selects a value when clicked or highlighted with the keyboard. */
export const ComboboxItem = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<typeof BaseCombobox.Item>
>(function ComboboxItem({ className, ...props }, ref) {
  return (
    <BaseCombobox.Item
      ref={ref}
      className={cn(styles.Item, className)}
      {...props}
    />
  );
});

ComboboxItem.displayName = "ComboboxItem";

/** Indicates that its parent combobox item is selected. */
export const ComboboxItemIndicator = forwardRef<
  HTMLSpanElement,
  ComponentPropsWithoutRef<typeof BaseCombobox.ItemIndicator>
>(function ComboboxItemIndicator({ className, ...props }, ref) {
  return (
    <BaseCombobox.ItemIndicator
      ref={ref}
      className={cn(styles.ItemIndicator, className)}
      {...props}
    />
  );
});

ComboboxItemIndicator.displayName = "ComboboxItemIndicator";

/** Renders when the combobox has no matching items. */
export const ComboboxEmpty = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<typeof BaseCombobox.Empty>
>(function ComboboxEmpty({ className, ...props }, ref) {
  return (
    <BaseCombobox.Empty
      ref={ref}
      className={cn(styles.Empty, className)}
      {...props}
    />
  );
});

ComboboxEmpty.displayName = "ComboboxEmpty";
