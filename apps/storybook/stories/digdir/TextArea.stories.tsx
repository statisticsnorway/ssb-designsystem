import type { Meta, StoryObj } from "@storybook/react";
import {
  FieldDescription,
  Field,
  Label,
  Textarea,
} from "@digdir/designsystemet-react";

const description = `
Textarea brukes når brukeren skal kunne skrive inn tekst som går over flere linjer.

Se full dokumentasjon:
https://designsystemet.no/no/components/docs/textarea/overview
`;

const meta: Meta<typeof Textarea> = {
  title: "Digdir/Textarea",
  component: Textarea,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <>
      <Label htmlFor="my-textarea">Melding</Label>
      <Textarea id="my-textarea" />
    </>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "1.5rem", maxWidth: "28rem" }}>
      <Field>
        <Label htmlFor="my-textarea-rows">Med definert høyde</Label>
        <Textarea id="my-textarea-rows" rows={6} />
      </Field>

      <Field>
        <Label htmlFor="my-textarea-readonly">Kun lesbar</Label>
        <FieldDescription>
          Teksten er lagt inn automatisk basert på det du allerede har sendt
          inn, og kan ikke redigeres.
        </FieldDescription>
        <Textarea
          id="my-textarea-readonly"
          readOnly
          value="Jeg søker om støtte fordi jeg trenger midler til å gjennomføre prosjektet slik det er planlagt."
        />
      </Field>
    </div>
  ),
};
