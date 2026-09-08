import type { Meta, StoryObj } from "@storybook/react-vite";
import type { FormEvent } from "react";
import { useState } from "react";

import { ArrowRight, RotateCcw, ShieldCheck } from "lucide-react";
import { Button } from "../components/ui/buttons/button";
import { CheckboxField } from "../components/ui/inputs/checkbox/checkbox";
import { ComboboxField } from "../components/ui/inputs/combobox";
import { DateField } from "../components/ui/inputs/datefield";
import { RadioGroupField } from "../components/ui/inputs/radio";
import { TextAreaField } from "../components/ui/inputs/textareafield";
import { TextField } from "../components/ui/inputs/textfield";
import {
  Tab,
  TabIndicator,
  TabPanel,
  Tabs,
  TabsList,
} from "../components/ui/tabs/tabs";

import "./form.css";

const planOptions = ["Starter", "Team", "Enterprise"];

const meta = {
  title: "Example/Form",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

function FormExample() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  function handleReset() {
    setSubmitted(false);
  }

  return (
    <main className="form-story">
      <section className="form-story-shell" aria-labelledby="form-story-title">
        <div className="form-story-intro">
          <div className="form-story-eyebrow">
            <ShieldCheck size={16} aria-hidden="true" />
            Workspace setup
          </div>
          <h1 id="form-story-title">Create your workspace</h1>
          <p>
            Bring your team together in one focused place for planning, sharing,
            and getting work across the line.
          </p>
          <div className="form-story-note">
            <span className="form-story-note-dot" aria-hidden="true" />
            Takes about two minutes
          </div>
        </div>

        <form
          className="form-story-form"
          onSubmit={handleSubmit}
          onReset={handleReset}
        >
          <div className="form-story-heading">
            <div>
              <p className="form-story-kicker">Workspace details</p>
              <h2>Tell us about your team</h2>
            </div>
            <span className="form-story-required">
              <span className="text-(--error)">*</span> Required
            </span>
          </div>

          <Tabs defaultValue="details" className="form-story-tabs">
            <TabsList variant="outlined" theme="primary">
              <Tab value="details">Workspace details</Tab>
              <Tab value="preferences">Preferences</Tab>
              <TabIndicator />
            </TabsList>

            <TabPanel value="details" className="form-story-tab-panel">
              <div className="form-story-grid">
                <TextField
                  label="Workspace name"
                  name="workspace-name"
                  placeholder="e.g. Northstar"
                  description="Choose a name your whole team will recognize."
                  required
                />
                <TextField
                  label="Work email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  description="We will use this to send your workspace invite."
                  required
                />
                <DateField
                  label="Launch date"
                  name="launch-date"
                  description="You can change this later."
                  required
                />
                <ComboboxField
                  label="Plan"
                  name="plan"
                  items={planOptions}
                  defaultValue="Team"
                  description="Start with the plan that fits your team today."
                />
              </div>

              <TextAreaField
                label="What are you working on?"
                name="project-summary"
                placeholder="A short description of your team's next big thing"
                description="A little context helps us tailor the workspace for you."
                rows={4}
              />
            </TabPanel>

            <TabPanel value="preferences" className="form-story-tab-panel">
              <div className="form-story-grid">
                <TextField
                  label="Workspace URL"
                  name="workspace-url"
                  placeholder="northstar"
                  startAdornment={<span aria-hidden="true">kolui.dev/</span>}
                  description="Keep it short and easy to share."
                />
                <TextField
                  label="Timezone"
                  name="timezone"
                  defaultValue="Europe/Stockholm"
                  description="Used for notifications and scheduled work."
                />
              </div>
              <RadioGroupField
                name="workspace-visibility"
                label="Workspace visibility"
                description="Choose who can discover and request access to your workspace."
                defaultValue="invite-only"
                options={[
                  {
                    value: "invite-only",
                    label: "Invite only",
                    description: "Only people you invite can join.",
                  },
                  {
                    value: "organization",
                    label: "Organization-wide",
                    description: "Anyone in your organization can discover it.",
                  },
                ]}
              />
              <div className="form-story-checkboxes">
                <p className="form-story-field-label">Notifications</p>
                <CheckboxField
                  name="weekly-digest"
                  label="Send me a weekly digest"
                  description="A short summary of workspace activity every Monday."
                  defaultChecked
                />
                <CheckboxField
                  name="product-updates"
                  label="Share product updates"
                  description="Occasional news about new Kolui features."
                />
              </div>
            </TabPanel>
          </Tabs>

          <div className="form-story-footer">
            <p className="form-story-privacy">
              Your information stays private and is never sold.
            </p>
            <div className="form-story-actions">
              <Button type="reset" variant="ghost" theme="secondary">
                <RotateCcw size={16} aria-hidden="true" />
                Reset
              </Button>
              <Button type="submit" theme="primary">
                Create workspace
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </div>
          </div>

          {submitted ? (
            <p className="form-story-success" role="status">
              Workspace details saved. Welcome aboard.
            </p>
          ) : null}
        </form>
      </section>
    </main>
  );
}

export const WorkspaceSetup: Story = {
  render: () => <FormExample />,
};
