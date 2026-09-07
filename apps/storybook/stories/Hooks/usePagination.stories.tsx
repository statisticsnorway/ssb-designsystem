import type { Meta, StoryObj } from '@storybook/react-vite'
import { useArgs } from 'storybook/preview-api'
import { Pagination, usePagination, type UsePaginationProps } from '@statisticsnorway/design-react'

const meta: Meta<UsePaginationProps> = {
  title: 'Hooks/usePagination',
  argTypes: {
    currentPage: {
      control: {
        type: 'number',
      },
      table: {
        defaultValue: { summary: '1' },
      },
      description: 'Gjeldende sidenummer',
      type: {
        name: 'number',
      },
    },
    totalPages: {
      control: {
        type: 'number',
      },
      table: {
        defaultValue: { summary: '1' },
      },
      description: 'Totalt antall sider',
      type: {
        name: 'number',
      },
    },
    showPages: {
      control: {
        type: 'number',
      },
      table: {
        defaultValue: { summary: '7' },
      },
      description: 'Maksimalt antall sider som skal vises',
      type: {
        name: 'number',
      },
    },
    setCurrentPage: {
      description: 'Funksjon for å sette gjeldende side',
      type: {
        name: 'function',
      },
    },
    onChange: {
      description: 'Kalles når siden endres',
      type: { name: 'function' },
    },
  },
}

export default meta

type Story = StoryObj<UsePaginationProps>

export const Default: Story = {
  args: {
    currentPage: 2,
    totalPages: 10,
    showPages: 7,
  },

  render: (args) => {
    const [, updateArgs] = useArgs()

    const { pages, nextButtonProps, prevButtonProps } = usePagination({
      ...args,
      setCurrentPage: (currentPage) => updateArgs({ currentPage }),
    })

    return (
      <Pagination aria-label='Pagineringsmeny'>
        <Pagination.List>
          <Pagination.Item>
            <Pagination.Button aria-label='Forrige side' {...prevButtonProps}>
              Forrige
            </Pagination.Button>
          </Pagination.Item>

          {pages.map(({ page, itemKey, buttonProps }) => (
            <Pagination.Item key={itemKey}>
              {typeof page === 'number' && (
                <Pagination.Button aria-label={`Side ${page}`} {...buttonProps}>
                  {page}
                </Pagination.Button>
              )}
            </Pagination.Item>
          ))}

          <Pagination.Item>
            <Pagination.Button aria-label='Neste side' {...nextButtonProps}>
              Neste
            </Pagination.Button>
          </Pagination.Item>
        </Pagination.List>
      </Pagination>
    )
  },
}
