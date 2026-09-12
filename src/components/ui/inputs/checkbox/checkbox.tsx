import { Checkbox } from "@base-ui/react/checkbox";
import { CheckIcon } from "lucide-react";
import type { ReactNode } from "react";
import * as React from "react";
import "./index.css";

const styles = {
  Label: "CheckboxLabel",
  Checkbox: "Checkbox",
  Indicator: "CheckboxIndicator",
  Content: "CheckboxContent",
  Description: "CheckboxDescription",
} as const;

export interface CheckboxProps extends Omit<
  React.ComponentPropsWithoutRef<typeof Checkbox.Root>,
  "children"
> {
  label?: ReactNode;
  description?: ReactNode;
}

type CheckboxFieldComponent = (
  props: CheckboxProps &
    React.RefAttributes<React.ComponentRef<typeof Checkbox.Root>>,
) => React.ReactElement | null;

function CheckboxFieldImpl(
  {
    id,
    label = "Checkbox",
    description,
    className,
    ...rootProps
  }: CheckboxProps,
  ref: React.ForwardedRef<React.ComponentRef<typeof Checkbox.Root>>,
) {
  const labelId = label ? `${id ?? "checkbox"}-label` : undefined;
  const descriptionId = description
    ? `${id ?? "checkbox"}-description`
    : undefined;

  return (
    <label className={styles.Label}>
      <Checkbox.Root
        ref={ref}
        id={id}
        className={className ?? styles.Checkbox}
        aria-labelledby={labelId}
        aria-describedby={descriptionId}
        {...rootProps}
      >
        <Checkbox.Indicator className={styles.Indicator}>
          <CheckIcon className="h-4 w-4 aspect-square" />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <span className={styles.Content}>
        <span id={labelId}>{label}</span>
        {description ? (
          <span className={styles.Description} id={descriptionId}>
            {description}
          </span>
        ) : null}
      </span>
    </label>
  );
}

export const CheckboxField = React.forwardRef(
  CheckboxFieldImpl,
) as CheckboxFieldComponent;
