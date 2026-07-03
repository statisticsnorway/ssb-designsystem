// @vitest-environment jsdom
import '@testing-library/jest-dom/vitest'
import { render } from '@testing-library/react'
import { Logo } from './Logo'

describe('Logo', () => {
  it('renders logo', () => {
    render(<Logo />)

    const svg = document.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('supports custom height', () => {
    render(<Logo height={50} />)

    const svg = document.querySelector('svg')
    expect(svg).toHaveAttribute('height', '50')
  })

  it('supports white variant', () => {
    render(<Logo variant='white' />)

    const svg = document.querySelector('svg')
    const path = document.querySelector('path')

    expect(path).toHaveAttribute('fill', 'currentColor')
    expect(svg).toHaveAttribute('color', '#FFFFFF')
  })

  it('forwards svg props', () => {
    render(<Logo aria-label='SSB logo' data-testid='ssb-logo' className='custom-logo' />)

    const svg = document.querySelector('svg')
    expect(svg).toHaveAttribute('aria-label', 'SSB logo')
    expect(svg).toHaveAttribute('data-testid', 'ssb-logo')
    expect(svg).toHaveClass('custom-logo')
  })

  it('is decorative by default', () => {
    render(<Logo />)

    const svg = document.querySelector('svg')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
    expect(svg).not.toHaveAttribute('role')
  })

  it('is announced when aria-label is set', () => {
    render(<Logo aria-label='Statistisk sentralbyrå' />)

    const svg = document.querySelector('svg')

    expect(svg).toHaveAttribute('role', 'img')
    expect(svg).not.toHaveAttribute('aria-hidden')
    expect(svg).toHaveAttribute('aria-label', 'Statistisk sentralbyrå')
  })
})
