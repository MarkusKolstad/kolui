import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { InputField, type InputFieldProps } from "./base/input";

export const TextAreaField = forwardRef<HTMLTextAreaElement, InputFieldProps>(
  function TextAreaField(props, ref) {
    return (
      <InputField<HTMLTextAreaElement>
        ref={ref}
        {...props}
        render={(renderProps: ComponentPropsWithoutRef<"textarea">) => (
          <textarea {...renderProps} />
        )}
      />
    );
  },
);

TextAreaField.displayName = "TextAreaField";
