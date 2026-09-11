import { cn } from "@/lib/utils";
import { Drawer as BaseDrawer } from "@base-ui/react/drawer";
import { X } from "lucide-react";
import * as React from "react";
import styles from "./drawer.module.css";

export const Drawer = BaseDrawer.Root;

export const DrawerTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof BaseDrawer.Trigger>
>(function DrawerTrigger({ className, ...props }, ref) {
  return <BaseDrawer.Trigger ref={ref} className={className} {...props} />;
});

DrawerTrigger.displayName = "DrawerTrigger";

export const DrawerPortal = BaseDrawer.Portal;

export const DrawerBackdrop = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseDrawer.Backdrop>
>(function DrawerBackdrop({ className, ...props }, ref) {
  return (
    <BaseDrawer.Backdrop
      ref={ref}
      className={cn(styles.Backdrop, className)}
      {...props}
    />
  );
});

DrawerBackdrop.displayName = "DrawerBackdrop";

export const DrawerViewport = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseDrawer.Viewport>
>(function DrawerViewport({ className, ...props }, ref) {
  return (
    <BaseDrawer.Viewport
      ref={ref}
      className={cn(styles.Viewport, className)}
      {...props}
    />
  );
});

DrawerViewport.displayName = "DrawerViewport";

export const DrawerPopup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseDrawer.Popup>
>(function DrawerPopup({ className, ...props }, ref) {
  return (
    <BaseDrawer.Popup
      ref={ref}
      className={cn(styles.Popup, className)}
      {...props}
    />
  );
});

DrawerPopup.displayName = "DrawerPopup";

export const DrawerTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<typeof BaseDrawer.Title>
>(function DrawerTitle({ className, ...props }, ref) {
  return (
    <BaseDrawer.Title
      ref={ref}
      className={cn(styles.Title, className)}
      {...props}
    />
  );
});

DrawerTitle.displayName = "DrawerTitle";

export const DrawerDescription = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<typeof BaseDrawer.Description>
>(function DrawerDescription({ className, ...props }, ref) {
  return (
    <BaseDrawer.Description
      ref={ref}
      className={cn(styles.Description, className)}
      {...props}
    />
  );
});

DrawerDescription.displayName = "DrawerDescription";

export const DrawerClose = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof BaseDrawer.Close>
>(function DrawerClose({ children, className, ...props }, ref) {
  return (
    <BaseDrawer.Close
      ref={ref}
      className={className}
      aria-label={props["aria-label"] ?? "Close drawer"}
      {...props}
    >
      {children ?? <X size={18} aria-hidden="true" />}
    </BaseDrawer.Close>
  );
});

DrawerClose.displayName = "DrawerClose";
