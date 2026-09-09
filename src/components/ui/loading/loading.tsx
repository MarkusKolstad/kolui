import { cn } from "@/lib/utils";
import * as React from "react";
import styles from "./loading.module.css";

export type LoadingVariant = "spinner" | "bar" | "overlay";

export interface LoadingProps extends React.ComponentPropsWithoutRef<"div"> {
  variant?: LoadingVariant;
  label?: React.ReactNode;
}

export const Loading = React.forwardRef<HTMLDivElement, LoadingProps>(
  function Loading(
    { variant = "spinner", label = "Loading", className, ...props },
    ref,
  ) {
    return (
      <div
        ref={ref}
        role="status"
        aria-label={typeof label === "string" ? label : undefined}
        aria-busy="true"
        data-variant={variant}
        className={cn(styles.Loading, className)}
        {...props}
      >
        {variant === "spinner" ? (
          <span className={styles.Spinner} aria-hidden="true" />
        ) : null}
        {variant === "bar" ? (
          <span className={styles.Bar} aria-hidden="true" />
        ) : null}
        {variant === "overlay" ? (
          <span className={styles.OverlayContent}>
            <span className={styles.Spinner} aria-hidden="true" />
            <span>{label}</span>
          </span>
        ) : null}
        {variant !== "overlay" && typeof label !== "undefined" ? (
          <span className={styles.Label}>{label}</span>
        ) : null}
      </div>
    );
  },
);

Loading.displayName = "Loading";
