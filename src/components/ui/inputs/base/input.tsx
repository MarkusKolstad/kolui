import { cn } from "@/lib/utils";
import { useRender } from "@base-ui/react";
import { cva, type VariantProps } from "class-variance-authority";
import {
  type ComponentPropsWithoutRef,
  type ForwardedRef,
  forwardRef,
  type ReactElement,
  type ReactNode,
  type RefAttributes,
  useId,
} from "react";
import "./input.styles.css";

const inputVariants = cva("input-wrapper", {
  variants: {
    size: {
      sm: "input-sm",
      md: "input-md",
      lg: "input-lg",
    },
    shape: {
      square: "input-square",
      rounded: "input-rounded",
    },
  },
  defaultVariants: {
    size: "md",
    shape: "square",
  },
});

export interface AdornmentProps {
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
}

type InputFieldElement = HTMLInputElement | HTMLTextAreaElement;

type InputElementTag<TElement extends InputFieldElement> =
  TElement extends HTMLTextAreaElement ? "textarea" : "input";

export type InputBase<TElement extends InputFieldElement = HTMLInputElement> =
  AdornmentProps &
    Omit<useRender.ComponentProps<InputElementTag<TElement>>, "ref" | "size"> &
    VariantProps<typeof inputVariants>;

type InputWrapperComponent = <
  TElement extends InputFieldElement = HTMLInputElement,
>(
  props: InputBase<TElement> & RefAttributes<TElement>,
) => ReactElement | null;

function InputWrapperImpl<
  TElement extends InputFieldElement = HTMLInputElement,
>(
  {
    className,
    size = "md",
    shape = "square",
    startAdornment,
    endAdornment,
    id,
    render,
    ...inputProps
  }: InputBase<TElement>,
  ref: ForwardedRef<TElement>,
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  const element = useRender<Record<string, never>, TElement>({
    defaultTagName: "input",
    ref,
    props: { ...inputProps, id: inputId },
    render,
  });

  return (
    <label
      className={cn(inputVariants({ size, shape, className }))}
      htmlFor={inputId}
    >
      {startAdornment}
      {element}
      {endAdornment}
    </label>
  );
}

export const InputWrapper = forwardRef(
  InputWrapperImpl,
) as InputWrapperComponent;

export interface InputLabelProps extends ComponentPropsWithoutRef<"label"> {
  id: string;
  htmlFor: string;
  required?: boolean;
  disabled?: boolean;
}

export const InputLabel = forwardRef<HTMLLabelElement, InputLabelProps>(
  function InputLabel(
    {
      className,
      id,
      htmlFor,
      disabled,
      "aria-disabled": ariaDisabled = disabled,
      required,
      "aria-required": ariaRequired = required,
      ...labelProps
    },
    ref,
  ) {
    return (
      <label
        ref={ref}
        id={id}
        htmlFor={htmlFor}
        className={cn("input-label", className)}
        aria-disabled={ariaDisabled}
        aria-required={ariaRequired}
        {...labelProps}
      />
    );
  },
);

InputLabel.displayName = "InputLabel";

export interface InputDescriptionProps extends ComponentPropsWithoutRef<"span"> {
  id: string;
}

export const InputDescription = forwardRef<
  HTMLSpanElement,
  InputDescriptionProps
>(function InputDescription({ className, id, ...spanProps }, ref) {
  return (
    <span
      ref={ref}
      id={id}
      className={cn("input-description", className)}
      {...spanProps}
    />
  );
});

InputDescription.displayName = "InputDescription";

export type InputFieldProps<
  TElement extends InputFieldElement = HTMLInputElement,
> = InputBase<TElement> & {
  label?: ReactNode;
  labelProps?: InputLabelProps;
  description?: ReactNode;
  descriptionProps?: InputDescriptionProps;
};

export interface InputControllerRenderProps {
  id: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
}

export interface InputControllerProps {
  id?: string;
  label?: ReactNode;
  labelProps?: InputLabelProps;
  descriptionProps?: InputDescriptionProps;
  description?: ReactNode;
  render: (props: InputControllerRenderProps) => ReactNode;
}

type InputFieldComponent = <
  TElement extends InputFieldElement = HTMLInputElement,
>(
  props: InputFieldProps<TElement> & RefAttributes<TElement>,
) => ReactElement | null;

function InputFieldImpl<TElement extends InputFieldElement = HTMLInputElement>(
  {
    className,
    id,
    label,
    labelProps,
    description,
    descriptionProps,
    ...inputProps
  }: InputFieldProps<TElement>,
  ref: ForwardedRef<TElement>,
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const labelId = label ? `${inputId}-label` : undefined;
  const descriptionId = description ? `${inputId}-description` : undefined;

  return (
    <div className="flex flex-col gap-1">
      {labelId ? (
        <InputLabel id={labelId} htmlFor={inputId} {...labelProps}>
          {label}
        </InputLabel>
      ) : null}
      <InputWrapper<TElement>
        ref={ref}
        className={className}
        aria-labelledby={labelId}
        aria-describedby={descriptionId}
        id={inputId}
        {...(inputProps as InputBase<TElement>)}
      />
      {descriptionId ? (
        <InputDescription id={descriptionId} {...descriptionProps}>
          {description}
        </InputDescription>
      ) : null}
    </div>
  );
}

export const InputField = forwardRef(InputFieldImpl) as InputFieldComponent;

export function InputController({
  id,
  label,
  labelProps,
  description,
  descriptionProps,
  render,
}: InputControllerProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const labelId = label ? `${inputId}-label` : undefined;
  const descriptionId = description ? `${inputId}-description` : undefined;

  const content = render({
    id: inputId,
    "aria-labelledby": labelId,
    "aria-describedby": descriptionId,
  });

  return (
    <div className="flex flex-col gap-1">
      {labelId ? (
        <InputLabel id={labelId} htmlFor={inputId} {...labelProps}>
          {label}
        </InputLabel>
      ) : null}
      {content}
      {descriptionId ? (
        <InputDescription id={descriptionId} {...descriptionProps}>
          {description}
        </InputDescription>
      ) : null}
    </div>
  );
}

export const InputFieldChildren = InputController;

export { inputVariants };
