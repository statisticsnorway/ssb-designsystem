import { Button } from './index'

describe('package root exports', () => {
  it('re-exports digdir components', () => {
    expect(Button).toBeDefined()
  })
})
