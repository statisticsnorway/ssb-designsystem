import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Heading, Pagination, usePagination } from '@statisticsnorway/design-react'

const description = `
Pagination brukes til å dele opp innhold i flere sider og gjøre det lettere å navigere i store datamengder.

Se full dokumentasjon:
https://designsystemet.no/no/components/docs/pagination/overview
`

const meta: Meta<typeof Pagination> = {
  title: 'Digdir/Pagination',
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Pagination aria-label='Sidenavigering'>
      <Pagination.List>
        <Pagination.Item>
          <Pagination.Button aria-label='Forrige side' data-variant='tertiary'>
            Forrige
          </Pagination.Button>
        </Pagination.Item>

        <Pagination.Item>
          <Pagination.Button aria-label='Side 1' data-variant='tertiary'>
            1
          </Pagination.Button>
        </Pagination.Item>

        <Pagination.Item>
          <Pagination.Button aria-label='Side 2' data-variant='primary'>
            2
          </Pagination.Button>
        </Pagination.Item>

        <Pagination.Item>
          <Pagination.Button aria-label='Side 3' data-variant='tertiary'>
            3
          </Pagination.Button>
        </Pagination.Item>

        <Pagination.Item>
          <Pagination.Button aria-label='Neste side' data-variant='tertiary'>
            Neste
          </Pagination.Button>
        </Pagination.Item>
      </Pagination.List>
    </Pagination>
  ),
}

const PaginationWithAnchor = () => {
  const [currentPage, setCurrentPage] = useState(2)
  const { pages, nextButtonProps, prevButtonProps } = usePagination({
    currentPage,
    setCurrentPage,
    totalPages: 10,
    showPages: 7,
  })

  return (
    <Pagination aria-label='Sidenavigering med lenker'>
      <Pagination.List>
        <Pagination.Item>
          <Pagination.Button asChild aria-label='Forrige side' {...prevButtonProps}>
            <a href='#forrige-side'>Forrige</a>
          </Pagination.Button>
        </Pagination.Item>

        {pages.map(({ page, itemKey, buttonProps }) => (
          <Pagination.Item key={itemKey}>
            {typeof page === 'number' && (
              <Pagination.Button asChild aria-label={`Side ${page}`} {...buttonProps}>
                <a href={`#side-${page}`}>{page}</a>
              </Pagination.Button>
            )}
          </Pagination.Item>
        ))}

        <Pagination.Item>
          <Pagination.Button asChild aria-label='Neste side' {...nextButtonProps}>
            <a href='#neste-side'>Neste</a>
          </Pagination.Button>
        </Pagination.Item>
      </Pagination.List>
    </Pagination>
  )
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1.5rem' }}>
      <Heading level={2} data-size='xs' style={{ marginBottom: '0.5rem' }}>
        Enkel paginering
      </Heading>
      <Pagination aria-label='Enkel sidenavigering'>
        <Pagination.List>
          <Pagination.Item>
            <Pagination.Button aria-label='Forrige side' data-variant='tertiary'>
              Forrige
            </Pagination.Button>
          </Pagination.Item>

          <Pagination.Item>
            <Pagination.Button aria-label='Side 1' data-variant='primary'>
              1
            </Pagination.Button>
          </Pagination.Item>

          <Pagination.Item>
            <Pagination.Button aria-label='Side 2' data-variant='tertiary'>
              2
            </Pagination.Button>
          </Pagination.Item>

          <Pagination.Item>
            <Pagination.Button aria-label='Side 3' data-variant='tertiary'>
              3
            </Pagination.Button>
          </Pagination.Item>

          <Pagination.Item>
            <Pagination.Button aria-label='Neste side' data-variant='tertiary'>
              Neste
            </Pagination.Button>
          </Pagination.Item>
        </Pagination.List>
      </Pagination>

      <Heading level={2} data-size='xs' style={{ marginBottom: '0.5rem' }}>
        Med lenker
      </Heading>

      <PaginationWithAnchor />
    </div>
  ),
}
