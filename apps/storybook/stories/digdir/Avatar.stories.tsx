import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, Divider, Heading } from '@digdir/designsystemet-react'
import { BriefcaseIcon } from '@navikt/aksel-icons'

const description = `
Avatar viser et bilde, initialer eller ikon for en person, enhet eller profil.

Se full dokumentasjon: https://designsystemet.no/no/components/docs/avatar/overview
`

const meta: Meta<typeof Avatar> = {
  title: 'Digdir/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    children: 'ON',
  },
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '2rem' }}>
      <div>
        <Heading level={2} data-size='xs' style={{ marginBottom: '1rem' }}>
          Størrelser
        </Heading>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Avatar data-size='xs' aria-label='extra small' initials='xs' />
          <Avatar data-size='sm' aria-label='small' initials='sm' />
          <Avatar data-size='md' aria-label='medium' initials='md' />
          <Avatar data-size='lg' aria-label='large' initials='lg' />
        </div>
      </div>

      <Divider />

      <div>
        <Heading level={2} data-size='xs' style={{ marginBottom: '1rem' }}>
          Farger
        </Heading>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Avatar aria-label='color default' />
          <Avatar aria-label='color neutral' data-color='neutral' />
          <Avatar aria-label='color brand1' data-color='brand1' />
          <Avatar aria-label='color brand2' data-color='brand2' />
        </div>
      </div>

      <Divider />

      <div>
        <Heading level={2} data-size='xs' style={{ marginBottom: '1rem' }}>
          Varianter
        </Heading>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Avatar variant='circle' aria-label='variant circle' />
          <Avatar variant='square' aria-label='variant square' />
          <Avatar variant='circle' aria-label='Ola Nordmann'>
            ON
          </Avatar>
          <Avatar variant='square' aria-label='Ola Nordmann'>
            ON
          </Avatar>
        </div>
      </div>

      <div>
        <Heading level={2} data-size='xs' style={{ marginBottom: '1rem' }}>
          Med bilde og ikon
        </Heading>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Avatar aria-label='Ola Nordmann'>
            <img src='/img/animals/cat-portrait.jpg' alt='' />
          </Avatar>
          <Avatar aria-label='Ola Nordmann'>
            <BriefcaseIcon />
          </Avatar>
        </div>
      </div>
    </div>
  ),
}
