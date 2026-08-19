import { useState } from 'react'
import styles from './ColorTokenTable.module.css'

const GROUPS = ['primary', 'secondary', 'magic', 'neutral', 'info', 'success', 'warning', 'danger'] as const

const ROLES = [
  'background-default',
  'background-tinted',
  'surface-default',
  'surface-tinted',
  'surface-hover',
  'surface-active',
  'border-subtle',
  'border-default',
  'border-strong',
  'text-subtle',
  'text-default',
  'base-default',
  'base-hover',
  'base-active',
  'base-contrast-subtle',
  'base-contrast-default',
] as const

const COPIED_LABEL = 'Kopiert!'

export const ColorTokenTable = () => {
  const [copiedToken, setCopiedToken] = useState<string | null>(null)

  const handleCopy = async (token: string) => {
    await navigator.clipboard.writeText(token)
    setCopiedToken(token)
    setTimeout(() => {
      setCopiedToken((current) => (current === token ? null : current))
    }, 1500)
  }

  return (
    <div className={styles.wrapper}>
      {GROUPS.map((group) => (
        <section key={group}>
          <h3 className={styles.groupTitle}>{group}</h3>
          <div className={styles.swatches}>
            {ROLES.map((role) => {
              const token = `--ds-color-${group}-${role}`
              return (
                <button
                  key={token}
                  type='button'
                  className={styles.swatch}
                  style={{ backgroundColor: `var(${token})` }}
                  aria-label={`Kopier ${token}`}
                  title={token}
                  onClick={() => handleCopy(token)}
                >
                  <span className={styles.label}>{copiedToken === token ? COPIED_LABEL : role}</span>
                </button>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
