import type { Meta, StoryObj } from '@storybook/react-vite'
import { Paragraph } from '@statisticsnorway/design-react'

const meta: Meta<typeof Paragraph> = {
  title: 'Komponenter/Typography/Paragraph',
  component: Paragraph,
}

export default meta
type Story = StoryObj<typeof Paragraph>

export const Default: Story = {
  render: () => (
    <Paragraph>
      Personvernerklæringen gir informasjon om hvilke personopplysninger vi behandler, hvordan disse blir behandlet og
      hvilke rettigheter du har.
    </Paragraph>
  ),
}

export const Size: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Paragraph data-size='xl'>This is an xl paragraph</Paragraph>
      <Paragraph data-size='lg'>This is a lg paragraph</Paragraph>
      <Paragraph data-size='md'>This is a md paragraph</Paragraph>
      <Paragraph data-size='sm'>This is a sm paragraph</Paragraph>
      <Paragraph data-size='xs'>This is an xs paragraph</Paragraph>
    </div>
  ),
}

export const Variants: Story = {
  name: 'Paragraph variants',
  render: () => (
    <div
      style={{
        display: 'grid',
        gap: '2rem',
        maxWidth: '48rem',
      }}
    >
      <Paragraph data-size='md'>
        Dette er et vanlig avsnitt med standardvariant. Det kan brukes til vanlig brødtekst der innholdet skal være lett
        å lese og følge.
      </Paragraph>

      <Paragraph data-size='md' data-variant='long'>
        Dette er et langt avsnitt. Long-varianten kan brukes når teksten består av flere setninger og avsnittet trenger
        mer plass og luft for å gjøre lengre tekstinnhold enklere å lese.
      </Paragraph>

      <Paragraph data-size='md' data-variant='short'>
        Dette er et kort avsnitt. Short-varianten passer når innholdet er kort og konsist.
      </Paragraph>
    </div>
  ),
}
