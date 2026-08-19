import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card, Divider, Heading, Paragraph, Link } from '@statisticsnorway/design-react'

const meta: Meta<typeof Card> = {
  title: 'Komponenter/Card',
  component: Card,
}

export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: () => (
    <Card style={{ maxWidth: '300px' }}>
      <Heading level={3} data-size='sm'>
        Tittel
      </Heading>
      <Paragraph data-size='sm'>Dette er et eksempel på innhold i et kort.</Paragraph>
    </Card>
  ),
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Card>
        <Paragraph data-size='sm'>Default</Paragraph>
      </Card>

      <Card data-variant='tinted'>
        <Paragraph data-size='sm'>Tinted</Paragraph>
      </Card>
    </div>
  ),
}

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px , 320px))' }}>
      <Card>
        <Card.Block>
          <Paragraph>Standard</Paragraph>
        </Card.Block>
      </Card>
      <Card data-variant='tinted'>
        <Card.Block>
          <Paragraph>Standard:Tinted</Paragraph>
        </Card.Block>
      </Card>
      <Card data-color='secondary'>
        <Card.Block>
          <Paragraph>Secondary</Paragraph>
        </Card.Block>
      </Card>
      <Card data-color='secondary' data-variant='tinted'>
        <Card.Block>
          <Paragraph>Secondary:Tinted</Paragraph>
        </Card.Block>
      </Card>
      <Card data-color='neutral'>
        <Card.Block>
          <Paragraph>Neutral</Paragraph>
        </Card.Block>
      </Card>
      <Card data-color='neutral' data-variant='tinted'>
        <Card.Block>
          <Paragraph>Neutral:Tinted</Paragraph>
        </Card.Block>
      </Card>
      <Card data-color='magic'>
        <Card.Block>
          <Paragraph>Magic</Paragraph>
        </Card.Block>
      </Card>
      <Card data-color='magic' data-variant='tinted'>
        <Card.Block>
          <Paragraph>Magic:Tinted</Paragraph>
        </Card.Block>
      </Card>
    </div>
  ),
}

export const LinkCard: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem', maxWidth: '300px' }}>
      <Card style={{ maxWidth: '300px' }}>
        <Heading level={3} data-size='sm'>
          <Link href='#'>Klikkbart kort</Link>
        </Heading>
        <Paragraph data-size='sm'>Dette kortet fungerer som en lenke via overskriften.</Paragraph>
      </Card>
    </div>
  ),
}

export const CardWithSection: Story = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, 320px)',
        gap: '1rem',
        justifyContent: 'start',
      }}
    >
      <Card>
        <Card.Block>
          <Heading level={3}>
            <Link href='#'>Default</Link>
          </Heading>
          <Paragraph>Most provide as with carried business are much better more the perfected designer.</Paragraph>
        </Card.Block>
        <Card.Block>
          <img src='/img/animals/cat-landscape.jpg' alt='Cat landscape' />
        </Card.Block>
      </Card>

      <Card data-variant='tinted'>
        <Card.Block>
          <img src='/img/animals/cat-landscape.jpg' alt='Cat landscape' />
        </Card.Block>
        <Card.Block style={{ flex: 1 }}>
          <Heading level={3}>
            <Link href='#'>Tinted</Link>
          </Heading>
          <Paragraph>Most provide as with carried business are much better more the perfected designer.</Paragraph>
        </Card.Block>
      </Card>
    </div>
  ),
}

export const CardWithSectionHorizontal: Story = {
  render: () => (
    <Card
      style={{
        display: 'grid',
        gridAutoFlow: 'column',
        width: '700px',
      }}
    >
      <Card.Block>
        <img
          src='/img/animals/moose.jpg'
          alt='Elg som spiser lunsj'
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </Card.Block>
      <Card.Block>
        <Heading>Hagearbeid</Heading>
        <Paragraph>
          Våren er her, og hagen trenger litt stell. Godt å se at jobben allerede er i gang – med to dedikerte elger på
          skift.
        </Paragraph>
      </Card.Block>
    </Card>
  ),
}
