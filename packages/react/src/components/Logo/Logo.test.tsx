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

    const path = document.querySelector('path')
    expect(path).toHaveAttribute('fill', '#FFFFFF')
  })

  it('forwards svg props', () => {
    render(<Logo aria-label='SSB logo' data-testid='ssb-logo' className='custom-logo' />)

    const svg = document.querySelector('svg')
    expect(svg).toHaveAttribute('aria-label', 'SSB logo')
    expect(svg).toHaveAttribute('data-testid', 'ssb-logo')
    expect(svg).toHaveClass('custom-logo')
  })
})
