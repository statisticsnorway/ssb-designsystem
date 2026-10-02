import { useEffect, useRef, useState } from 'react'
import css from '../../../../packages/css/theme/ssb.css?raw'
import styles from './Size.module.css'
import { Table } from '@statisticsnorway/design-react'

// Extracted from the @layer ds.theme.size block, which is the source of truth for the size scale.
const SIZES = Array.from(new Set(Array.from(css.matchAll(/--ds-size-(\d+):/g), ([, step]) => step)))

const COPIED_LABEL = 'Kopiert!'

export const SizeTokenList = () => {
  const [copiedToken, setCopiedToken] = useState<string | null>(null)
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
  }, [])

  const handleCopy = async (token: string) => {
    await navigator.clipboard.writeText(token)
    setCopiedToken(token)
    setTimeout(() => {
      setCopiedToken((current) => (current === token ? null : current))
    }, 1500)
  }

  return (
    <figure className={styles.sizeTokenList}>
      <Table data-fixed>
        <thead>
          <tr>
            <th>Variabel navn</th>
            <th>Figma</th>
            <th>PX når md</th>
            <th>Forhåndsvisning</th>
          </tr>
        </thead>
        <tbody>
          {SIZES.map((size) => {
            const token = `--ds-size-${size}`
            const tokenVariable = `var(${token})`

            return (
              <tr key={size}>
                <td>
                  <button
                    type='button'
                    className={styles.copyButton}
                    aria-label={`Kopier ${token}`}
                    data-tooltip={copiedToken === tokenVariable ? COPIED_LABEL : tokenVariable}
                    onClick={() => handleCopy(tokenVariable)}
                  >
                    {token}
                  </button>
                </td>
                <td>size {size}</td>
                <td>{pixelValues[size]}px</td>
                <td>
                  <div
                    ref={(el) => {
                      barRefs.current[size] = el
                    }}
                    className={styles.bar}
                    style={{ width: tokenVariable }}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </figure>
  )
}
