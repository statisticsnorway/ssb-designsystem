import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Heading,
  Table,
  type TableHeaderCellProps,
} from "@digdir/designsystemet-react";

const description = `
Table brukes for å vise strukturert informasjon på en ryddig og oversiktlig måte.

Se full dokumentasjon:
https://designsystemet.no/no/components/docs/table/overview
`;

const meta: Meta<typeof Table> = {
  title: "Digdir/Table",
  component: Table,
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
    <Table>
      <caption>Oversikt over personer</caption>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>Navn</Table.HeaderCell>
          <Table.HeaderCell>By</Table.HeaderCell>
          <Table.HeaderCell>Alder</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Ola Nordmann</Table.Cell>
          <Table.Cell>Oslo</Table.Cell>
          <Table.Cell>34</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Kari Nordmann</Table.Cell>
          <Table.Cell>Bergen</Table.Cell>
          <Table.Cell>29</Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Foot>
        <Table.Row>
          <Table.HeaderCell>Totalt</Table.HeaderCell>
          <Table.HeaderCell>-</Table.HeaderCell>
          <Table.HeaderCell>2 personer</Table.HeaderCell>
        </Table.Row>
      </Table.Foot>
    </Table>
  ),
};

const SortableExample = () => {
  const dummyData = [
    {
      id: 1,
      navn: "Lise Nordmann",
      epost: "lise@nordmann.no",
      telefon: "22345678",
    },
    {
      id: 2,
      navn: "Kari Nordmann",
      epost: "kari@nordmann.no",
      telefon: "87654321",
    },
    {
      id: 3,
      navn: "Ola Nordmann",
      epost: "ola@nordmann.no",
      telefon: "32345678",
    },
    {
      id: 4,
      navn: "Per Nordmann",
      epost: "per@nordmann.no",
      telefon: "12345678",
    },
  ];

  const [sortField, setSortField] = useState<
    keyof (typeof dummyData)[0] | null
  >(null);
  const [sortDirection, setSortDirection] =
    useState<TableHeaderCellProps["sort"]>(undefined);

  const handleSort = (field: keyof (typeof dummyData)[0]) => {
    if (sortField === field && sortDirection === "descending") {
      setSortField(null);
      setSortDirection(undefined);
    } else {
      setSortField(field);
      setSortDirection(
        sortField === field && sortDirection === "ascending"
          ? "descending"
          : "ascending",
      );
    }
  };

  const sortedData = [...dummyData].sort((a, b) => {
    if (sortField === null || !sortDirection) return 0;
    if (a[sortField] < b[sortField]) {
      return sortDirection === "ascending" ? -1 : 1;
    }
    if (a[sortField] > b[sortField]) {
      return sortDirection === "ascending" ? 1 : -1;
    }
    return 0;
  });

  return (
    <Table>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell
            sort={sortField === "navn" ? sortDirection : "none"}
            onClick={() => handleSort("navn")}
          >
            Navn
          </Table.HeaderCell>
          <Table.HeaderCell>E-post</Table.HeaderCell>
          <Table.HeaderCell
            sort={sortField === "telefon" ? sortDirection : "none"}
            onClick={() => handleSort("telefon")}
          >
            Telefon
          </Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {sortedData.map((row) => (
          <Table.Row key={row.id}>
            <Table.Cell>{row.navn}</Table.Cell>
            <Table.Cell>{row.epost}</Table.Cell>
            <Table.Cell>{row.telefon}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "2rem" }}>
      <div>
        <Heading level={2} data-size="xs" style={{ marginBottom: "1rem" }}>
          Zebra striper
        </Heading>
        <Table data-zebra>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell>Navn</Table.HeaderCell>
              <Table.HeaderCell>By</Table.HeaderCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Ola Nordmann</Table.Cell>
              <Table.Cell>Oslo</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Kari Nordmann</Table.Cell>
              <Table.Cell>Bergen</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>

      <div>
        <Heading level={2} data-size="xs" style={{ marginBottom: "1rem" }}>
          Med rammer
        </Heading>
        <Table data-border>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell>Produkt</Table.HeaderCell>
              <Table.HeaderCell>Pris</Table.HeaderCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Brød</Table.Cell>
              <Table.Cell>35 kr</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Melk</Table.Cell>
              <Table.Cell>22 kr</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>

      <div>
        <Heading level={2} data-size="xs" style={{ marginBottom: "1rem" }}>
          Sorterbar tabell
        </Heading>
        <SortableExample />
      </div>
    </div>
  ),
};
