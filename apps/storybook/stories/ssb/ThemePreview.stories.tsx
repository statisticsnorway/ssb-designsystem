import type { Meta, StoryObj, StoryFn } from '@storybook/react'
import { useState } from 'react'
import { ThemePreview } from './ThemePreview'
import { Heading, Fieldset, ToggleGroup, Link, List, Divider, Button } from '@digdir/designsystemet-react'
import { SunIcon, MoonIcon, ChevronUpIcon, ChevronRightIcon } from '@navikt/aksel-icons'
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
const colorSchemeModes = ['light', 'dark']
const colorModes = ['accent', 'neutral', 'brand1', 'brand2']

export const Default: StoryFn = () => {
  const [size, setSize] = useState('sm')
  const [colorSchemeMode, setColorSchemeMode] = useState('light')
  const [colorMode, setColorMode] = useState('accent')
  const footerColorScheme = colorSchemeMode === 'light' ? 'dark' : 'dark'

  return (
    <div data-color-scheme={colorSchemeMode} className={classes.wrapper} data-size={size} data-color={colorMode}>
      <div data-color-scheme={colorSchemeMode} className={classes.innerWrapper}>
        <div className={classes.controls} data-size='sm'>
          <Fieldset style={{ display: 'grid', gap: '1rem' }}>
            <Fieldset.Legend>
              Størrelse <code data-size='xs'>(data-size)</code>
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
              Fargemodus <code data-size='xs'>(data-color-scheme)</code>
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
              Fargetema <code data-size='xs'>(data-color)</code>
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
      <div className={classes.footer} data-color-scheme={footerColorScheme}>
        <Button
          variant='secondary'
          style={{ float: 'right', marginBottom: '2rem' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ChevronUpIcon aria-hidden />
          Til Toppen
        </Button>

        <Divider />

        <div className={classes.footerList}>
          {' '}
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index}>
              <Heading>Lenkeliste</Heading>

              <List.Unordered
                style={{
                  listStyle: 'none',
                  padding: 0,
                }}
              >
                {[1, 2, 3, 4].map((nr) => (
                  <List.Item key={nr}>
                    <Link href=''>
                      <ChevronRightIcon aria-hidden height={'1.5rem'} width={'1.5rem'} />
                      <span>Lenke {nr}</span>
                    </Link>
                  </List.Item>
                ))}
              </List.Unordered>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
