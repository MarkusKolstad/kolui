import { cn } from "@/lib/utils";
import { forwardRef, useId } from "react";
import {
  InputDescription,
  InputLabel,
  InputWrapper,
  type InputFieldProps,
} from "./base/input";

export const TextField = forwardRef<HTMLInputElement, InputFieldProps>(
  function TextField(
    {
      className,
      id,
      label,
      description,
      required,
      disabled,
      fieldProps,
      ...inputProps
    },
    ref,
  ) {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const labelId = label ? inputId + "-label" : undefined;
    const descriptionId = description ? inputId + "-description" : undefined;

    return (
      <div
        {...fieldProps}
        className={cn("flex flex-col gap-1", fieldProps?.className)}
      >
        {labelId ? (
          <InputLabel
            id={labelId}
            htmlFor={inputId}
            required={required}
            disabled={disabled}
          >
            {label}
          </InputLabel>
        ) : null}
        <InputWrapper
          ref={ref}
          id={inputId}
          aria-labelledby={labelId}
          aria-describedby={descriptionId}
          required={required}
          disabled={disabled}
          {...inputProps}
        />
        {descriptionId ? (
          <InputDescription id={descriptionId}>{description}</InputDescription>
        ) : null}
      </div>
    );
  },
);

TextField.displayName = "TextField";
