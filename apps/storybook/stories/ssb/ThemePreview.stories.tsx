import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { useState } from 'react'
import { ThemePreview } from './ThemePreview'
import { Fieldset, ToggleGroup } from '@digdir/designsystemet-react'
import { SunIcon, MoonIcon } from '@navikt/aksel-icons'
import classes from './ThemePreview.module.css'
//import type { Color } from '../../../packages/theme/brand/types.d.ts'

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
const colorSchemeModes = ['light', 'dark']
const colorModes = ['accent', 'neutral', 'brand1', 'brand2']

export const Default: StoryFn = () => {
  const [size, setSize] = useState('sm')
  const [colorSchemeMode, setColorSchemeMode] = useState('light')
  const [colorMode, setColorMode] = useState('accent')

  return (
    <div data-color-scheme={colorSchemeMode} className={classes.wrapper}>
      <div data-color-scheme={colorSchemeMode} className={classes.innerWrapper}>
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
            <ToggleGroup variant='secondary' value={colorSchemeMode} onChange={setColorSchemeMode}>
              {colorSchemeModes.map((color) => (
                <ToggleGroup.Item key={color} value={color}>
                  {color === 'light' ? <SunIcon aria-hidden /> : <MoonIcon aria-hidden />}
                  {color}
                </ToggleGroup.Item>
              ))}
            </ToggleGroup>
          </Fieldset>
          <Fieldset>
            <Fieldset.Legend>
              Fargetema
              <code data-size='xs'>(data-color)</code>
            </Fieldset.Legend>
            <ToggleGroup variant='secondary' value={colorMode} onChange={setColorMode}>
              {colorModes.map((color) => (
                <ToggleGroup.Item key={color} value={color}>
                  {color}
                </ToggleGroup.Item>
              ))}
            </ToggleGroup>
          </Fieldset>
        </div>
        <ThemePreview data-size={size} data-color={colorMode} data-color-scheme={colorSchemeMode} />
      </div>
    </div>
  )
}
