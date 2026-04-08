import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { useState } from 'react'
import { ThemePreview } from './ThemePreview'
import { Fieldset, ToggleGroup } from '@digdir/designsystemet-react'
import { SunIcon, MoonIcon } from '@navikt/aksel-icons'
import classes from './ThemePreview.module.css'

const meta = {
  title: 'SSB/Theme Preview',
  tags: ['!autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const sizes = ['sm', 'md', 'lg']
const colorModes = ['light', 'dark']

export const Default: StoryFn = () => {
  const [size, setSize] = useState('sm')
  const [colorMode, setColorMode] = useState('light')

  return (
    <div data-color-scheme={colorMode} className={classes.wrapper}>
      <div data-color-scheme={colorMode} className={classes.innerWrapper}>
        <div className={classes.controls} data-size='sm'>
          <Fieldset style={{ display: 'grid', gap: '1rem' }}>
            <Fieldset.Legend>
              Størrelse
              <code data-size='xs'>(data-size)</code>
            </Fieldset.Legend>
            <ToggleGroup variant='secondary' value={size} onChange={(val) => setSize(val)}>
              {sizes.map((size) => (
                <ToggleGroup.Item key={size} value={size}>
                  {size}
                </ToggleGroup.Item>
              ))}
            </ToggleGroup>
          </Fieldset>

          <Fieldset>
            <Fieldset.Legend>
              Fargemodus
              <code data-size='xs'>(data-color-scheme)</code>
            </Fieldset.Legend>
            <ToggleGroup variant='secondary' value={colorMode} onChange={setColorMode}>
              {colorModes.map((color) => (
                <ToggleGroup.Item key={color} value={color}>
                  {color === 'light' ? <SunIcon aria-hidden /> : <MoonIcon aria-hidden />}
                  {color}
                </ToggleGroup.Item>
              ))}
            </ToggleGroup>
          </Fieldset>
        </div>
        <ThemePreview data-size={size} data-color-scheme={colorMode} />
      </div>
    </div>
  )
}
