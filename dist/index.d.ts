import * as _base_ui_react from '@base-ui/react';
import { useRender } from '@base-ui/react';
import { Accordion as Accordion$1 } from '@base-ui/react/accordion';
import * as React from 'react';
import { ReactNode, ComponentPropsWithoutRef, RefAttributes, ReactElement } from 'react';
import { Avatar as Avatar$1 } from '@base-ui/react/avatar';
import * as class_variance_authority_types from 'class-variance-authority/types';
import * as class_variance_authority from 'class-variance-authority';
import { VariantProps } from 'class-variance-authority';
import { Button as Button$1 } from '@base-ui/react/button';
import { Dialog as Dialog$1 } from '@base-ui/react/dialog';
import { Drawer as Drawer$1 } from '@base-ui/react/drawer';
import { Checkbox } from '@base-ui/react/checkbox';
import { ComboboxRootProps } from '@base-ui/react/combobox';
import { Group } from '@base-ui/react/internals/resolveValueLabel';
import { RadioGroupProps } from '@base-ui/react/radio-group';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { Menu as Menu$1 } from '@base-ui/react/menu';
import { Switch as Switch$1 } from '@base-ui/react/switch';
import { Toast } from '@base-ui/react/toast';
import { Toggle as Toggle$1 } from '@base-ui/react/toggle';
import { ToggleGroup as ToggleGroup$1 } from '@base-ui/react/toggle-group';
import { ClassValue } from 'clsx';
export * from '@base-ui/react/tabs';

declare const Accordion: React.ForwardRefExoticComponent<Omit<Accordion$1.Root.Props<unknown>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const AccordionItem: React.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AccordionItemProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const AccordionHeader: React.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AccordionHeaderProps, "ref"> & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
declare const AccordionTrigger: React.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AccordionTriggerProps, "ref"> & React.RefAttributes<HTMLElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const AccordionPanel: React.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AccordionPanelProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

type AvatarSize = "xxs" | "xs" | "sm" | "md" | "lg";
interface AvatarProps extends React.ComponentPropsWithoutRef<typeof Avatar$1.Root> {
    size?: AvatarSize;
}
declare const Avatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLSpanElement>>;
declare const AvatarImage: React.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AvatarImageProps, "ref"> & React.RefAttributes<HTMLImageElement>, "ref"> & React.RefAttributes<HTMLImageElement>>;
declare const AvatarFallback: React.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AvatarFallbackProps, "ref"> & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;

declare const badgeVariants: (props?: {
    theme?: "primary" | "secondary" | "accent" | "success" | "warning" | "error";
    variant?: "filled" | "outlined" | "soft";
    size?: "xs" | "sm" | "md";
    shape?: "rounded" | "square";
} & class_variance_authority_types.ClassProp) => string;
interface BadgeProps extends React.ComponentPropsWithoutRef<"span">, VariantProps<typeof badgeVariants> {
}
declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLSpanElement>>;

declare const buttonVariants: (props?: {
    variant?: "filled" | "outlined" | "ghost";
    theme?: "primary" | "secondary" | "accent" | "success" | "warning" | "error";
    size?: "sm" | "md" | "lg";
    shape?: "rounded" | "square";
} & class_variance_authority_types.ClassProp) => string;
declare function Button({ className, variant, theme, size, shape, ...props }: Button$1.Props & VariantProps<typeof buttonVariants>): React.JSX.Element;

declare const iconButtonVariants: (props: VariantProps<typeof buttonVariants>) => string;
declare function IconButton({ className, variant, theme, size, shape, ...props }: Button$1.Props & VariantProps<typeof buttonVariants>): React.JSX.Element;

declare const Collapsible: React.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.CollapsibleRootProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const CollapsibleTrigger: React.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.CollapsibleTriggerProps, "ref"> & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const CollapsiblePanel: React.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.CollapsiblePanelProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

declare const Dialog: typeof Dialog$1.Root;
declare const DialogTrigger: React.ForwardRefExoticComponent<Omit<_base_ui_react.DialogTriggerProps<unknown> & React.RefAttributes<HTMLElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const DialogPortal: React.ForwardRefExoticComponent<Omit<_base_ui_react.AlertDialogPortalProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DialogBackdrop: React.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AlertDialogBackdropProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DialogPopup: React.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AlertDialogPopupProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DialogTitle: React.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AlertDialogTitleProps, "ref"> & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
declare const DialogDescription: React.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AlertDialogDescriptionProps, "ref"> & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
declare const DialogClose: React.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AlertDialogCloseProps, "ref"> & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;

declare const Drawer: typeof Drawer$1.Root;
declare const DrawerTrigger: React.ForwardRefExoticComponent<Omit<_base_ui_react.DrawerTriggerProps<unknown> & React.RefAttributes<HTMLElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const DrawerPortal: Drawer$1.Portal;
declare const DrawerBackdrop: React.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.DrawerBackdropProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DrawerViewport: React.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.DrawerViewportProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DrawerPopup: React.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.DrawerPopupProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DrawerTitle: React.ForwardRefExoticComponent<Omit<_base_ui_react.DrawerTitleProps, "ref"> & React.RefAttributes<HTMLHeadingElement>>;
declare const DrawerDescription: React.ForwardRefExoticComponent<Omit<_base_ui_react.DrawerDescriptionProps, "ref"> & React.RefAttributes<HTMLParagraphElement>>;
declare const DrawerClose: React.ForwardRefExoticComponent<Omit<_base_ui_react.DrawerCloseProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;

declare const inputVariants: (props?: {
    size?: "sm" | "md" | "lg";
    shape?: "rounded" | "square";
} & class_variance_authority_types.ClassProp) => string;
interface AdornmentProps {
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
}
type InputFieldElement = HTMLInputElement | HTMLTextAreaElement;
type InputElementTag<TElement extends InputFieldElement> = TElement extends HTMLTextAreaElement ? "textarea" : "input";
type InputBase<TElement extends InputFieldElement = HTMLInputElement> = AdornmentProps & Omit<useRender.ComponentProps<InputElementTag<TElement>>, "ref" | "size"> & VariantProps<typeof inputVariants>;
type InputWrapperComponent = <TElement extends InputFieldElement = HTMLInputElement>(props: InputBase<TElement> & RefAttributes<TElement>) => ReactElement | null;
declare const InputWrapper: InputWrapperComponent;
interface InputLabelProps extends ComponentPropsWithoutRef<"label"> {
    id: string;
    htmlFor: string;
    required?: boolean;
    disabled?: boolean;
}
declare const InputLabel: React.ForwardRefExoticComponent<InputLabelProps & RefAttributes<HTMLLabelElement>>;
interface InputDescriptionProps extends ComponentPropsWithoutRef<"span"> {
    id: string;
}
declare const InputDescription: React.ForwardRefExoticComponent<InputDescriptionProps & RefAttributes<HTMLSpanElement>>;
type InputFieldProps<TElement extends InputFieldElement = HTMLInputElement> = InputBase<TElement> & {
    label?: ReactNode;
    labelProps?: InputLabelProps;
    description?: ReactNode;
    descriptionProps?: InputDescriptionProps;
};
interface InputControllerRenderProps {
    id: string;
    "aria-labelledby"?: string;
    "aria-describedby"?: string;
}
interface InputControllerProps {
    id?: string;
    label?: ReactNode;
    labelProps?: InputLabelProps;
    descriptionProps?: InputDescriptionProps;
    description?: ReactNode;
    render: (props: InputControllerRenderProps) => ReactNode;
}
type InputFieldComponent = <TElement extends InputFieldElement = HTMLInputElement>(props: InputFieldProps<TElement> & RefAttributes<TElement>) => ReactElement | null;
declare const InputField: InputFieldComponent;
declare function InputController({ id, label, labelProps, description, descriptionProps, render, }: InputControllerProps): React.JSX.Element;
declare const InputFieldChildren: typeof InputController;

interface CheckboxProps extends Omit<React.ComponentPropsWithoutRef<typeof Checkbox.Root>, "children"> {
    label?: ReactNode;
    description?: ReactNode;
}
type CheckboxFieldComponent = (props: CheckboxProps & React.RefAttributes<React.ComponentRef<typeof Checkbox.Root>>) => React.ReactElement | null;
declare const CheckboxField: CheckboxFieldComponent;

interface ComboboxProps<T, Multiple extends boolean> extends AdornmentProps, ComboboxRootProps<T, Multiple> {
    label?: ReactNode;
    description?: ReactNode;
    emptyOption?: ReactNode;
    items?: readonly T[] | readonly Group<T>[] | undefined;
}
type ComboboxFieldComponent = <T, Multiple extends boolean = false>(props: ComboboxProps<T, Multiple> & RefAttributes<HTMLInputElement>) => ReactElement | null;
declare const ComboboxField: ComboboxFieldComponent;

interface RadioOption {
    value: string;
    label: ReactNode;
    description?: ReactNode;
}
interface RadioGroupFieldProps extends Omit<RadioGroupProps<string>, "children"> {
    label?: ReactNode;
    description?: ReactNode;
    options: readonly RadioOption[];
}
declare const RadioGroupField: React.ForwardRefExoticComponent<Omit<RadioGroupFieldProps, "ref"> & React.RefAttributes<HTMLDivElement>>;

declare const SelectField: React.ForwardRefExoticComponent<AdornmentProps & Omit<_base_ui_react.useRender.ComponentProps<"input", {}, _base_ui_react.HTMLProps>, "ref" | "size"> & class_variance_authority.VariantProps<(props?: {
    size?: "sm" | "md" | "lg";
    shape?: "rounded" | "square";
} & class_variance_authority_types.ClassProp) => string> & {
    label?: React.ReactNode;
    labelProps?: InputLabelProps;
    description?: React.ReactNode;
    descriptionProps?: InputDescriptionProps;
} & React.RefAttributes<HTMLInputElement>>;

declare const TextAreaField: React.ForwardRefExoticComponent<AdornmentProps & Omit<_base_ui_react.useRender.ComponentProps<"textarea", {}, _base_ui_react.HTMLProps>, "ref" | "size"> & class_variance_authority.VariantProps<(props?: {
    size?: "sm" | "md" | "lg";
    shape?: "rounded" | "square";
} & class_variance_authority_types.ClassProp) => string> & {
    label?: React.ReactNode;
    labelProps?: InputLabelProps;
    description?: React.ReactNode;
    descriptionProps?: InputDescriptionProps;
} & React.RefAttributes<HTMLTextAreaElement>>;

declare const TextField: React.ForwardRefExoticComponent<AdornmentProps & Omit<_base_ui_react.useRender.ComponentProps<"input", {}, _base_ui_react.HTMLProps>, "ref" | "size"> & class_variance_authority.VariantProps<(props?: {
    size?: "sm" | "md" | "lg";
    shape?: "rounded" | "square";
} & class_variance_authority_types.ClassProp) => string> & {
    label?: React.ReactNode;
    labelProps?: InputLabelProps;
    description?: React.ReactNode;
    descriptionProps?: InputDescriptionProps;
} & React.RefAttributes<HTMLInputElement>>;

type LoadingVariant = "spinner" | "bar" | "overlay";
type LoadingTone = "default" | "contrast";
interface LoadingProps extends React.ComponentPropsWithoutRef<"div"> {
    variant?: LoadingVariant;
    tone?: LoadingTone;
    label?: React.ReactNode;
}
declare const Loading: React.ForwardRefExoticComponent<LoadingProps & React.RefAttributes<HTMLDivElement>>;

declare const Menu: <Payload>(props: Menu$1.Root.Props<Payload>) => react_jsx_runtime.JSX.Element;
declare const MenuPortal: React.ForwardRefExoticComponent<Omit<_base_ui_react.ContextMenuPortalProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const MenuTrigger: React.ForwardRefExoticComponent<Omit<_base_ui_react.MenuTriggerProps<unknown> & React.RefAttributes<HTMLElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const MenuPositioner: React.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.ContextMenuPositionerProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const MenuPopup: React.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.ContextMenuPopupProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const MenuItem: React.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.ContextMenuItemProps, "ref"> & React.RefAttributes<HTMLElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const MenuLinkItem: React.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.ContextMenuLinkItemProps, "ref"> & React.RefAttributes<Element>, "ref"> & React.RefAttributes<HTMLAnchorElement>>;
declare const MenuSeparator: React.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.SeparatorProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const MenuGroup: React.ForwardRefExoticComponent<Omit<_base_ui_react.ContextMenuGroupProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const MenuGroupLabel: React.ForwardRefExoticComponent<Omit<_base_ui_react.ContextMenuGroupLabelProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const MenuSubmenuRoot: typeof Menu$1.SubmenuRoot;
declare const MenuSubmenuTrigger: React.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.ContextMenuSubmenuTriggerProps, "ref"> & React.RefAttributes<HTMLElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const MenuCheckboxItem: React.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.ContextMenuCheckboxItemProps, "ref"> & React.RefAttributes<HTMLElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const MenuRadioGroup: React.NamedExoticComponent<Omit<_base_ui_react.ContextMenuRadioGroupProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const MenuRadioItem: React.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.ContextMenuRadioItemProps, "ref"> & React.RefAttributes<HTMLElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

interface SwitchProps extends React.ComponentPropsWithoutRef<typeof Switch$1.Root> {
    label?: React.ReactNode;
    description?: React.ReactNode;
}
declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLElement>>;

declare const Tabs: React.ForwardRefExoticComponent<Omit<_base_ui_react.TabsRootProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const TabIndicator: React.ForwardRefExoticComponent<Omit<_base_ui_react.TabsIndicatorProps, "ref"> & React.RefAttributes<HTMLElement>>;
declare const TabsList: React.ForwardRefExoticComponent<Omit<_base_ui_react.TabsListProps & VariantProps<(props?: {
    variant?: "filled" | "outlined" | "ghost";
    theme?: "primary" | "secondary" | "tertiary";
} & class_variance_authority_types.ClassProp) => string>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const Tab: React.ForwardRefExoticComponent<Omit<_base_ui_react.TabsTabProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const TabPanel: React.ForwardRefExoticComponent<Omit<_base_ui_react.TabsPanelProps, "ref"> & React.RefAttributes<HTMLDivElement>>;

declare const ToastProvider: React.FC<_base_ui_react.ToastProviderProps>;
declare const useToastManager: typeof Toast.useToastManager;
declare const createToastManager: typeof Toast.createToastManager;
declare const ToastPortal: React.ForwardRefExoticComponent<Omit<_base_ui_react.ToastPortalProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ToastViewport: React.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.ToastViewportProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ToastRoot: React.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.ToastRootProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ToastContent: React.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.ToastContentProps, "ref"> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ToastTitle: React.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.ToastTitleProps, "ref"> & React.RefAttributes<HTMLHeadingElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ToastDescription: React.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.ToastDescriptionProps, "ref"> & React.RefAttributes<HTMLParagraphElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ToastAction: React.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.ToastActionProps, "ref"> & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const ToastClose: React.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.ToastCloseProps, "ref"> & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;

declare const Toggle: React.ForwardRefExoticComponent<Omit<Toggle$1.Props<string> & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const ToggleGroup: React.ForwardRefExoticComponent<Omit<ToggleGroup$1.Props<string> & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

declare function cn(...inputs: ClassValue[]): string;

export { Accordion, AccordionHeader, AccordionItem, AccordionPanel, AccordionTrigger, type AdornmentProps, Avatar, AvatarFallback, AvatarImage, type AvatarProps, type AvatarSize, Badge, type BadgeProps, Button, CheckboxField, type CheckboxProps, Collapsible, CollapsiblePanel, CollapsibleTrigger, ComboboxField, type ComboboxProps, Dialog, DialogBackdrop, DialogClose, DialogDescription, DialogPopup, DialogPortal, DialogTitle, DialogTrigger, Drawer, DrawerBackdrop, DrawerClose, DrawerDescription, DrawerPopup, DrawerPortal, DrawerTitle, DrawerTrigger, DrawerViewport, IconButton, type InputBase, InputController, type InputControllerProps, type InputControllerRenderProps, InputDescription, type InputDescriptionProps, InputField, InputFieldChildren, type InputFieldProps, InputLabel, type InputLabelProps, InputWrapper, Loading, type LoadingProps, type LoadingTone, type LoadingVariant, Menu, MenuCheckboxItem, MenuGroup, MenuGroupLabel, MenuItem, MenuLinkItem, MenuPopup, MenuPortal, MenuPositioner, MenuRadioGroup, MenuRadioItem, MenuSeparator, MenuSubmenuRoot, MenuSubmenuTrigger, MenuTrigger, RadioGroupField, type RadioGroupFieldProps, type RadioOption, SelectField, Switch, type SwitchProps, Tab, TabIndicator, TabPanel, Tabs, TabsList, TextAreaField, TextField, ToastAction, ToastClose, ToastContent, ToastDescription, ToastPortal, ToastProvider, ToastRoot, ToastTitle, ToastViewport, Toggle, ToggleGroup, badgeVariants, buttonVariants, cn, createToastManager, iconButtonVariants, inputVariants, useToastManager };
