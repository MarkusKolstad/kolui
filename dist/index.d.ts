import * as _base_ui_react from '@base-ui/react';
import { useRender } from '@base-ui/react';
import { Accordion as Accordion$1 } from '@base-ui/react/accordion';
import * as React$1 from 'react';
import { ComponentPropsWithoutRef, ReactNode, RefAttributes, ReactElement } from 'react';
import { Avatar as Avatar$1 } from '@base-ui/react/avatar';
import * as class_variance_authority_types from 'class-variance-authority/types';
import * as class_variance_authority from 'class-variance-authority';
import { VariantProps } from 'class-variance-authority';
import { Button as Button$1 } from '@base-ui/react/button';
import { Combobox as Combobox$1, ComboboxRootProps } from '@base-ui/react/combobox';
import { Dialog as Dialog$1 } from '@base-ui/react/dialog';
import { Drawer as Drawer$1 } from '@base-ui/react/drawer';
import { Checkbox } from '@base-ui/react/checkbox';
import { Group } from '@base-ui/react/internals/resolveValueLabel';
import { RadioGroupProps } from '@base-ui/react/radio-group';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { Menu as Menu$1 } from '@base-ui/react/menu';
import * as _base_ui_react_internals_types from '@base-ui/react/internals/types';
import { Popover as Popover$1 } from '@base-ui/react/popover';
import { Switch as Switch$1 } from '@base-ui/react/switch';
import { Toast } from '@base-ui/react/toast';
import { Toggle as Toggle$1 } from '@base-ui/react/toggle';
import { ToggleGroup as ToggleGroup$1 } from '@base-ui/react/toggle-group';
import { ClassValue } from 'clsx';
export * from '@base-ui/react/tabs';

declare const Accordion: React$1.ForwardRefExoticComponent<Omit<Accordion$1.Root.Props<unknown>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const AccordionItem: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AccordionItemProps, "ref"> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const AccordionHeader: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AccordionHeaderProps, "ref"> & React$1.RefAttributes<HTMLHeadingElement>, "ref"> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const AccordionTrigger: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AccordionTriggerProps, "ref"> & React$1.RefAttributes<HTMLElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const AccordionPanel: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AccordionPanelProps, "ref"> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

type AvatarSize = "xxs" | "xs" | "sm" | "md" | "lg";
interface AvatarProps extends React$1.ComponentPropsWithoutRef<typeof Avatar$1.Root> {
    size?: AvatarSize;
}
declare const Avatar: React$1.ForwardRefExoticComponent<AvatarProps & React$1.RefAttributes<HTMLSpanElement>>;
declare const AvatarImage: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AvatarImageProps, "ref"> & React$1.RefAttributes<HTMLImageElement>, "ref"> & React$1.RefAttributes<HTMLImageElement>>;
declare const AvatarFallback: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AvatarFallbackProps, "ref"> & React$1.RefAttributes<HTMLSpanElement>, "ref"> & React$1.RefAttributes<HTMLSpanElement>>;

declare const badgeVariants: (props?: {
    theme?: "primary" | "secondary" | "accent" | "success" | "warning" | "error";
    variant?: "filled" | "outlined" | "soft";
    size?: "xs" | "sm" | "md";
    shape?: "rounded" | "square";
} & class_variance_authority_types.ClassProp) => string;
interface BadgeProps extends React$1.ComponentPropsWithoutRef<"span">, VariantProps<typeof badgeVariants> {
}
declare const Badge: React$1.ForwardRefExoticComponent<BadgeProps & React$1.RefAttributes<HTMLSpanElement>>;

declare const buttonVariants: (props?: {
    variant?: "filled" | "outlined" | "glass" | "ghost";
    theme?: "primary" | "secondary" | "accent" | "success" | "warning" | "error" | "default";
    size?: "sm" | "md" | "lg";
    shape?: "rounded" | "square";
} & class_variance_authority_types.ClassProp) => string;
declare function Button({ className, variant, theme, size, shape, ...props }: Button$1.Props & VariantProps<typeof buttonVariants>): React$1.JSX.Element;

declare const iconButtonVariants: (props: VariantProps<typeof buttonVariants>) => string;
declare function IconButton({ className, variant, theme, size, shape, ...props }: Button$1.Props & VariantProps<typeof buttonVariants>): React$1.JSX.Element;

type WeekStartsOn = "sunday" | "monday";

interface CalendarProps extends Omit<ComponentPropsWithoutRef<"div">, "onChange" | "defaultValue"> {
    value?: Date;
    defaultValue?: Date;
    onValueChange?: (value: Date) => void;
    weekStartsOn?: WeekStartsOn;
}
declare function Calendar({ className, value, defaultValue, onValueChange, weekStartsOn, ...props }: CalendarProps): React$1.JSX.Element;

interface CalendarDay {
    date: Date;
    isCurrentMonth: boolean;
    isSelected: boolean;
    isToday: boolean;
}
interface CalendarWeek {
    days: readonly CalendarDay[];
}
interface CalendarMonth {
    month: Date;
    weekdays: readonly string[];
    weeks: readonly CalendarWeek[];
}
interface CreateCalendarMonthOptions {
    month: Date;
    selectedDate?: Date;
    today?: Date;
    weekStartsOn?: WeekStartsOn;
}
/**
 * Creates a six-week month grid for mapping to any calendar UI.
 *
 * All dates use the browser's local time zone.
 */
declare function createCalendarMonth({ month, selectedDate, today, weekStartsOn, }: CreateCalendarMonthOptions): CalendarMonth;

interface UseCalendarProps {
    value?: Date;
    defaultValue?: Date;
    onValueChange?: (value: Date) => void;
    month?: Date;
    defaultMonth?: Date;
    onMonthChange?: (month: Date) => void;
    weekStartsOn?: WeekStartsOn;
}
interface UseCalendarReturn {
    calendar: CalendarMonth;
    selectedDate: Date;
    visibleMonth: Date;
    selectDate: (date: Date) => void;
    setMonth: (month: Date) => void;
    nextMonth: () => void;
    previousMonth: () => void;
}
/**
 * Manages local-time calendar selection and month navigation without rendering UI.
 *
 * Use `calendar.weeks` and `calendar.weekdays` to map a calendar grid.
 */
declare function useCalendar({ value, defaultValue, onValueChange, month, defaultMonth, onMonthChange, weekStartsOn, }?: UseCalendarProps): UseCalendarReturn;

declare const Collapsible: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.CollapsibleRootProps, "ref"> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const CollapsibleTrigger: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.CollapsibleTriggerProps, "ref"> & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const CollapsiblePanel: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.CollapsiblePanelProps, "ref"> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

/** Coordinates a combobox's items, value, and open state. */
declare const Combobox: typeof Combobox$1.Root;
/** Groups the input with its trigger and clear controls. */
declare const ComboboxInputGroup: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.ComboboxInputGroupProps, "ref"> & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    /** Disables the default group styling when composing with another input wrapper. */
    unstyled?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
/** The text input used to search and filter combobox items. */
declare const ComboboxInput: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AutocompleteInputProps, "ref"> & React$1.RefAttributes<HTMLInputElement>, "ref"> & {
    /** Disables the default input styling when composing with another input wrapper. */
    unstyled?: boolean;
} & React$1.RefAttributes<HTMLInputElement>>;
/** Opens and closes the combobox popup. */
declare const ComboboxTrigger: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.ComboboxTriggerProps, "ref"> & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
/** Clears the current combobox value and input text. */
declare const ComboboxClear: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AutocompleteClearProps, "ref"> & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
/** Renders combobox popup content outside the current DOM hierarchy. */
declare const ComboboxPortal: React$1.ForwardRefExoticComponent<Omit<_base_ui_react.AutocompletePortalProps, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
/** Positions the combobox popup relative to its input. */
declare const ComboboxPositioner: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AutocompletePositionerProps, "ref"> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
/** The styled surface that contains the combobox list. */
declare const ComboboxPopup: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AutocompletePopupProps, "ref"> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
/** Renders the collection of available combobox items. */
declare const ComboboxList: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AutocompleteListProps, "ref"> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
/** Selects a value when clicked or highlighted with the keyboard. */
declare const ComboboxItem: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.ComboboxItemProps, "ref"> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
/** Indicates that its parent combobox item is selected. */
declare const ComboboxItemIndicator: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.ComboboxItemIndicatorProps, "ref"> & React$1.RefAttributes<HTMLSpanElement>, "ref"> & React$1.RefAttributes<HTMLSpanElement>>;
/** Renders when the combobox has no matching items. */
declare const ComboboxEmpty: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AutocompleteEmptyProps, "ref"> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const Dialog: typeof Dialog$1.Root;
declare const DialogTrigger: React$1.ForwardRefExoticComponent<Omit<_base_ui_react.DialogTriggerProps<unknown> & React$1.RefAttributes<HTMLElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const DialogPortal: React$1.ForwardRefExoticComponent<Omit<_base_ui_react.AlertDialogPortalProps, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DialogBackdrop: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AlertDialogBackdropProps, "ref"> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DialogPopup: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AlertDialogPopupProps, "ref"> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DialogTitle: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AlertDialogTitleProps, "ref"> & React$1.RefAttributes<HTMLHeadingElement>, "ref"> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const DialogDescription: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AlertDialogDescriptionProps, "ref"> & React$1.RefAttributes<HTMLParagraphElement>, "ref"> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const DialogClose: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.AlertDialogCloseProps, "ref"> & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

declare const Drawer: typeof Drawer$1.Root;
declare const DrawerTrigger: React$1.ForwardRefExoticComponent<Omit<_base_ui_react.DrawerTriggerProps<unknown> & React$1.RefAttributes<HTMLElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const DrawerPortal: Drawer$1.Portal;
declare const DrawerBackdrop: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.DrawerBackdropProps, "ref"> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DrawerViewport: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.DrawerViewportProps, "ref"> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DrawerPopup: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.DrawerPopupProps, "ref"> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DrawerTitle: React$1.ForwardRefExoticComponent<Omit<_base_ui_react.DrawerTitleProps, "ref"> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const DrawerDescription: React$1.ForwardRefExoticComponent<Omit<_base_ui_react.DrawerDescriptionProps, "ref"> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const DrawerClose: React$1.ForwardRefExoticComponent<Omit<_base_ui_react.DrawerCloseProps, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

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
declare const InputLabel: React$1.ForwardRefExoticComponent<InputLabelProps & RefAttributes<HTMLLabelElement>>;
interface InputDescriptionProps extends ComponentPropsWithoutRef<"span"> {
    id: string;
}
declare const InputDescription: React$1.ForwardRefExoticComponent<InputDescriptionProps & RefAttributes<HTMLSpanElement>>;
type InputFieldProps<TElement extends InputFieldElement = HTMLInputElement> = InputBase<TElement> & {
    label?: ReactNode;
    labelProps?: InputLabelProps;
    description?: ReactNode;
    descriptionProps?: InputDescriptionProps;
    fieldProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
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
declare function InputController({ id, label, labelProps, description, descriptionProps, render, }: InputControllerProps): React$1.JSX.Element;
declare const InputFieldChildren: typeof InputController;

interface CheckboxProps extends Omit<React$1.ComponentPropsWithoutRef<typeof Checkbox.Root>, "children"> {
    label?: ReactNode;
    description?: ReactNode;
}
type CheckboxFieldComponent = (props: CheckboxProps & React$1.RefAttributes<React$1.ComponentRef<typeof Checkbox.Root>>) => React$1.ReactElement | null;
declare const CheckboxField: CheckboxFieldComponent;

interface ComboboxProps<T, Multiple extends boolean> extends AdornmentProps, ComboboxRootProps<T, Multiple> {
    label?: ReactNode;
    description?: ReactNode;
    emptyOption?: ReactNode;
    items?: readonly T[] | readonly Group<T>[] | undefined;
}
type ComboboxFieldComponent = <T, Multiple extends boolean = false>(props: ComboboxProps<T, Multiple> & RefAttributes<HTMLInputElement>) => ReactElement | null;
/** A complete combobox field with label, description, adornments, and default item rendering. */
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
declare const RadioGroupField: React$1.ForwardRefExoticComponent<Omit<RadioGroupFieldProps, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const SelectField: React$1.ForwardRefExoticComponent<AdornmentProps & Omit<_base_ui_react.useRender.ComponentProps<"input", {}, _base_ui_react.HTMLProps>, "ref" | "size"> & class_variance_authority.VariantProps<(props?: {
    size?: "sm" | "md" | "lg";
    shape?: "rounded" | "square";
} & class_variance_authority_types.ClassProp) => string> & {
    label?: React$1.ReactNode;
    labelProps?: InputLabelProps;
    description?: React$1.ReactNode;
    descriptionProps?: InputDescriptionProps;
    fieldProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
} & React$1.RefAttributes<HTMLInputElement>>;

declare const TextAreaField: React$1.ForwardRefExoticComponent<AdornmentProps & Omit<_base_ui_react.useRender.ComponentProps<"textarea", {}, _base_ui_react.HTMLProps>, "ref" | "size"> & class_variance_authority.VariantProps<(props?: {
    size?: "sm" | "md" | "lg";
    shape?: "rounded" | "square";
} & class_variance_authority_types.ClassProp) => string> & {
    label?: React$1.ReactNode;
    labelProps?: InputLabelProps;
    description?: React$1.ReactNode;
    descriptionProps?: InputDescriptionProps;
    fieldProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
} & React$1.RefAttributes<HTMLTextAreaElement>>;

declare const TextField: React$1.ForwardRefExoticComponent<AdornmentProps & Omit<_base_ui_react.useRender.ComponentProps<"input", {}, _base_ui_react.HTMLProps>, "ref" | "size"> & class_variance_authority.VariantProps<(props?: {
    size?: "sm" | "md" | "lg";
    shape?: "rounded" | "square";
} & class_variance_authority_types.ClassProp) => string> & {
    label?: React$1.ReactNode;
    labelProps?: InputLabelProps;
    description?: React$1.ReactNode;
    descriptionProps?: InputDescriptionProps;
    fieldProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
} & React$1.RefAttributes<HTMLInputElement>>;

type LoadingVariant = "spinner" | "bar" | "overlay";
type LoadingTone = "default" | "contrast";
interface LoadingProps extends React$1.ComponentPropsWithoutRef<"div"> {
    variant?: LoadingVariant;
    tone?: LoadingTone;
    label?: React$1.ReactNode;
}
declare const Loading: React$1.ForwardRefExoticComponent<LoadingProps & React$1.RefAttributes<HTMLDivElement>>;

declare const Menu: <Payload>(props: Menu$1.Root.Props<Payload>) => react_jsx_runtime.JSX.Element;
declare const MenuPortal: React$1.ForwardRefExoticComponent<Omit<_base_ui_react.ContextMenuPortalProps, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const MenuTrigger: React$1.ForwardRefExoticComponent<Omit<_base_ui_react.MenuTriggerProps<unknown> & React$1.RefAttributes<HTMLElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const MenuPositioner: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.ContextMenuPositionerProps, "ref"> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const MenuPopup: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.ContextMenuPopupProps, "ref"> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const MenuItem: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.ContextMenuItemProps, "ref"> & React$1.RefAttributes<HTMLElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const MenuLinkItem: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.ContextMenuLinkItemProps, "ref"> & React$1.RefAttributes<Element>, "ref"> & React$1.RefAttributes<HTMLAnchorElement>>;
declare const MenuSeparator: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.SeparatorProps, "ref"> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const MenuGroup: React$1.ForwardRefExoticComponent<Omit<_base_ui_react.ContextMenuGroupProps, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const MenuGroupLabel: React$1.ForwardRefExoticComponent<Omit<_base_ui_react.ContextMenuGroupLabelProps, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const MenuSubmenuRoot: typeof Menu$1.SubmenuRoot;
declare const MenuSubmenuTrigger: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.ContextMenuSubmenuTriggerProps, "ref"> & React$1.RefAttributes<HTMLElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const MenuCheckboxItem: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.ContextMenuCheckboxItemProps, "ref"> & React$1.RefAttributes<HTMLElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const MenuRadioGroup: React$1.NamedExoticComponent<Omit<_base_ui_react.ContextMenuRadioGroupProps, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const MenuRadioItem: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.ContextMenuRadioItemProps, "ref"> & React$1.RefAttributes<HTMLElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

/**
 * Coordinates a popover's open state and interactions.
 *
 * Use `open` and `onOpenChange` to control visibility externally.
 */
declare const Popover: typeof Popover$1.Root;
/** Renders popover content in a portal outside the current DOM hierarchy. */
declare const PopoverPortal: React$1.ForwardRefExoticComponent<Omit<_base_ui_react.PopoverPortalProps, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
/**
 * Toggles the popover when pressed and serves as its default positioning anchor.
 *
 * Set `nativeButton={false}` when rendering a non-button element such as an input.
 */
declare const PopoverTrigger: React$1.ForwardRefExoticComponent<Omit<_base_ui_react_internals_types.NativeButtonProps & Omit<_base_ui_react_internals_types.WithBaseUIEvent<React$1.DetailedHTMLProps<React$1.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>, "className" | "color" | "defaultValue" | "defaultChecked" | "style"> & {
    className?: string | ((state: _base_ui_react.PopoverTriggerState) => string | undefined);
    render?: React$1.ReactElement<unknown, string | React$1.JSXElementConstructor<any>> | _base_ui_react.ComponentRenderFn<_base_ui_react.HTMLProps, _base_ui_react.PopoverTriggerState>;
    style?: React$1.CSSProperties | ((state: _base_ui_react.PopoverTriggerState) => React$1.CSSProperties | undefined);
} & {
    nativeButton?: boolean | undefined;
    handle?: Popover$1.Handle<unknown>;
    payload?: unknown;
    id?: string | undefined;
    openOnHover?: boolean | undefined;
    delay?: number | undefined;
    closeDelay?: number | undefined;
} & React$1.RefAttributes<HTMLElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
/** Dims the page behind a modal popover. */
declare const PopoverBackdrop: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.PopoverBackdropProps, "ref"> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
/**
 * Positions popover content relative to its trigger or a custom `anchor` element.
 *
 * Positioning is independent from the popover's open state.
 */
declare const PopoverPositioner: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.PopoverPositionerProps, "ref"> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
/** The styled surface that contains popover content. */
declare const PopoverPopup: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.PopoverPopupProps, "ref"> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
/** Positioning options forwarded to the popover positioner. */
type PopoverPositioningProps = Pick<React$1.ComponentPropsWithoutRef<typeof Popover$1.Positioner>, "align" | "alignOffset" | "anchor" | "arrowPadding" | "collisionAvoidance" | "collisionBoundary" | "collisionPadding" | "disableAnchorTracking" | "positionMethod" | "side" | "sideOffset" | "sticky">;
/** Props for the precomposed popover portal, positioner, arrow, and popup. */
interface PopoverContentProps extends React$1.ComponentPropsWithoutRef<typeof Popover$1.Popup>, PopoverPositioningProps {
    /** Whether to render an arrow pointing toward the anchor. @default false */
    arrow?: boolean;
    /** Props applied to the arrow when {@link arrow} is enabled. */
    arrowProps?: React$1.ComponentPropsWithoutRef<typeof Popover$1.Arrow>;
}
/**
 * A precomposed popover surface with a portal and positioned popup.
 *
 * It anchors to `PopoverTrigger` by default. Pass `anchor` to position it
 * against a different element, ref, virtual element, or callback. `anchor`
 * controls placement only; use `Popover`'s `open` and `onOpenChange` props
 * to control visibility. Use `arrow` to render an anchor indicator.
 *
 * Use the individual popover primitives when a custom DOM structure is needed.
 */
declare const PopoverContent: React$1.ForwardRefExoticComponent<PopoverContentProps & React$1.RefAttributes<HTMLDivElement>>;
/** An arrow that points from the popover surface toward its anchor. */
declare const PopoverArrow: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.PopoverArrowProps, "ref"> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
/** A heading that labels the popover for assistive technologies. */
declare const PopoverTitle: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.PopoverTitleProps, "ref"> & React$1.RefAttributes<HTMLHeadingElement>, "ref"> & React$1.RefAttributes<HTMLHeadingElement>>;
/** Supporting text that describes the popover's purpose. */
declare const PopoverDescription: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.PopoverDescriptionProps, "ref"> & React$1.RefAttributes<HTMLParagraphElement>, "ref"> & React$1.RefAttributes<HTMLParagraphElement>>;
/** Closes the popover when pressed. */
declare const PopoverClose: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.PopoverCloseProps, "ref"> & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

interface SwitchProps extends React$1.ComponentPropsWithoutRef<typeof Switch$1.Root> {
    label?: React$1.ReactNode;
    description?: React$1.ReactNode;
}
declare const Switch: React$1.ForwardRefExoticComponent<SwitchProps & React$1.RefAttributes<HTMLElement>>;

declare const Tabs: React$1.ForwardRefExoticComponent<Omit<_base_ui_react.TabsRootProps, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const TabIndicator: React$1.ForwardRefExoticComponent<Omit<_base_ui_react.TabsIndicatorProps, "ref"> & React$1.RefAttributes<HTMLElement>>;
declare const TabsList: React$1.ForwardRefExoticComponent<Omit<_base_ui_react.TabsListProps & VariantProps<(props?: {
    variant?: "filled" | "outlined" | "ghost";
    theme?: "primary" | "secondary" | "tertiary";
} & class_variance_authority_types.ClassProp) => string>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const Tab: React$1.ForwardRefExoticComponent<Omit<_base_ui_react.TabsTabProps, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const TabPanel: React$1.ForwardRefExoticComponent<Omit<_base_ui_react.TabsPanelProps, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const ToastProvider: React$1.FC<_base_ui_react.ToastProviderProps>;
declare const useToastManager: typeof Toast.useToastManager;
declare const createToastManager: typeof Toast.createToastManager;
declare const ToastPortal: React$1.ForwardRefExoticComponent<Omit<_base_ui_react.ToastPortalProps, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ToastViewport: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.ToastViewportProps, "ref"> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ToastRoot: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.ToastRootProps, "ref"> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ToastContent: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.ToastContentProps, "ref"> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ToastTitle: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.ToastTitleProps, "ref"> & React$1.RefAttributes<HTMLHeadingElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ToastDescription: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.ToastDescriptionProps, "ref"> & React$1.RefAttributes<HTMLParagraphElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ToastAction: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.ToastActionProps, "ref"> & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const ToastClose: React$1.ForwardRefExoticComponent<Omit<Omit<_base_ui_react.ToastCloseProps, "ref"> & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

declare const Toggle: React$1.ForwardRefExoticComponent<Omit<Toggle$1.Props<string> & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const ToggleGroup: React$1.ForwardRefExoticComponent<Omit<ToggleGroup$1.Props<string> & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare function cn(...inputs: ClassValue[]): string;

export { Accordion, AccordionHeader, AccordionItem, AccordionPanel, AccordionTrigger, type AdornmentProps, Avatar, AvatarFallback, AvatarImage, type AvatarProps, type AvatarSize, Badge, type BadgeProps, Button, Calendar, type CalendarDay, type CalendarMonth, type CalendarProps, type CalendarWeek, CheckboxField, type CheckboxProps, Collapsible, CollapsiblePanel, CollapsibleTrigger, Combobox, ComboboxClear, ComboboxEmpty, ComboboxField, ComboboxInput, ComboboxInputGroup, ComboboxItem, ComboboxItemIndicator, ComboboxList, ComboboxPopup, ComboboxPortal, ComboboxPositioner, type ComboboxProps, ComboboxTrigger, type CreateCalendarMonthOptions, Dialog, DialogBackdrop, DialogClose, DialogDescription, DialogPopup, DialogPortal, DialogTitle, DialogTrigger, Drawer, DrawerBackdrop, DrawerClose, DrawerDescription, DrawerPopup, DrawerPortal, DrawerTitle, DrawerTrigger, DrawerViewport, IconButton, type InputBase, InputController, type InputControllerProps, type InputControllerRenderProps, InputDescription, type InputDescriptionProps, InputField, InputFieldChildren, type InputFieldProps, InputLabel, type InputLabelProps, InputWrapper, Loading, type LoadingProps, type LoadingTone, type LoadingVariant, Menu, MenuCheckboxItem, MenuGroup, MenuGroupLabel, MenuItem, MenuLinkItem, MenuPopup, MenuPortal, MenuPositioner, MenuRadioGroup, MenuRadioItem, MenuSeparator, MenuSubmenuRoot, MenuSubmenuTrigger, MenuTrigger, Popover, PopoverArrow, PopoverBackdrop, PopoverClose, PopoverContent, type PopoverContentProps, PopoverDescription, PopoverPopup, PopoverPortal, PopoverPositioner, PopoverTitle, PopoverTrigger, RadioGroupField, type RadioGroupFieldProps, type RadioOption, SelectField, Switch, type SwitchProps, Tab, TabIndicator, TabPanel, Tabs, TabsList, TextAreaField, TextField, ToastAction, ToastClose, ToastContent, ToastDescription, ToastPortal, ToastProvider, ToastRoot, ToastTitle, ToastViewport, Toggle, ToggleGroup, type UseCalendarProps, type UseCalendarReturn, badgeVariants, buttonVariants, cn, createCalendarMonth, createToastManager, iconButtonVariants, inputVariants, useCalendar, useToastManager };
