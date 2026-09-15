import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Heading, Table, type TableHeaderCellProps } from '@statisticsnorway/design-react'

const meta: Meta<typeof Table> = {
  title: 'Komponenter/Table',
  component: Table,
}

export default meta
type Story = StoryObj<typeof meta>

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
}

export const Zebra: Story = {
  render: () => (
    <Table zebra>
      <caption>Antall søknader per måned</caption>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>Måned</Table.HeaderCell>
          <Table.HeaderCell>2023</Table.HeaderCell>
          <Table.HeaderCell>2024</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.HeaderCell scope='row'>Januar</Table.HeaderCell>
          <Table.Cell>1 230</Table.Cell>
          <Table.Cell>1 450</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell scope='row'>Februar</Table.HeaderCell>
          <Table.Cell>980</Table.Cell>
          <Table.Cell>1 120</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell scope='row'>Mars</Table.HeaderCell>
          <Table.Cell>1 150</Table.Cell>
          <Table.Cell>1 300</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
}

export const Border: Story = {
  render: () => (
    <Table border>
      <caption>Antall søknader per måned</caption>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>Måned</Table.HeaderCell>
          <Table.HeaderCell>2023</Table.HeaderCell>
          <Table.HeaderCell>2024</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.HeaderCell scope='row'>Januar</Table.HeaderCell>
          <Table.Cell>1 230</Table.Cell>
          <Table.Cell>1 450</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell scope='row'>Februar</Table.HeaderCell>
          <Table.Cell>980</Table.Cell>
          <Table.Cell>1 120</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell scope='row'>Mars</Table.HeaderCell>
          <Table.Cell>1 150</Table.Cell>
          <Table.Cell>1 300</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
}

export const Hover: Story = {
  render: () => (
    <Table hover>
      <caption>Antall søknader per måned</caption>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell>Måned</Table.HeaderCell>
          <Table.HeaderCell>2023</Table.HeaderCell>
          <Table.HeaderCell>2024</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.HeaderCell scope='row'>Januar</Table.HeaderCell>
          <Table.Cell>1 230</Table.Cell>
          <Table.Cell>1 450</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell scope='row'>Februar</Table.HeaderCell>
          <Table.Cell>980</Table.Cell>
          <Table.Cell>1 120</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell scope='row'>Mars</Table.HeaderCell>
          <Table.Cell>1 150</Table.Cell>
          <Table.Cell>1 300</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
}

export const StickyHeader: Story = {
  parameters: {
    customStyles: {
      height: '180px',
      overflow: 'auto',
    },
  },
  render: () => {
    const rows = Array.from({ length: 10 }, (_, i) => i + 1)
    return (
      <Table stickyHeader>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>Header 1</Table.HeaderCell>
            <Table.HeaderCell>Header 2</Table.HeaderCell>
            <Table.HeaderCell>Header 3</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {rows.map((row) => (
            <Table.Row key={row}>
              <Table.Cell>{`Cell ${row}.1`}</Table.Cell>
              <Table.Cell>{`Cell ${row}.2`}</Table.Cell>
              <Table.Cell>{`Cell ${row}.3`}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    )
  },
}

export const Sorted: Story = {
  render: () => {
    const dummyData = [
      {
        id: 1,
        navn: 'Lise Nordmann',
        epost: 'lise@nordmann.no',
        telefon: '22345678',
      },
      {
        id: 2,
        navn: 'Kari Nordmann',
        epost: 'kari@nordmann.no',
        telefon: '87654321',
      },
      {
        id: 3,
        navn: 'Ola Nordmann',
        epost: 'ola@nordmann.no',
        telefon: '32345678',
      },
      {
        id: 4,
        navn: 'Per Nordmann',
        epost: 'per@nordmann.no',
        telefon: '12345678',
      },
    ]

    const [sortField, setSortField] = useState<keyof (typeof dummyData)[0] | null>(null)
    const [sortDirection, setSortDirection] = useState<TableHeaderCellProps['sort']>(undefined)

    const handleSort = (field: keyof (typeof dummyData)[0]) => {
      if (sortField === field && sortDirection === 'descending') {
        setSortField(null)
        setSortDirection(undefined)
      } else {
        setSortField(field)
        setSortDirection(sortField === field && sortDirection === 'ascending' ? 'descending' : 'ascending')
      }
    }

    const sortedData = [...dummyData].sort((a, b) => {
      if (sortField === null) return 0
      if (a[sortField] < b[sortField]) return sortDirection === 'ascending' ? -1 : 1
      if (a[sortField] > b[sortField]) return sortDirection === 'ascending' ? 1 : -1
      return 0
    })

    return (
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell sort={sortField === 'navn' ? sortDirection : 'none'} onClick={() => handleSort('navn')}>
              Navn
            </Table.HeaderCell>
            <Table.HeaderCell>Epost</Table.HeaderCell>
            <Table.HeaderCell
              sort={sortField === 'telefon' ? sortDirection : 'none'}
              onClick={() => handleSort('telefon')}
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
    )
  },
}
