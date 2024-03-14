import { resolveAddress } from './resolveAddress'
import { type AddressesAndInstructions, type ResolvedInstructions } from './types'

export function instructions (input: AddressesAndInstructions): ResolvedInstructions {
  const { addresses, instructions } = input

  const resolvedInstructions: ResolvedInstructions = {}

  for (const key in instructions) {
    const instruction = instructions[key]

    const resolvedAccounts = instruction.accounts.map((account) => {
      if (account.address !== undefined) {
        return { ...account, address: resolveAddress(addresses, account.address) }
      }

      return account
    })

    resolvedInstructions[key] = { accounts: resolvedAccounts }
  }

  return resolvedInstructions
}
