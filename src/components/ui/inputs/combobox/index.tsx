"use client";

import { Combobox, type ComboboxRootProps } from "@base-ui/react/combobox";
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
  InputController,
  InputWrapper,
  type AdornmentProps,
} from "../base/input";
import styles from "./index.module.css";

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
    <Combobox.Root
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
          <Combobox.InputGroup>
            <InputWrapper<HTMLInputElement>
              ref={ref}
              // label={label}
              // description={description}
              startAdornment={startAdornment}
              endAdornment={
                <div className={styles.ActionButtons}>
                  {endAdornment}
                  <Combobox.Clear
                    className={styles.Clear}
                    aria-label="Clear selection"
                  >
                    <XIcon />
                  </Combobox.Clear>
                  <Combobox.Trigger
                    className={styles.Trigger}
                    aria-label="Open popup"
                  >
                    <ChevronDown />
                  </Combobox.Trigger>
                </div>
              }
              render={(renderProps: ComponentPropsWithoutRef<"input">) => (
                <Combobox.Input {...renderProps} />
              )}
              {...props}
            />
          </Combobox.InputGroup>
        )}
      />
      {/* <div className={styles.Label}>
        <label htmlFor={id}>{label}</label>
        <Combobox.InputGroup className={styles.InputGroup}>
          <div className={styles.StartAdornment}>
            <AppleIcon />
          </div>
          <Combobox.Input
            placeholder="e.g. Apple"
            id={id}
            className={styles.Input}
          />
          <div className={styles.ActionButtons}>
            <Combobox.Clear
              className={styles.Clear}
              aria-label="Clear selection"
            >
              <XIcon />
            </Combobox.Clear>
            <Combobox.Trigger
              className={styles.Trigger}
              aria-label="Open popup"
            >
              <ChevronDown />
            </Combobox.Trigger>
          </div>
        </Combobox.InputGroup>
        <InputDescription id={id}>{description}</InputDescription>
      </div> */}

      <Combobox.Portal>
        <Combobox.Positioner className={styles.Positioner} sideOffset={4}>
          <Combobox.Popup className={styles.Popup}>
            {emptyOption ? (
              <Combobox.Empty>
                <div className={styles.Empty}>{emptyOption}</div>
              </Combobox.Empty>
            ) : null}
            <Combobox.List className={styles.List}>
              {(item: T) => (
                <Combobox.Item
                  key={itemToStringValue(item)}
                  value={item}
                  className={styles.Item}
                >
                  <Combobox.ItemIndicator className={styles.ItemIndicator}>
                    <CheckIcon />
                  </Combobox.ItemIndicator>
                  <span className={styles.ItemText}>
                    {itemToStringLabel(item)}
                  </span>
                </Combobox.Item>
              )}
            </Combobox.List>
          </Combobox.Popup>
        </Combobox.Positioner>
      </Combobox.Portal>
    </Combobox.Root>
  );
}

export const ComboboxField = forwardRef(
  ComboboxFieldImpl,
) as ComboboxFieldComponent;

// const SingleTest = () => {
// return <ComboboxField<{value: string, label: string}> items={[{ value: "apple", label: "Apple" }]} itemToStringValue={(item) => item.value} />
// }

// const MultipleTest = () => {
// return <ComboboxField<{value: string, label: string}, true> multiple items={[{ value: "apple", label: "Apple" }]} itemToStringValue={(item) => item.value} />
// }
