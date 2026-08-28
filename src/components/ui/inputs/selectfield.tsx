import { forwardRef, useId } from "react";
import {
  InputDescription,
  InputLabel,
  InputWrapper,
  type InputFieldProps,
} from "./base/input";

export const SelectField = forwardRef<HTMLInputElement, InputFieldProps>(
  function InputField(
    { className, id, label, description, ...inputProps },
    ref,
  ) {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const labelId = label ? inputId + "-label" : undefined;
    const descriptionId = description ? inputId + "-description" : undefined;

    return (
      <>
        {labelId ? (
          <InputLabel id={labelId} htmlFor={inputId}>
            {label}
          </InputLabel>
        ) : null}
        <InputWrapper
          ref={ref}
          aria-labelledby={labelId}
          aria-describedby={descriptionId}
          {...inputProps}
        />
        {descriptionId ? (
          <InputDescription id={descriptionId}>{description}</InputDescription>
        ) : null}
      </>
    );
  },
);

SelectField.displayName = "SelectField";
