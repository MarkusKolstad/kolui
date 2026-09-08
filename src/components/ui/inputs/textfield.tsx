import { forwardRef, useId } from "react";
import {
  InputDescription,
  InputLabel,
  InputWrapper,
  type InputFieldProps,
} from "./base/input";

export const TextField = forwardRef<HTMLInputElement, InputFieldProps>(
  function TextField(
    { className, id, label, description, required, disabled, ...inputProps },
    ref,
  ) {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const labelId = label ? inputId + "-label" : undefined;
    const descriptionId = description ? inputId + "-description" : undefined;

    return (
      <div className="flex flex-col gap-1">
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
