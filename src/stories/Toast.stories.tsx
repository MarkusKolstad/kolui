import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "../components/ui/buttons/button";
import {
  ToastClose,
  ToastContent,
  ToastDescription,
  ToastPortal,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport,
  useToastManager,
} from "../components/ui/toast";

const meta = {
  title: "Example/Toast",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

function ToastDemo() {
  const toastManager = useToastManager();

  function addToast(type: "info" | "success" | "error") {
    toastManager.add({
      type,
      title:
        type === "success"
          ? "Changes saved"
          : type === "error"
            ? "Save failed"
            : "Workspace updated",
      description:
        type === "error"
          ? "Please check your connection and try again."
          : "Your latest workspace settings are now up to date.",
    });
  }

  return (
    <>
      <div className="flex flex-wrap gap-2">
        <Button onClick={() => addToast("info")} theme="primary">
          Show info
        </Button>
        <Button onClick={() => addToast("success")} theme="success">
          Show success
        </Button>
        <Button onClick={() => addToast("error")} theme="error">
          Show error
        </Button>
      </div>
      <ToastPortal>
        <ToastViewport>
          <ToastList />
        </ToastViewport>
      </ToastPortal>
    </>
  );
}

function ToastList() {
  const { toasts } = useToastManager();

  return toasts.map((toast) => (
    <ToastRoot key={toast.id} toast={toast}>
      <ToastContent>
        <div>
          <ToastTitle />
          <ToastDescription />
        </div>
        <ToastClose />
      </ToastContent>
    </ToastRoot>
  ));
}

export const Default: Story = {
  render: () => (
    <ToastProvider>
      <ToastDemo />
    </ToastProvider>
  ),
};
