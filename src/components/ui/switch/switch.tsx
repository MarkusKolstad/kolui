import { cn } from "@/lib/utils";
import { Switch as BaseSwitch } from "@base-ui/react/switch";
import * as React from "react";
import "./switch.css";

const styles = {
  Field: "SwitchField",
  Switch: "Switch",
  Thumb: "SwitchThumb",
  Label: "SwitchLabel",
  Description: "SwitchDescription",
} as const;

export interface SwitchProps extends React.ComponentPropsWithoutRef<
  typeof BaseSwitch.Root
> {
  label?: React.ReactNode;
  description?: React.ReactNode;
}

export const Switch = React.forwardRef<HTMLElement, SwitchProps>(
  function Switch({ id, label, description, className, ...props }, ref) {
    const inputId = id ?? React.useId();
    const labelId = label ? `${inputId}-label` : undefined;
    const descriptionId = description ? `${inputId}-description` : undefined;

    return (
      <div className={styles.Field}>
        <BaseSwitch.Root
          ref={ref}
          id={inputId}
          className={cn(styles.Switch, className)}
          aria-labelledby={labelId}
          aria-describedby={descriptionId}
          {...props}
        >
          <BaseSwitch.Thumb className={styles.Thumb} />
        </BaseSwitch.Root>
        {label ? (
          <label className={styles.Label} htmlFor={inputId}>
            <span id={labelId}>{label}</span>
            {description ? (
              <span className={styles.Description} id={descriptionId}>
                {description}
              </span>
            ) : null}
          </label>
        ) : null}
      </div>
    );
  },
);

Switch.displayName = "Switch";
