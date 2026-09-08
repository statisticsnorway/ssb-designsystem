import type { Meta, StoryObj } from '@storybook/react-vite'
import { Paragraph, SkipLink } from '@statisticsnorway/design-react'

const meta: Meta<typeof SkipLink> = {
  title: 'Komponenter/SkipLink',
  component: SkipLink,
}

export default meta
type Story = StoryObj<typeof SkipLink>

export const Default: Story = {
  render: () => (
    <>
      <Paragraph>
        For å vise SkipLink, tab til dette eksempelet, eller klikk inni eksempelet og trykk <kbd>Tab</kbd>.
        <SkipLink href='#main-content'>Hopp til hovedinnhold</SkipLink>
      </Paragraph>
      <main id='main-content' tabIndex={-1}>
        Region som kan motta fokus fra skiplink.
      </main>
    </>
  ),
}
