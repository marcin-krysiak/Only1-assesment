import { type Addresses } from './address'
import { resolveAddress } from './resolveAddress'

interface Account {
  id: string
  signer?: true
  address?: keyof Addresses
}

type Instructions = Record<string, { accounts: Account[] }>

interface InstructionsInput {
  addresses: Addresses
  instructions: Instructions
}

type InstructionsOutput = Record<string, { accounts: Array<{
  id: string
  signer?: true
  address?: string
}> }>

export function instructions (input: InstructionsInput): InstructionsOutput {
  const { addresses, instructions } = input

  const resolvedInstructions: InstructionsOutput = {}

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
