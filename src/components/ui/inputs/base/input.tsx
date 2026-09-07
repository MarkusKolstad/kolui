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

export interface InputBase
  extends
    AdornmentProps,
    Omit<useRender.ComponentProps<"input">, "ref" | "size">,
    VariantProps<typeof inputVariants> {}

type InputFieldElement = HTMLInputElement | HTMLTextAreaElement;

type InputWrapperComponent = <
  TElement extends InputFieldElement = HTMLInputElement,
>(
  props: InputBase & RefAttributes<TElement>,
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
  }: InputBase,
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
}

export const InputLabel = forwardRef<HTMLLabelElement, InputLabelProps>(
  function InputLabel({ className, id, htmlFor, ...labelProps }, ref) {
    return (
      <label
        ref={ref}
        id={id}
        htmlFor={htmlFor}
        className={cn("input-label", className)}
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

export interface InputFieldProps extends InputBase {
  label?: ReactNode;
  labelProps?: InputLabelProps;
  description?: ReactNode;
  descriptionProps?: InputDescriptionProps;
}

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
  props: InputFieldProps & RefAttributes<TElement>,
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
  }: InputFieldProps,
  ref: ForwardedRef<TElement>,
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const labelId = label ? `${inputId}-label` : undefined;
  const descriptionId = description ? `${inputId}-description` : undefined;

  return (
    <>
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
        {...inputProps}
      />
      {descriptionId ? (
        <InputDescription id={descriptionId} {...descriptionProps}>
          {description}
        </InputDescription>
      ) : null}
    </>
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
    <>
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
    </>
  );
}

export const InputFieldChildren = InputController;

export { inputVariants };
