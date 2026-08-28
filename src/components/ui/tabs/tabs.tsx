import { cn } from "#/lib/utils";
import { Tabs as BaseTabs } from "@base-ui/react/tabs";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";
import "./index.styles.css";
export * from "@base-ui/react/tabs";

export const Tabs = forwardRef<HTMLDivElement, BaseTabs.Root.Props>(function (
  { className, ...rest },
  ref,
) {
  return (
    <BaseTabs.Root ref={ref} className={cn("tabs", className)} {...rest} />
  );
});

export const TabIndicator = forwardRef<HTMLElement, BaseTabs.Indicator.Props>(
  function ({ className, ...rest }, ref) {
    return (
      <BaseTabs.Indicator
        ref={ref}
        className={cn("tab-indicator", className)}
        {...rest}
      />
    );
  },
);

const tablistVariants = cva("tablist", {
  variants: {
    variant: {
      filled: "tablist-filled",
      outlined: "tablist-outlined",
      ghost: "tablist-ghost",
    },
    theme: {
      primary: "tablist-primary",
      secondary: "tablist-secondary",
      tertiary: "tablist-tertiary",
    },
  },
  defaultVariants: {
    variant: "filled",
    theme: "primary",
  },
});

export const TabsList = forwardRef<
  HTMLDivElement,
  BaseTabs.List.Props & VariantProps<typeof tablistVariants>
>(function ({ variant, theme, className, ...rest }, ref) {
  return (
    <BaseTabs.List
      ref={ref}
      className={cn(tablistVariants({ variant, theme, className }))}
      {...rest}
    />
  );
});

export const Tab = forwardRef<HTMLButtonElement, BaseTabs.Tab.Props>(function (
  { className, ...rest },
  ref,
) {
  return <BaseTabs.Tab ref={ref} className={cn("tab", className)} {...rest} />;
});

export const TabPanel = forwardRef<HTMLDivElement, BaseTabs.Panel.Props>(
  function ({ className, ...rest }, ref) {
    return (
      <BaseTabs.Panel
        ref={ref}
        className={cn("tabpanel", className)}
        {...rest}
      />
    );
  },
);

// export const Tabs = forwardRef<HTMLInputElement, InputFieldProps>(
//   function TextField(
//     { className, id, label, description, ...inputProps },
//     ref,
//   ) {
//     const generatedId = useId();
//     const inputId = id ?? generatedId;
//     const labelId = label ? inputId + "-label" : undefined;
//     const descriptionId = description ? inputId + "-description" : undefined;

//       return (
//     <BaseTabs.Root className={styles.Root} defaultValue="overview">
//       <BaseTabs.List className={styles.List}>
//         <BaseTabs.Tab className={styles.Tab} value="overview">
//           Overview
//         </BaseTabs.Tab>
//         <BaseTabs.Tab className={styles.Tab} value="projects">
//           Projects
//         </BaseTabs.Tab>
//         <BaseTabs.Tab className={styles.Tab} value="account">
//           Account
//         </BaseTabs.Tab>
//         <BaseTabs.Indicator className={styles.Indicator} />
//       </BaseTabs.List>
//       <div className={styles.PanelViewport}>
//         <BaseTabs.Panel className={styles.Panel} value="overview">
//           <p className={styles.Paragraph}>Workspace stats and activity.</p>
//         </BaseTabs.Panel>
//         <BaseTabs.Panel className={styles.Panel} value="projects">
//           <p className={styles.Paragraph}>Milestones and deadlines.</p>
//         </BaseTabs.Panel>
//         <BaseTabs.Panel className={styles.Panel} value="account">
//           <p className={styles.Paragraph}>Profile and preferences.</p>
//         </BaseTabs.Panel>
//       </div>
//     </BaseTabs.Root>
//   );
//   },
// );
