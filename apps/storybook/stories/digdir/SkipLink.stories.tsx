import type { Meta, StoryObj } from "@storybook/react";
import { Paragraph, SkipLink } from "@digdir/designsystemet-react";

const description = `
SkipLink lar brukere hoppe over navigasjon og gå direkte til hovedinnholdet på siden.

Se full dokumentasjon:
https://designsystemet.no/no/components/docs/skip-link/overview
`;

const meta: Meta<typeof SkipLink> = {
  title: "Digdir/SkipLink",
  component: SkipLink,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SkipLink>;

export const Default: Story = {
  render: () => (
    <>
      <Paragraph>
        For å vise SkipLink, tab til dette eksempelet, eller klikk inni
        eksempelet og trykk <kbd>Tab</kbd>.
        <SkipLink href="#main-content">Hopp til hovedinnhold</SkipLink>
      </Paragraph>
      <main id="main-content" tabIndex={-1}>
        Region som kan motta fokus fra skiplink.
      </main>
    </>
  ),
};
