import { describe, expect, it } from 'vitest'

import { stripIndent } from './strings'

describe('string utilities', () => {
  describe('stripIndent()', () => {
    it('strips indentation from given string', () => {
      const stripped = stripIndent`
        {
          // code block
        }
      `
      expect(stripped).toEqual('{\n  // code block\n}\n')
    })

    it('keeps strings without indentation intact', () => {
      expect(stripIndent`not indented`).toEqual('not indented')
    })
  })
})
