import { cn } from "@/lib/utils";
import { Menu as BaseMenu } from "@base-ui/react/menu";
import { Check, ChevronRight } from "lucide-react";
import * as React from "react";
import styles from "./menu.module.css";

export const Menu = BaseMenu.Root;
export const MenuPortal = BaseMenu.Portal;

export const MenuTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof BaseMenu.Trigger>
>(function MenuTrigger({ className, ...props }, ref) {
  return <BaseMenu.Trigger ref={ref} className={className} {...props} />;
});

MenuTrigger.displayName = "MenuTrigger";

export const MenuPositioner = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseMenu.Positioner>
>(function MenuPositioner({ className, ...props }, ref) {
  return (
    <BaseMenu.Positioner
      ref={ref}
      className={cn(styles.Positioner, className)}
      {...props}
    />
  );
});

MenuPositioner.displayName = "MenuPositioner";

export const MenuPopup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseMenu.Popup>
>(function MenuPopup({ className, ...props }, ref) {
  return (
    <BaseMenu.Popup
      ref={ref}
      className={cn(styles.Popup, className)}
      {...props}
    />
  );
});

MenuPopup.displayName = "MenuPopup";

export const MenuItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseMenu.Item>
>(function MenuItem({ className, ...props }, ref) {
  return (
    <BaseMenu.Item
      ref={ref}
      className={cn(styles.Item, className)}
      {...props}
    />
  );
});

MenuItem.displayName = "MenuItem";

export const MenuLinkItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<typeof BaseMenu.LinkItem>
>(function MenuLinkItem({ className, ...props }, ref) {
  return (
    <BaseMenu.LinkItem
      ref={ref}
      className={cn(styles.Item, className)}
      {...props}
    />
  );
});

MenuLinkItem.displayName = "MenuLinkItem";

export const MenuSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseMenu.Separator>
>(function MenuSeparator({ className, ...props }, ref) {
  return (
    <BaseMenu.Separator
      ref={ref}
      className={cn(styles.Separator, className)}
      {...props}
    />
  );
});

MenuSeparator.displayName = "MenuSeparator";

export const MenuGroup = BaseMenu.Group;
export const MenuGroupLabel = BaseMenu.GroupLabel;
export const MenuSubmenuRoot = BaseMenu.SubmenuRoot;

export const MenuSubmenuTrigger = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseMenu.SubmenuTrigger>
>(function MenuSubmenuTrigger({ children, className, ...props }, ref) {
  return (
    <BaseMenu.SubmenuTrigger
      ref={ref}
      className={cn(styles.Item, className)}
      {...props}
    >
      <span>{children}</span>
      <ChevronRight size={16} aria-hidden="true" />
    </BaseMenu.SubmenuTrigger>
  );
});

MenuSubmenuTrigger.displayName = "MenuSubmenuTrigger";

export const MenuCheckboxItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseMenu.CheckboxItem>
>(function MenuCheckboxItem({ className, children, ...props }, ref) {
  return (
    <BaseMenu.CheckboxItem
      ref={ref}
      className={cn(styles.Item, styles.CheckboxItem, className)}
      {...props}
    >
      <BaseMenu.CheckboxItemIndicator className={styles.Indicator}>
        <Check size={14} aria-hidden="true" />
      </BaseMenu.CheckboxItemIndicator>
      <span>{children}</span>
    </BaseMenu.CheckboxItem>
  );
});

MenuCheckboxItem.displayName = "MenuCheckboxItem";

export const MenuRadioGroup = BaseMenu.RadioGroup;

export const MenuRadioItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseMenu.RadioItem>
>(function MenuRadioItem({ className, children, ...props }, ref) {
  return (
    <BaseMenu.RadioItem
      ref={ref}
      className={cn(styles.Item, styles.RadioItem, className)}
      {...props}
    >
      <BaseMenu.RadioItemIndicator className={styles.Indicator}>
        <span className={styles.RadioDot} />
      </BaseMenu.RadioItemIndicator>
      <span>{children}</span>
    </BaseMenu.RadioItem>
  );
});

MenuRadioItem.displayName = "MenuRadioItem";
