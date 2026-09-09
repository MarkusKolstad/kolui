import { cn } from "@/lib/utils";
import { Toast as BaseToast } from "@base-ui/react/toast";
import { X } from "lucide-react";
import * as React from "react";
import styles from "./toast.module.css";

export const ToastProvider = BaseToast.Provider;
export const useToastManager = BaseToast.useToastManager;
export const createToastManager = BaseToast.createToastManager;
export const ToastPortal = BaseToast.Portal;

export const ToastViewport = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseToast.Viewport>
>(function ToastViewport({ className, ...props }, ref) {
  return (
    <BaseToast.Viewport
      ref={ref}
      className={cn(styles.Viewport, className)}
      {...props}
    />
  );
});

ToastViewport.displayName = "ToastViewport";

export const ToastRoot = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseToast.Root>
>(function ToastRoot({ className, ...props }, ref) {
  return (
    <BaseToast.Root
      ref={ref}
      className={cn(styles.Toast, className)}
      {...props}
    />
  );
});

ToastRoot.displayName = "ToastRoot";

export const ToastContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseToast.Content>
>(function ToastContent({ className, ...props }, ref) {
  return (
    <BaseToast.Content
      ref={ref}
      className={cn(styles.Content, className)}
      {...props}
    />
  );
});

ToastContent.displayName = "ToastContent";

export const ToastTitle = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseToast.Title>
>(function ToastTitle({ className, ...props }, ref) {
  return (
    <BaseToast.Title
      ref={ref}
      className={cn(styles.Title, className)}
      {...props}
    />
  );
});

ToastTitle.displayName = "ToastTitle";

export const ToastDescription = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseToast.Description>
>(function ToastDescription({ className, ...props }, ref) {
  return (
    <BaseToast.Description
      ref={ref}
      className={cn(styles.Description, className)}
      {...props}
    />
  );
});

ToastDescription.displayName = "ToastDescription";

export const ToastAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof BaseToast.Action>
>(function ToastAction({ className, ...props }, ref) {
  return (
    <BaseToast.Action
      ref={ref}
      className={cn(styles.Action, className)}
      {...props}
    />
  );
});

ToastAction.displayName = "ToastAction";

export const ToastClose = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof BaseToast.Close>
>(function ToastClose({ children, className, ...props }, ref) {
  return (
    <BaseToast.Close
      ref={ref}
      className={cn(styles.Close, className)}
      aria-label={props["aria-label"] ?? "Dismiss notification"}
      {...props}
    >
      {children ?? <X size={16} aria-hidden="true" />}
    </BaseToast.Close>
  );
});

ToastClose.displayName = "ToastClose";
