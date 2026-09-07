import type { Decorator, Preview } from "@storybook/react-vite";
import "../src/index.css";

const STORYBOOK_LIGHT_BACKGROUND = "#ffffff";
const STORYBOOK_DARK_BACKGROUND = "#16171d";
const STORYBOOK_LIGHT_BACKGROUND_KEY = "light";
const STORYBOOK_DARK_BACKGROUND_KEY = "dark";

const withStorybookTheme: Decorator = (Story, context) => {
  const backgroundValue =
    typeof context.globals?.backgrounds?.value === "string"
      ? context.globals.backgrounds.value.toLowerCase()
      : "";

  if (typeof document !== "undefined") {
    if (
      backgroundValue === STORYBOOK_DARK_BACKGROUND_KEY ||
      backgroundValue === STORYBOOK_DARK_BACKGROUND
    ) {
      document.documentElement.dataset.koluiTheme = "dark";
    } else if (
      backgroundValue === STORYBOOK_LIGHT_BACKGROUND_KEY ||
      backgroundValue === STORYBOOK_LIGHT_BACKGROUND
    ) {
      document.documentElement.dataset.koluiTheme = "light";
    } else {
      delete document.documentElement.dataset.koluiTheme;
    }
  }

  return <Story />;
};

const preview: Preview = {
  decorators: [withStorybookTheme],
  initialGlobals: {
    backgrounds: {
      value: STORYBOOK_LIGHT_BACKGROUND_KEY,
    },
  },
  parameters: {
    backgrounds: {
      options: {
        light: {
          name: "Light",
          value: STORYBOOK_LIGHT_BACKGROUND,
        },
        dark: {
          name: "Dark",
          value: STORYBOOK_DARK_BACKGROUND,
        },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
