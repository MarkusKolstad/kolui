import { cn } from "#/lib/utils";
import { useRender } from "@base-ui/react";
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

export interface AdornmentProps {
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
}

export interface InputBase
  extends AdornmentProps, Omit<useRender.ComponentProps<"input">, "ref"> {}

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
    <label className={cn("input-wrapper", className)} htmlFor={inputId}>
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
  description?: ReactNode;
}

export interface InputControllerRenderProps {
  id: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
}

export interface InputControllerProps {
  id?: string;
  label?: ReactNode;
  description?: ReactNode;
  render: (props: InputControllerRenderProps) => ReactNode;
}

type InputFieldComponent = <
  TElement extends InputFieldElement = HTMLInputElement,
>(
  props: InputFieldProps & RefAttributes<TElement>,
) => ReactElement | null;

function InputFieldImpl<TElement extends InputFieldElement = HTMLInputElement>(
  { className, id, label, description, ...inputProps }: InputFieldProps,
  ref: ForwardedRef<TElement>,
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const labelId = label ? `${inputId}-label` : undefined;
  const descriptionId = description ? `${inputId}-description` : undefined;

  return (
    <>
      {labelId ? (
        <InputLabel id={labelId} htmlFor={inputId}>
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
        <InputDescription id={descriptionId}>{description}</InputDescription>
      ) : null}
    </>
  );
}

export const InputField = forwardRef(InputFieldImpl) as InputFieldComponent;

export function InputController({
  id,
  label,
  description,
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
        <InputLabel id={labelId} htmlFor={inputId}>
          {label}
        </InputLabel>
      ) : null}
      {content}
      {descriptionId ? (
        <InputDescription id={descriptionId}>{description}</InputDescription>
      ) : null}
    </>
  );
}

export const InputFieldChildren = InputController;
