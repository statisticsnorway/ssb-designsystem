import { useEffect, useRef, useState } from 'react'
import styles from './Color.module.css'
import { Checkbox, Heading } from '@statisticsnorway/design-react'

const toUpper = (str: string) => str.replace(/\b./g, (m) => m.toUpperCase())

const COLORS = ['primary', 'secondary', 'magic', 'neutral', 'info', 'success', 'warning', 'danger'] as const

const GROUPS = [
  ['background', ['default', 'tinted']],
  ['surface', ['default', 'tinted', 'hover', 'active']],
  ['border', ['subtle', 'default', 'strong']],
  ['text', ['subtle', 'default']],
  ['base', ['default', 'hover', 'active', 'contrast-subtle', 'contrast-default']],
] as const

const toHex = (color: string) => {
  const channels = color
    .match(/[\d.]+/g)
    ?.slice(0, 3)
    .map(Number)
  if (channels?.length !== 3) return color
  return `#${channels.map((channel) => Math.round(channel).toString(16).padStart(2, '0')).join('')}`
}

const COPIED_LABEL = 'Kopiert!'

export const ColorTokenList = () => {
  const [copiedToken, setCopiedToken] = useState<string | null>(null)
  const [showColorCodes, setShowColorCodes] = useState(false)
  const [hexByToken, setHexByToken] = useState<Record<string, string>>({})
  const colorTokenListRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateHexValues = () => {
      const root = colorTokenListRef.current
      if (!root) return

      const values = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-color-token]')).map((button) => [
        button.dataset.colorToken!,
        toHex(getComputedStyle(button).backgroundColor),
      ])
      setHexByToken(Object.fromEntries(values))
    }

    updateHexValues()
    const observer = new MutationObserver(updateHexValues)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-color-scheme'],
    })

    return () => observer.disconnect()
  }, [])

  const handleCopy = async (token: string) => {
    await navigator.clipboard.writeText(token)
    setCopiedToken(token)
    setTimeout(() => {
      setCopiedToken((current) => (current === token ? null : current))
    }, 1500)
  }
  return (
    <div className={styles.colorTokenList} ref={colorTokenListRef}>
      <div className={styles.colorHeader}>
        <Heading level={2} data-size='lg'>
          Fargepalett
        </Heading>
        <Checkbox
          label='Vis fargekoder'
          checked={showColorCodes}
          value='value'
          onChange={(event) => setShowColorCodes(event.target.checked)}
        />
      </div>
      {COLORS.map((color) => (
        <section key={color} className={styles.colorSection}>
          <Heading level={3} data-size='md'>
            {toUpper(color)}
          </Heading>
          {GROUPS.map(([group, variants]) => (
            <div key={group} className={styles.group}>
              <span className={styles.groupLabel}>{toUpper(group)}</span>
              <div className={styles.groupContent}>
                <div className={styles.bar}>
                  {variants.map((variant) => {
                    const colorPrefix = color === 'primary' ? '' : `${color}-`
                    const token = `var(--ds-color-${colorPrefix}${group}-${variant})`
                    const tokenName = `${color}-${group}-${variant}`

                    return (
                      <button
                        className={styles.segment}
                        key={`${group}-${variant}`}
                        type='button'
                        aria-label={`Kopier ${token}`}
                        data-tooltip={copiedToken === token ? COPIED_LABEL : token}
                        data-color-token={tokenName}
                        onClick={() => handleCopy(token)}
                        style={{ background: token }}
                      />
                    )
                  })}
                </div>
                <div className={styles.labels}>
                  {variants.map((variant) => {
                    const tokenName = `${color}-${group}-${variant}`

                    return (
                      <div key={variant} className={styles.label}>
                        <span className={styles.variant}>{variant}</span>
                        {showColorCodes && <span className={styles.hex}>{hexByToken[tokenName]}</span>}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          ))}
        </section>
      ))}
    </div>
  )
}
