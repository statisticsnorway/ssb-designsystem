import { describe, expect, it } from 'vitest'
import { Button, usePagination } from './index'

describe('exports', () => {
  it('exports Button', () => {
    expect(Button).toBeDefined()
  })

  it('exports utilities', () => {
    expect(usePagination).toBeTypeOf('function')
  })
})
