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
})
