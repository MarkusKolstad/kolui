import type { Meta, StoryObj } from "@storybook/react-vite";

import "./theming-docs.css";

type TokenRow = {
  name: string;
  light: string;
  dark: string;
  usage: string;
};

type SemanticRow = {
  name: string;
  value: string;
  usage: string;
};

type ColorGuidanceRow = {
  name: string;
  role: string;
  use: string;
  avoid: string;
};

const coreTokens: TokenRow[] = [
  {
    name: "--bg",
    light: "#ffffff",
    dark: "#16171d",
    usage: "App/page background",
  },
  {
    name: "--surface-soft",
    light: "#f4f6f8",
    dark: "#22252e",
    usage: "Inputs, popovers, soft panels",
  },
  {
    name: "--border",
    light: "#dfe3e8",
    dark: "#2e303a",
    usage: "Borders and separators",
  },
  {
    name: "--code-bg",
    light: "#f4f3ec",
    dark: "#1f2028",
    usage: "Code samples",
  },
  {
    name: "--text",
    light: "#6b6375",
    dark: "#9ca3af",
    usage: "Supporting text",
  },
  {
    name: "--text-h",
    light: "#08060d",
    dark: "#f3f4f6",
    usage: "High contrast text",
  },
  {
    name: "--text-contrast",
    light: "#ffffff",
    dark: "#08060d",
    usage: "Text on contrasting surfaces",
  },
];

const semanticTokens: SemanticRow[] = [
  { name: "--primary", value: "#2563eb", usage: "Primary actions" },
  { name: "--secondary", value: "#475569", usage: "Muted emphasis" },
  { name: "--accent", value: "#9333ea", usage: "Brand accent" },
  { name: "--success", value: "#16a34a", usage: "Success states" },
  { name: "--warning", value: "#f97316", usage: "Warning states" },
  { name: "--error", value: "#dc2626", usage: "Error states" },
  {
    name: "--accent-bg",
    value: "rgba(147, 51, 234, 0.12/0.18)",
    usage: "Soft selected backgrounds",
  },
  {
    name: "--accent-border",
    value: "rgba(147, 51, 234, 0.45/0.55)",
    usage: "Accent borders/focus rings",
  },
];

const colorGuidance: ColorGuidanceRow[] = [
  {
    name: "--primary",
    role: "Main action",
    use: "Use for the most important action in a view, such as Save, Continue, or Create.",
    avoid:
      "Do not use it for every interactive element; reserve it for the clearest next step.",
  },
  {
    name: "--accent",
    role: "Emphasis and focus",
    use: "Use for brand moments, selected states, focus rings, indicators, and supporting emphasis.",
    avoid:
      "Do not use it to communicate success, warning, or error; those have dedicated tokens.",
  },
  {
    name: "--secondary",
    role: "Low-priority action",
    use: "Use for supporting actions, quiet controls, and actions that should not compete with primary.",
    avoid:
      "Do not use it for body text; use --text or --text-h for text hierarchy.",
  },
  {
    name: "--success / --warning / --error",
    role: "Status feedback",
    use: "Use only when the meaning is success, caution, or failure so the color stays predictable.",
    avoid: "Do not use status colors as general decoration or brand accents.",
  },
];

const meta = {
  title: "Foundations/Theming",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Token reference for Kolui. This page is plain TSX, so styling and layout are fully controlled with CSS.",
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

function ColorChip({ color, label }: { color: string; label: string }) {
  return (
    <div className="theming-chip-wrap">
      <span
        className="theming-chip"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />
      <code>{label}</code>
    </div>
  );
}

export const Overview: Story = {
  render: () => (
    <main className="theming-docs">
      <header className="theming-hero">
        <p className="theming-kicker">Design System</p>
        <h1>Kolui Theming</h1>
        <p>
          Theme resolution order: <strong>:root defaults</strong>, then{" "}
          <strong>OS dark mode</strong>, then explicit
          <code> data-kolui-theme</code> override on <code>html</code>.
        </p>
      </header>

      <section className="theming-section">
        <h2>Choosing Semantic Colors</h2>
        <p className="theming-section-intro">
          Semantic colors describe a component&apos;s role, not just its visual
          shade. Start with the meaning you want to communicate, then choose the
          matching token so themes can change without changing the UI&apos;s
          intent.
        </p>
        <div
          className="theming-guidance-grid"
          role="table"
          aria-label="Semantic color guidance"
        >
          <div
            className="theming-guidance-row theming-guidance-head"
            role="row"
          >
            <span role="columnheader">Token</span>
            <span role="columnheader">Role</span>
            <span role="columnheader">Use it for</span>
            <span role="columnheader">Avoid</span>
          </div>
          {colorGuidance.map((token) => (
            <div className="theming-guidance-row" role="row" key={token.name}>
              <code>{token.name}</code>
              <strong>{token.role}</strong>
              <span>{token.use}</span>
              <span>{token.avoid}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="theming-section">
        <h2>Core Tokens</h2>
        <div
          className="theming-grid theming-grid-core"
          role="table"
          aria-label="Core token values"
        >
          <div className="theming-row theming-row-head" role="row">
            <span role="columnheader">Token</span>
            <span role="columnheader">Light</span>
            <span role="columnheader">Dark</span>
            <span role="columnheader">Usage</span>
          </div>
          {coreTokens.map((token) => (
            <div className="theming-row" role="row" key={token.name}>
              <code>{token.name}</code>
              <ColorChip color={token.light} label={token.light} />
              <ColorChip color={token.dark} label={token.dark} />
              <span>{token.usage}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="theming-section">
        <h2>Semantic Tokens</h2>
        <div
          className="theming-grid"
          role="table"
          aria-label="Semantic token values"
        >
          <div className="theming-row theming-row-head" role="row">
            <span role="columnheader">Token</span>
            <span role="columnheader">Preview</span>
            <span role="columnheader">Usage</span>
          </div>
          {semanticTokens.map((token) => (
            <div className="theming-row" role="row" key={token.name}>
              <code>{token.name}</code>
              {token.value.startsWith("#") ? (
                <ColorChip color={token.value} label={token.value} />
              ) : (
                <code>{token.value}</code>
              )}
              <span>{token.usage}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="theming-section">
        <h2>Override Example</h2>
        <pre>
          <code>{`:root {
  --accent: #7e22ce;
  --surface-soft: #f7f8fa;
}

@media (prefers-color-scheme: dark) {
  :root:not([data-kolui-theme]) {
    --accent: #a855f7;
    --surface-soft: #1f2230;
  }
}`}</code>
        </pre>
      </section>
    </main>
  ),
};
