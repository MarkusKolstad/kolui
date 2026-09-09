import type { Meta, StoryObj } from "@storybook/react-vite";
import type { FormEvent } from "react";
import { useEffect, useState } from "react";

import {
  ArrowRight,
  MoreHorizontal,
  RotateCcw,
  ShieldCheck,
  UserPlus,
} from "lucide-react";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Button } from "../components/ui/buttons/button";
import {
  Dialog,
  DialogBackdrop,
  DialogClose,
  DialogDescription,
  DialogPopup,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { CheckboxField } from "../components/ui/inputs/checkbox/checkbox";
import { ComboboxField } from "../components/ui/inputs/combobox";
import { DateField } from "../components/ui/inputs/datefield";
import { RadioGroupField } from "../components/ui/inputs/radio";
import { TextAreaField } from "../components/ui/inputs/textareafield";
import { TextField } from "../components/ui/inputs/textfield";
import { Loading } from "../components/ui/loading";
import {
  Menu,
  MenuItem,
  MenuPopup,
  MenuPortal,
  MenuPositioner,
  MenuTrigger,
} from "../components/ui/menu";
import { Switch } from "../components/ui/switch";
import {
  Tab,
  TabIndicator,
  TabPanel,
  Tabs,
  TabsList,
} from "../components/ui/tabs/tabs";
import { Toggle, ToggleGroup } from "../components/ui/toggle";

import { IconButton } from "@/components";
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
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    if (!creating) {
      return;
    }

    const timer = window.setTimeout(() => {
      setCreating(false);
      setSubmitted(true);
    }, 1400);

    return () => window.clearTimeout(timer);
  }, [creating]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(false);
    setCreating(true);
  }

  function handleReset() {
    setCreating(false);
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
          {creating ? (
            <Loading variant="bar" label="Creating workspace" />
          ) : null}
          <div className="form-story-heading">
            <div>
              <p className="form-story-kicker">Workspace setup</p>
              <h2>Shape the way your team works</h2>
            </div>
            <span className="form-story-required">
              <span className="text-(--error)">*</span> Required
            </span>
          </div>

          <Tabs defaultValue="details" className="form-story-tabs">
            <TabsList variant="outlined" theme="tertiary">
              <Tab value="details">Workspace details</Tab>
              <Tab value="preferences">Preferences</Tab>
              <Tab value="team">Team & access</Tab>
              <TabIndicator />
            </TabsList>

            <TabPanel value="details" className="form-story-tab-panel">
              <div className="form-story-panel-heading">
                <h3>Workspace details</h3>
                <p>
                  Start with the basics so your team knows what this space is
                  for.
                </p>
              </div>
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
              <div className="form-story-panel-heading">
                <h3>Preferences</h3>
                <p>
                  Fine-tune the workspace for the way your team likes to work.
                </p>
              </div>
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
              <div className="form-story-preferences">
                <div className="form-story-preference-heading">
                  <div>
                    <p className="form-story-field-label">Workspace behavior</p>
                    <p className="form-story-preference-description">
                      Choose how the workspace feels for your team.
                    </p>
                  </div>
                  <Menu>
                    <MenuTrigger
                      render={
                        <Button
                          type="button"
                          variant="ghost"
                          theme="secondary"
                          aria-label="More workspace actions"
                        />
                      }
                    >
                      <MoreHorizontal size={18} aria-hidden="true" />
                    </MenuTrigger>
                    <MenuPortal>
                      <MenuPositioner sideOffset={6} align="end">
                        <MenuPopup>
                          <MenuItem onClick={() => undefined}>
                            Reset preferences
                          </MenuItem>
                          <MenuItem onClick={() => undefined}>
                            View activity log
                          </MenuItem>
                        </MenuPopup>
                      </MenuPositioner>
                    </MenuPortal>
                  </Menu>
                </div>
                <ToggleGroup
                  aria-label="Workspace density"
                  defaultValue={["comfortable"]}
                >
                  <Toggle value="comfortable">Comfortable</Toggle>
                  <Toggle value="compact">Compact</Toggle>
                </ToggleGroup>
                <Switch
                  name="reduced-motion"
                  label="Reduce motion"
                  description="Use simpler transitions throughout the workspace."
                />
              </div>
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

            <TabPanel value="team" className="form-story-tab-panel">
              <div className="form-story-panel-heading">
                <h3>Team &amp; access</h3>
                <p>
                  Set ownership, invite collaborators, and decide who can find
                  this workspace.
                </p>
              </div>
              <div className="form-story-profile">
                <Avatar size="lg">
                  <AvatarFallback>MK</AvatarFallback>
                </Avatar>
                <div className="form-story-profile-copy">
                  <p className="form-story-field-label">Workspace owner</p>
                  <p>Markus Kolstad</p>
                  <span>markus@kolui.dev</span>
                </div>
                <Dialog>
                  <DialogTrigger
                    render={
                      <Button
                        type="button"
                        variant="outlined"
                        theme="secondary"
                      />
                    }
                  >
                    <UserPlus size={16} aria-hidden="true" />
                    Invite teammate
                  </DialogTrigger>
                  <DialogPortal>
                    <DialogBackdrop />
                    <DialogPopup>
                      <DialogTitle>Invite a teammate</DialogTitle>
                      <DialogDescription>
                        Send an invitation when your workspace details are
                        ready.
                      </DialogDescription>
                      <TextField
                        label="Teammate email"
                        type="email"
                        placeholder="teammate@company.com"
                      />
                      <div className="form-story-dialog-actions">
                        <DialogClose
                          render={
                            <Button
                              type="button"
                              variant="outlined"
                              theme="secondary"
                            />
                          }
                        >
                          Cancel
                        </DialogClose>
                        <DialogClose
                          render={<Button type="button" theme="primary" />}
                        >
                          Send invite
                        </DialogClose>
                      </div>
                    </DialogPopup>
                  </DialogPortal>
                </Dialog>
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
              <div className="form-story-preferences">
                <div className="form-story-preference-heading">
                  <div>
                    <p className="form-story-field-label">Team actions</p>
                    <p className="form-story-preference-description">
                      Manage workspace activity and access from one place.
                    </p>
                  </div>
                  <Menu>
                    <MenuTrigger
                      render={
                        <IconButton
                          type="button"
                          variant="ghost"
                          theme="secondary"
                          aria-label="More team actions"
                        />
                      }
                    >
                      <MoreHorizontal size={18} aria-hidden="true" />
                    </MenuTrigger>
                    <MenuPortal>
                      <MenuPositioner sideOffset={6} align="end">
                        <MenuPopup>
                          <MenuItem onClick={() => undefined}>
                            Reset access settings
                          </MenuItem>
                          <MenuItem onClick={() => undefined}>
                            View activity log
                          </MenuItem>
                        </MenuPopup>
                      </MenuPositioner>
                    </MenuPortal>
                  </Menu>
                </div>
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
              <Button type="submit" theme="primary" disabled={creating}>
                {creating ? "Creating workspace" : "Create workspace"}
                {creating ? (
                  <Loading
                    variant="spinner"
                    tone="contrast"
                    label={null}
                    aria-label="Creating workspace"
                  />
                ) : (
                  <ArrowRight size={16} aria-hidden="true" />
                )}
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
