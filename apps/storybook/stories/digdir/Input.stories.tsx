import type { Meta, StoryObj } from "@storybook/react";
import {
  Input,
  Field,
  Label,
  ValidationMessage,
} from "@digdir/designsystemet-react";

const description = `
Input lar brukeren skrive inn én linje med tekst.

Se full dokumentasjon:
https://designsystemet.no/en/components/docs/input/overview
`;

const meta: Meta<typeof Input> = {
  title: "Digdir/Input",
  component: Input,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => (
    <Field>
      <Label>Fornavn</Label>
      <Input placeholder="Ola" />
    </Field>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "1rem", maxWidth: "20rem" }}>
      <Field>
        <Label>Standard</Label>
        <Input placeholder="Ola" />
      </Field>

      <Field>
        <Label>Med hjelpetekst</Label>
        <Field.Description>Skriv inn fornavnet ditt</Field.Description>
        <Input placeholder="Ola" />
      </Field>

      <Field>
        <Label>Med feilmelding</Label>
        <Input defaultValue="O" />
        <ValidationMessage>Fornavn må være minst 2 tegn</ValidationMessage>
      </Field>

      <Field>
        <Label>Kun lesbar</Label>
        <Input readOnly value="12345678901" />
      </Field>
    </div>
  ),
};
