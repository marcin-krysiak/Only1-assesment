export type Addresses = Record<string, string | { address: keyof Addresses }>

export interface Account {
  id: string
  signer?: true
  address?: keyof Addresses
}

export type Instructions = Record<string, { accounts: Account[] }>

export interface AddressesAndInstructions {
  addresses: Addresses
  instructions: Instructions
}

export type ResolvedInstructions = Record<string, { accounts: Array<{
  id: string
  signer?: true
  address?: string
}> }>
