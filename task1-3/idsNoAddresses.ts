import type { Instructions } from './types'

export function idsNoAddresses (instructions: Instructions): string[] {
  return Object.values(instructions).flatMap(instruction =>
    instruction.accounts
      .filter(({ address }) => !address)
      .map(({ id }) => id)
  )
}
