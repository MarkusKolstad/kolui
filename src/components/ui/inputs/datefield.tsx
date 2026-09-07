import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { InputField, type InputFieldProps } from "./base/input";

interface DateFieldProps extends Omit<InputFieldProps, "type"> {}

export const DateField = forwardRef<HTMLInputElement, DateFieldProps>(
  function DateField({ ...props }, ref) {
    return (
      <InputField<HTMLInputElement>
        ref={ref}
        {...props}
        render={(renderProps: ComponentPropsWithoutRef<"input">) => (
          <input {...renderProps} type="date" />
        )}
      />
    );
  },
);

DateField.displayName = "DateField";
