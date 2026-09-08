import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Heading, Pagination, usePagination } from '@statisticsnorway/design-react'

const meta: Meta<typeof Pagination> = {
  title: 'Komponenter/Pagination',
  component: Pagination,
  parameters: {
    customStyles: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Pagination aria-label='pagineringsmeny'>
      <Pagination.List>
        <Pagination.Item>
          <Pagination.Button aria-label='Forrige side'>Forrige</Pagination.Button>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Button aria-label='Side 1'>1</Pagination.Button>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Button aria-label='Side 2' aria-current='true'>
            2
          </Pagination.Button>
        </Pagination.Item>
        <Pagination.Item />
        <Pagination.Item>
          <Pagination.Button aria-label='Side 9'>9</Pagination.Button>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Button aria-label='Side 10'>10</Pagination.Button>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Button aria-label='Neste side'>Neste</Pagination.Button>
        </Pagination.Item>
      </Pagination.List>
    </Pagination>
  ),
}
export const WithAnchor: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(2)
    const { pages, nextButtonProps, prevButtonProps } = usePagination({
      currentPage,
      setCurrentPage,
      totalPages: 10,
      showPages: 7,
    })

    return (
      <>
        <Heading level={2} data-size='xs' style={{ marginBottom: '0.5rem' }}>
          Med lenker
        </Heading>

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
      </>
    )
  },
}
