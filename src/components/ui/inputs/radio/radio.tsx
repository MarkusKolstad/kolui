import { Radio } from "@base-ui/react/radio";
import { RadioGroup, type RadioGroupProps } from "@base-ui/react/radio-group";
import type { ReactNode } from "react";
import * as React from "react";
import "./radio.css";

const styles = {
  RadioGroup: "RadioGroup",
  Label: "RadioGroupLabel",
  Options: "RadioOptions",
  Option: "RadioOption",
  Radio: "Radio",
  Indicator: "RadioIndicator",
  Content: "RadioContent",
  Description: "RadioDescription",
  GroupDescription: "RadioGroupDescription",
} as const;

export interface RadioOption {
  value: string;
  label: ReactNode;
  description?: ReactNode;
}

export interface RadioGroupFieldProps extends Omit<
  RadioGroupProps<string>,
  "children"
> {
  label?: ReactNode;
  description?: ReactNode;
  options: readonly RadioOption[];
}

export const RadioGroupField = React.forwardRef<
  HTMLDivElement,
  RadioGroupFieldProps
>(function RadioGroupField(
  { id, label, description, options, className, ...groupProps },
  ref,
) {
  const labelId = label ? `${id ?? "radio-group"}-label` : undefined;
  const descriptionId = description
    ? `${id ?? "radio-group"}-description`
    : undefined;

  return (
    <RadioGroup
      ref={ref}
      id={id}
      className={className ?? styles.RadioGroup}
      aria-labelledby={labelId}
      aria-describedby={descriptionId}
      {...groupProps}
    >
      {label ? (
        <div className={styles.Label} id={labelId}>
          {label}
        </div>
      ) : null}
      <div className={styles.Options}>
        {options.map((option) => (
          <label className={styles.Option} key={option.value}>
            <Radio.Root value={option.value} className={styles.Radio}>
              <Radio.Indicator className={styles.Indicator} />
            </Radio.Root>
            <span className={styles.Content}>
              <span>{option.label}</span>
              {option.description ? (
                <span className={styles.Description}>{option.description}</span>
              ) : null}
            </span>
          </label>
        ))}
      </div>
      {description ? (
        <span className={styles.GroupDescription} id={descriptionId}>
          {description}
        </span>
      ) : null}
    </RadioGroup>
  );
});

RadioGroupField.displayName = "RadioGroupField";
