import * as react from 'react';
import { ReactNode, ComponentPropsWithoutRef, RefAttributes, ReactElement } from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { Button as Button$1 } from '@base-ui/react/button';
import { VariantProps } from 'class-variance-authority';
import * as _base_ui_react from '@base-ui/react';
import { useRender } from '@base-ui/react';
import { ComboboxRootProps } from '@base-ui/react/combobox';
import { Group } from '@base-ui/react/internals/resolveValueLabel';
import { ClassValue } from 'clsx';
export * from '@base-ui/react/tabs';

declare const buttonVariants: (props?: {
    variant?: "filled" | "outlined" | "ghost";
    theme?: "primary" | "secondary" | "accent" | "success" | "error" | "warning";
    size?: "sm" | "md" | "lg";
    shape?: "rounded" | "square";
} & class_variance_authority_types.ClassProp) => string;
declare function Button({ className, variant, theme, size, shape, ...props }: Button$1.Props & VariantProps<typeof buttonVariants>): react.JSX.Element;

declare const iconButtonVariants: (props: VariantProps<typeof buttonVariants>) => string;
declare function IconButton({ className, variant, theme, size, shape, ...props }: Button$1.Props & VariantProps<typeof buttonVariants>): react.JSX.Element;

interface AdornmentProps {
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
}
interface InputBase extends AdornmentProps, Omit<useRender.ComponentProps<"input">, "ref"> {
}
type InputFieldElement = HTMLInputElement | HTMLTextAreaElement;
type InputWrapperComponent = <TElement extends InputFieldElement = HTMLInputElement>(props: InputBase & RefAttributes<TElement>) => ReactElement | null;
declare const InputWrapper: InputWrapperComponent;
interface InputLabelProps extends ComponentPropsWithoutRef<"label"> {
    id: string;
    htmlFor: string;
}
declare const InputLabel: react.ForwardRefExoticComponent<InputLabelProps & RefAttributes<HTMLLabelElement>>;
interface InputDescriptionProps extends ComponentPropsWithoutRef<"span"> {
    id: string;
}
declare const InputDescription: react.ForwardRefExoticComponent<InputDescriptionProps & RefAttributes<HTMLSpanElement>>;
interface InputFieldProps extends InputBase {
    label?: ReactNode;
    description?: ReactNode;
}
interface InputControllerRenderProps {
    id: string;
    "aria-labelledby"?: string;
    "aria-describedby"?: string;
}
interface InputControllerProps {
    id?: string;
    label?: ReactNode;
    description?: ReactNode;
    render: (props: InputControllerRenderProps) => ReactNode;
}
type InputFieldComponent = <TElement extends InputFieldElement = HTMLInputElement>(props: InputFieldProps & RefAttributes<TElement>) => ReactElement | null;
declare const InputField: InputFieldComponent;
declare function InputController({ id, label, description, render, }: InputControllerProps): react.JSX.Element;
declare const InputFieldChildren: typeof InputController;

interface ComboboxProps<T, Multiple extends boolean> extends AdornmentProps, ComboboxRootProps<T, Multiple> {
    label?: ReactNode;
    description?: ReactNode;
    emptyOption?: ReactNode;
    items?: readonly T[] | readonly Group<T>[] | undefined;
}
type ComboboxFieldComponent = <T, Multiple extends boolean = false>(props: ComboboxProps<T, Multiple> & RefAttributes<HTMLInputElement>) => ReactElement | null;
declare const ComboboxField: ComboboxFieldComponent;

declare const SelectField: react.ForwardRefExoticComponent<InputFieldProps & react.RefAttributes<HTMLInputElement>>;

declare const TextAreaField: react.ForwardRefExoticComponent<InputFieldProps & react.RefAttributes<HTMLTextAreaElement>>;

declare const TextField: react.ForwardRefExoticComponent<InputFieldProps & react.RefAttributes<HTMLInputElement>>;

declare const Tabs: react.ForwardRefExoticComponent<Omit<_base_ui_react.TabsRootProps, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const TabIndicator: react.ForwardRefExoticComponent<Omit<_base_ui_react.TabsIndicatorProps, "ref"> & react.RefAttributes<HTMLElement>>;
declare const TabsList: react.ForwardRefExoticComponent<Omit<_base_ui_react.TabsListProps & VariantProps<(props?: {
    variant?: "filled" | "outlined" | "ghost";
    theme?: "primary" | "secondary" | "tertiary";
} & class_variance_authority_types.ClassProp) => string>, "ref"> & react.RefAttributes<HTMLDivElement>>;
declare const Tab: react.ForwardRefExoticComponent<Omit<_base_ui_react.TabsTabProps, "ref"> & react.RefAttributes<HTMLButtonElement>>;
declare const TabPanel: react.ForwardRefExoticComponent<Omit<_base_ui_react.TabsPanelProps, "ref"> & react.RefAttributes<HTMLDivElement>>;

declare function cn(...inputs: ClassValue[]): string;

export { type AdornmentProps, Button, ComboboxField, type ComboboxProps, IconButton, type InputBase, InputController, type InputControllerProps, type InputControllerRenderProps, InputDescription, type InputDescriptionProps, InputField, InputFieldChildren, type InputFieldProps, InputLabel, type InputLabelProps, InputWrapper, SelectField, Tab, TabIndicator, TabPanel, Tabs, TabsList, TextAreaField, TextField, buttonVariants, cn, iconButtonVariants };
