import { useEffect, useRef, useState, type ReactNode } from 'react'
import css from '../../../../packages/css/theme/ssb.css?raw'
import styles from './Size.module.css'
import { Table, ToggleGroup } from '@statisticsnorway/design-react'

// Extracted from the @layer ds.theme.size block, which is the source of truth for the size scale.
const SIZES = Array.from(new Set(Array.from(css.matchAll(/--ds-size-(\d+):/g), ([, step]) => step)))
const FONT_SIZES = Array.from(new Set(Array.from(css.matchAll(/--ds-font-size-(\d+):/g), ([, step]) => step)))
type SizeMode = 'sm' | 'md' | 'lg'

const SizeModeToggle = ({ value, onChange }: { value: SizeMode; onChange: (value: SizeMode) => void }) => (
  <div className={styles.sizeModeControls}>
    <span>Size-mode</span>
    <ToggleGroup aria-label='Size-mode' value={value} onChange={(mode) => onChange(mode as SizeMode)}>
      {(['sm', 'md', 'lg'] as const).map((mode) => (
        <ToggleGroup.Item key={mode} value={mode}>
          {mode}
        </ToggleGroup.Item>
      ))}
    </ToggleGroup>
  </div>
)

type TokenTableRow = {
  key: string
  token: string
  cells: { key: string; content: ReactNode }[]
}

const TokenTable = ({ headers, rows }: { headers: string[]; rows: TokenTableRow[] }) => {
  return (
    <figure className={styles.sizeTokenList}>
      <Table data-fixed>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(({ key, token, cells }) => {
            return (
              <tr key={key}>
                <td>
                  <code>{token}</code>
                </td>
                {cells.map(({ key: cellKey, content }) => (
                  <td key={cellKey}>{content}</td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </Table>
    </figure>
  )
}

export const SizeTokenList = () => {
  const [sizeMode, setSizeMode] = useState<SizeMode>('md')
  const [pixelValues, setPixelValues] = useState<Record<string, number>>({})
  const barRefs = useRef<Record<string, HTMLDivElement | null>>({})

  useEffect(() => {
    // Sizes are computed from font-size, so measure the rendered width instead of parsing the CSS value.
    const measure = () => {
      setPixelValues(
        Object.fromEntries(
          SIZES.map((size) => [size, Math.round(barRefs.current[size]?.getBoundingClientRect().width ?? 0)])
        )
      )
    }

    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [sizeMode])

  return (
    <>
      <SizeModeToggle value={sizeMode} onChange={setSizeMode} />
      <TokenTable
        headers={['Variabel navn', 'Figma', `PX når ${sizeMode}`, 'Forhåndsvisning']}
        rows={SIZES.map((size) => ({
          key: size,
          token: `--ds-size-${size}`,
          cells: [
            { key: `figma-${size}`, content: `size ${size}` },
            {
              key: `value-${size}`,
              content: pixelValues[size] === undefined ? '...' : `${pixelValues[size]}px`,
            },
            {
              key: `preview-${size}`,
              content: (
                <div
                  key={`preview-${size}`}
                  data-size={sizeMode}
                  ref={(el) => {
                    barRefs.current[size] = el
                  }}
                  className={styles.bar}
                  style={{ width: `var(--ds-size-${size})` }}
                />
              ),
            },
          ],
        }))}
      />
    </>
  )
}

export const FontSizeTokenList = () => {
  const [sizeMode, setSizeMode] = useState<SizeMode>('md')
  const [pixelValues, setPixelValues] = useState<Record<string, string>>({})
  const previewRefs = useRef<Record<string, HTMLSpanElement | null>>({})

  useEffect(() => {
    const measure = () => {
      setPixelValues(
        Object.fromEntries(FONT_SIZES.map((size) => [size, getComputedStyle(previewRefs.current[size]!).fontSize]))
      )
    }

    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [sizeMode])

  return (
    <>
      <SizeModeToggle value={sizeMode} onChange={setSizeMode} />
      <TokenTable
        headers={['Navn', `Verdi med ${sizeMode}`, 'Forhåndsvisning']}
        rows={FONT_SIZES.map((size) => ({
          key: size,
          token: `--ds-font-size-${size}`,
          cells: [
            { key: `value-${size}`, content: pixelValues[size] ?? '...' },
            {
              key: `preview-${size}`,
              content: (
                <span
                  key={`preview-${size}`}
                  data-size={sizeMode}
                  ref={(el) => {
                    previewRefs.current[size] = el
                  }}
                  style={{ fontSize: `var(--ds-font-size-${size})` }}
                >
                  Aa
                </span>
              ),
            },
          ],
        }))}
      />
    </>
  )
}
