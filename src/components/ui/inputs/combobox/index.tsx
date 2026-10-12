"use client";

import type { ComboboxRootProps } from "@base-ui/react/combobox";
import type { Group } from "@base-ui/react/internals/resolveValueLabel";
import { CheckIcon, ChevronDown, XIcon } from "lucide-react";
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ForwardedRef,
  type ReactElement,
  type ReactNode,
  type RefAttributes,
} from "react";
import {
  Combobox,
  ComboboxClear,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxInputGroup,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxList,
  ComboboxPopup,
  ComboboxPortal,
  ComboboxPositioner,
  ComboboxTrigger,
} from "../../combobox";
import {
  InputController,
  InputWrapper,
  type AdornmentProps,
} from "../base/input";

const styles = {
  ActionButtons: "ComboboxActionButtons",
  ItemText: "ComboboxItemText",
} as const;

export interface ComboboxProps<T, Multiple extends boolean>
  extends AdornmentProps, ComboboxRootProps<T, Multiple> {
  label?: ReactNode;
  description?: ReactNode;
  emptyOption?: ReactNode;
  items?: readonly T[] | readonly Group<T>[] | undefined;
}

type ComboboxFieldComponent = <T, Multiple extends boolean = false>(
  props: ComboboxProps<T, Multiple> & RefAttributes<HTMLInputElement>,
) => ReactElement | null;

function ComboboxFieldImpl<T, Multiple extends boolean = false>(
  {
    id = "combobox",
    label,
    description,
    items,
    emptyOption,
    startAdornment,
    endAdornment,
    itemToStringValue = (item: T) => JSON.stringify(item),
    itemToStringLabel = (item: T) => JSON.stringify(item),
    ...rootProps
  }: ComboboxProps<T, Multiple>,
  ref: ForwardedRef<HTMLInputElement>,
) {
  return (
    <Combobox
      items={items}
      inputRef={ref}
      itemToStringValue={itemToStringValue}
      itemToStringLabel={itemToStringLabel}
      {...rootProps}
    >
      <InputController
        id={id}
        label={label}
        description={description}
        render={(props) => (
          <ComboboxInputGroup unstyled>
            <InputWrapper<HTMLInputElement>
              ref={ref}
              startAdornment={startAdornment}
              endAdornment={
                <div className={styles.ActionButtons}>
                  {endAdornment}
                  <ComboboxClear aria-label="Clear selection">
                    <XIcon />
                  </ComboboxClear>
                  <ComboboxTrigger aria-label="Open popup">
                    <ChevronDown />
                  </ComboboxTrigger>
                </div>
              }
              render={(renderProps: ComponentPropsWithoutRef<"input">) => (
                <ComboboxInput unstyled {...renderProps} />
              )}
              {...props}
            />
          </ComboboxInputGroup>
        )}
      />
      <ComboboxPortal>
        <ComboboxPositioner sideOffset={4}>
          <ComboboxPopup>
            {emptyOption ? (
              <ComboboxEmpty>{emptyOption}</ComboboxEmpty>
            ) : null}
            <ComboboxList>
              {(item: T) => (
                <ComboboxItem key={itemToStringValue(item)} value={item}>
                  <ComboboxItemIndicator>
                    <CheckIcon />
                  </ComboboxItemIndicator>
                  <span className={styles.ItemText}>
                    {itemToStringLabel(item)}
                  </span>
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxPopup>
        </ComboboxPositioner>
      </ComboboxPortal>
    </Combobox>
  );
}

/** A complete combobox field with label, description, adornments, and default item rendering. */
export const ComboboxField = forwardRef(
  ComboboxFieldImpl,
) as ComboboxFieldComponent;
