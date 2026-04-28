import type { Meta, StoryObj } from '@storybook/react'
import { Heading, Tag } from '@statisticsnorway/design-react'
import { RobotIcon } from '@navikt/aksel-icons'

const description = `
Tag er en merkelapp som kan brukes til å kategorisere elementer eller kommunisere fremdrift, status eller prosess. 

Se full dokumentasjon:
https://designsystemet.no/no/components/docs/tag/overview
`

const meta: Meta<typeof Tag> = {
  title: 'Digdir/Tag',
  component: Tag,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Tag>

export const Default: Story = {
  render: () => <Tag>Ny</Tag>,
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '2rem' }}>
      <div>
        <Heading level={2} data-size='xs' style={{ marginBottom: '1rem' }}>
          Farger
        </Heading>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Tag>Standard</Tag>
          <Tag variant='outline'>Outline</Tag>
          <Tag data-color='neutral'>Neutral</Tag>
          <Tag data-color='info'>Info</Tag>
          <Tag data-color='success'>Success</Tag>
          <Tag data-color='warning'>Warning</Tag>
          <Tag data-color='danger'>Danger</Tag>
        </div>
      </div>

      <div>
        <Heading level={2} data-size='xs' style={{ marginBottom: '1rem' }}>
          Størrelser
        </Heading>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Tag data-size='sm'>Small</Tag>
          <Tag data-size='md'>Medium</Tag>
          <Tag data-size='lg'>Large</Tag>
        </div>
      </div>

      <div>
        <Heading level={2} data-size='xs' style={{ marginBottom: '0.5rem' }}>
          Med ikon
        </Heading>

        <Tag data-color='neutral' data-size='md' style={{ paddingInlineStart: 'var(--ds-size-1)' }}>
          <RobotIcon aria-hidden style={{ marginInlineEnd: 'var(--ds-size-1)' }} />
          KI-generert
        </Tag>
      </div>
    </div>
  ),
}
