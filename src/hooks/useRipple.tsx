import { useCallback, useRef } from "react";

interface RippleOptions {
  duration?: number;
  color?: string;
  opacity?: number;
}

export function useRipple(options: RippleOptions = {}) {
  const { duration = 600, color = "currentColor", opacity = 0.3 } = options;

  const rippleContainerRef = useRef<HTMLElement | null>(null);

  const createRipple = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const element = event.currentTarget;
      const rect = element.getBoundingClientRect();

      const size = Math.max(rect.width, rect.height);
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;

      const ripple = document.createElement("span");
      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        transform: scale(0);
        animation: ripple ${duration}ms linear;
        background-color: ${color};
        opacity: ${opacity};
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
      `;

      // Ensure the element can contain the ripple
      const computedStyle = getComputedStyle(element);
      if (computedStyle.position === "static") {
        element.style.position = "relative";
      }
      element.style.overflow = "hidden";

      element.appendChild(ripple);

      // Remove the ripple after animation
      setTimeout(() => {
        ripple.remove();
      }, duration);
    },
    [duration, color, opacity],
  );

  return { createRipple, rippleContainerRef };
}
