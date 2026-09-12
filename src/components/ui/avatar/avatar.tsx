import { cn } from "@/lib/utils";
import { Avatar as BaseAvatar } from "@base-ui/react/avatar";
import * as React from "react";
import "./avatar.css";

const styles = {
  Avatar: "Avatar",
  Image: "Image",
  Fallback: "Fallback",
} as const;

export type AvatarSize = "xxs" | "xs" | "sm" | "md" | "lg";

export interface AvatarProps extends React.ComponentPropsWithoutRef<
  typeof BaseAvatar.Root
> {
  size?: AvatarSize;
}

const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(function Avatar(
  { className, size = "md", ...props },
  ref,
) {
  return (
    <BaseAvatar.Root
      ref={ref}
      data-size={size}
      className={cn(styles.Avatar, className)}
      {...props}
    />
  );
});

Avatar.displayName = "Avatar";

const AvatarImage = React.forwardRef<
  HTMLImageElement,
  React.ComponentPropsWithoutRef<typeof BaseAvatar.Image>
>(function AvatarImage({ className, alt = "", ...props }, ref) {
  return (
    <BaseAvatar.Image
      ref={ref}
      className={cn(styles.Image, className)}
      alt={alt}
      {...props}
    />
  );
});

AvatarImage.displayName = "AvatarImage";

const AvatarFallback = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<typeof BaseAvatar.Fallback>
>(function AvatarFallback({ className, ...props }, ref) {
  return (
    <BaseAvatar.Fallback
      ref={ref}
      className={cn(styles.Fallback, className)}
      {...props}
    />
  );
});

AvatarFallback.displayName = "AvatarFallback";

export { Avatar, AvatarFallback, AvatarImage };
