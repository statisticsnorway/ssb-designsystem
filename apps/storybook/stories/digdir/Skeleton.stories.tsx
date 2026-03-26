import type { Meta, StoryObj } from "@storybook/react";
import {
  Divider,
  Heading,
  Paragraph,
  Skeleton,
} from "@digdir/designsystemet-react";

const description = `
Skeleton brukes for å vise at innhold på en side er i ferd med å lastes inn.

Se full dokumentasjon:
https://designsystemet.no/no/components/docs/skeleton/overview
`;

const meta: Meta<typeof Skeleton> = {
  title: "Digdir/Skeleton",
  component: Skeleton,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  render: () => <Skeleton width={200} height={100} />,
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "2rem" }}>
      <div>
        <Heading level={2} data-size="xs" style={{ marginBottom: "1rem" }}>
          Varianter
        </Heading>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Skeleton variant="circle" width="50px" height="50px" />
          <Skeleton variant="rectangle" width="100px" height="50px" />
          <div style={{ minWidth: "120px" }}>
            <Paragraph>
              <Skeleton variant="text" width={10} />
            </Paragraph>
          </div>
        </div>
      </div>

      <Divider />

      <div>
        <Heading level={2} data-size="xs" style={{ marginBottom: "1rem" }}>
          Eksempel på bruk
        </Heading>
        <div style={{ display: "grid", gap: "0.75rem", maxWidth: "28rem" }}>
          <Skeleton height="150px" />
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              padding: "5px 0",
            }}
          >
            <Skeleton variant="circle" width="30px" height="30px" />
            <Heading level={3} data-size="sm">
              <Skeleton variant="text">En medium tittel</Skeleton>
            </Heading>
          </div>
          <Skeleton variant="text" width={140} />
        </div>
      </div>

      <Divider />

      <div>
        <Heading level={2} data-size="xs" style={{ marginBottom: "1rem" }}>
          Tekst variant
        </Heading>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "1 1 200px" }}>
            <Heading>En tittel</Heading>
            <Paragraph data-size="sm">
              Her er en paragraf som går over flere linjer
            </Paragraph>
          </div>
          <div style={{ flex: "1 1 200px" }}>
            <Heading>
              <Skeleton variant="text">En tittel</Skeleton>
            </Heading>
            <Paragraph data-size="sm">
              <Skeleton variant="text" width={40} />
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  ),
};
