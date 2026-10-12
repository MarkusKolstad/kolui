import { cn } from "@/lib/utils";
import { Popover as BasePopover } from "@base-ui/react/popover";
import * as React from "react";
import "./popover.css";

const styles = {
  Backdrop: "PopoverBackdrop",
  Positioner: "PopoverPositioner",
  Popup: "PopoverPopup",
  Arrow: "PopoverArrow",
  Title: "PopoverTitle",
  Description: "PopoverDescription",
  Close: "PopoverClose",
} as const;

/**
 * Coordinates a popover's open state and interactions.
 *
 * Use `open` and `onOpenChange` to control visibility externally.
 */
export const Popover = BasePopover.Root;

/** Renders popover content in a portal outside the current DOM hierarchy. */
export const PopoverPortal = BasePopover.Portal;

/**
 * Toggles the popover when pressed and serves as its default positioning anchor.
 *
 * Set `nativeButton={false}` when rendering a non-button element such as an input.
 */
export const PopoverTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof BasePopover.Trigger>
>(function PopoverTrigger({ className, ...props }, ref) {
  return <BasePopover.Trigger ref={ref} className={className} {...props} />;
});

PopoverTrigger.displayName = "PopoverTrigger";

/** Dims the page behind a modal popover. */
export const PopoverBackdrop = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BasePopover.Backdrop>
>(function PopoverBackdrop({ className, ...props }, ref) {
  return (
    <BasePopover.Backdrop
      ref={ref}
      className={cn(styles.Backdrop, className)}
      {...props}
    />
  );
});

PopoverBackdrop.displayName = "PopoverBackdrop";

/**
 * Positions popover content relative to its trigger or a custom `anchor` element.
 *
 * Positioning is independent from the popover's open state.
 */
export const PopoverPositioner = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BasePopover.Positioner>
>(function PopoverPositioner({ className, ...props }, ref) {
  return (
    <BasePopover.Positioner
      ref={ref}
      className={cn(styles.Positioner, className)}
      {...props}
    />
  );
});

PopoverPositioner.displayName = "PopoverPositioner";

/** The styled surface that contains popover content. */
export const PopoverPopup = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BasePopover.Popup>
>(function PopoverPopup({ className, ...props }, ref) {
  return (
    <BasePopover.Popup
      ref={ref}
      className={cn(styles.Popup, className)}
      {...props}
    />
  );
});

PopoverPopup.displayName = "PopoverPopup";

/** Positioning options forwarded to the popover positioner. */
type PopoverPositioningProps = Pick<
  React.ComponentPropsWithoutRef<typeof BasePopover.Positioner>,
  | "align"
  | "alignOffset"
  | "anchor"
  | "arrowPadding"
  | "collisionAvoidance"
  | "collisionBoundary"
  | "collisionPadding"
  | "disableAnchorTracking"
  | "positionMethod"
  | "side"
  | "sideOffset"
  | "sticky"
>;

/** Props for the precomposed popover portal, positioner, arrow, and popup. */
export interface PopoverContentProps
  extends React.ComponentPropsWithoutRef<typeof BasePopover.Popup>,
    PopoverPositioningProps {
  /** Whether to render an arrow pointing toward the anchor. @default false */
  arrow?: boolean;

  /** Props applied to the arrow when {@link arrow} is enabled. */
  arrowProps?: React.ComponentPropsWithoutRef<typeof BasePopover.Arrow>;
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
export const PopoverContent = React.forwardRef<
  HTMLDivElement,
  PopoverContentProps
>(
  function PopoverContent(
    {
      align,
      alignOffset,
      anchor,
      arrow = false,
      arrowPadding,
      arrowProps,
      collisionAvoidance,
      collisionBoundary,
      collisionPadding,
      disableAnchorTracking,
      positionMethod,
      side,
      sideOffset = 8,
      sticky,
      ...props
    },
    ref,
  ) {
    return (
      <PopoverPortal>
        <PopoverPositioner
          align={align}
          alignOffset={alignOffset}
          anchor={anchor}
          arrowPadding={arrowPadding}
          collisionAvoidance={collisionAvoidance}
          collisionBoundary={collisionBoundary}
          collisionPadding={collisionPadding}
          disableAnchorTracking={disableAnchorTracking}
          positionMethod={positionMethod}
          side={side}
          sideOffset={sideOffset}
          sticky={sticky}
        >
          {arrow ? <PopoverArrow {...arrowProps} /> : null}
          <PopoverPopup ref={ref} {...props} />
        </PopoverPositioner>
      </PopoverPortal>
    );
  },
);

PopoverContent.displayName = "PopoverContent";

/** An arrow that points from the popover surface toward its anchor. */
export const PopoverArrow = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BasePopover.Arrow>
>(function PopoverArrow({ className, ...props }, ref) {
  return (
    <BasePopover.Arrow
      ref={ref}
      className={cn(styles.Arrow, className)}
      {...props}
    />
  );
});

PopoverArrow.displayName = "PopoverArrow";

/** A heading that labels the popover for assistive technologies. */
export const PopoverTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<typeof BasePopover.Title>
>(function PopoverTitle({ className, ...props }, ref) {
  return (
    <BasePopover.Title
      ref={ref}
      className={cn(styles.Title, className)}
      {...props}
    />
  );
});

PopoverTitle.displayName = "PopoverTitle";

/** Supporting text that describes the popover's purpose. */
export const PopoverDescription = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<typeof BasePopover.Description>
>(function PopoverDescription({ className, ...props }, ref) {
  return (
    <BasePopover.Description
      ref={ref}
      className={cn(styles.Description, className)}
      {...props}
    />
  );
});

PopoverDescription.displayName = "PopoverDescription";

/** Closes the popover when pressed. */
export const PopoverClose = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof BasePopover.Close>
>(function PopoverClose({ className, ...props }, ref) {
  return (
    <BasePopover.Close
      ref={ref}
      className={cn(styles.Close, className)}
      {...props}
    />
  );
});

PopoverClose.displayName = "PopoverClose";
