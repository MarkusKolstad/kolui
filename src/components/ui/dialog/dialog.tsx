import { cn } from "@/lib/utils";
import { Dialog as BaseDialog } from "@base-ui/react/dialog";
import * as React from "react";
import "./dialog.css";

const styles = {
  Backdrop: "DialogBackdrop",
  Popup: "DialogPopup",
  Title: "DialogTitle",
  Description: "DialogDescription",
  Close: "DialogClose",
} as const;

const Dialog = BaseDialog.Root;

const DialogTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof BaseDialog.Trigger>
>(function DialogTrigger({ className, ...props }, ref) {
  return <BaseDialog.Trigger ref={ref} className={className} {...props} />;
});

DialogTrigger.displayName = "DialogTrigger";

const DialogPortal = BaseDialog.Portal;

const DialogBackdrop = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseDialog.Backdrop>
>(function DialogBackdrop({ className, ...props }, ref) {
  return (
    <BaseDialog.Backdrop
      ref={ref}
      className={cn(styles.Backdrop, className)}
      {...props}
    />
  );
});

DialogBackdrop.displayName = "DialogBackdrop";

const DialogPopup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseDialog.Popup>
>(function DialogPopup({ className, ...props }, ref) {
  return (
    <BaseDialog.Popup
      ref={ref}
      className={cn(styles.Popup, className)}
      {...props}
    />
  );
});

DialogPopup.displayName = "DialogPopup";

const DialogTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<typeof BaseDialog.Title>
>(function DialogTitle({ className, ...props }, ref) {
  return (
    <BaseDialog.Title
      ref={ref}
      className={cn(styles.Title, className)}
      {...props}
    />
  );
});

DialogTitle.displayName = "DialogTitle";

const DialogDescription = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<typeof BaseDialog.Description>
>(function DialogDescription({ className, ...props }, ref) {
  return (
    <BaseDialog.Description
      ref={ref}
      className={cn(styles.Description, className)}
      {...props}
    />
  );
});

DialogDescription.displayName = "DialogDescription";

const DialogClose = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof BaseDialog.Close>
>(function DialogClose({ className, ...props }, ref) {
  return (
    <BaseDialog.Close
      ref={ref}
      className={cn(styles.Close, className)}
      {...props}
    />
  );
});

DialogClose.displayName = "DialogClose";

export {
  Dialog,
  DialogBackdrop,
  DialogClose,
  DialogDescription,
  DialogPopup,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
