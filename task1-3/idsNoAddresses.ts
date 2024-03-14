import type { Instructions } from './types'

export function idsNoAddresses (instructions: Instructions): string[] {
  return Object.values(instructions).flatMap(instruction =>
    instruction.accounts
      .filter(({ address }) => !address)
      .map(({ id }) => id)
  )
}

// {
//   admin_init: {
//     accounts: [
//       { id: 'admin_id', signer: true },
//       { id: 'program_id', address: 'staking_program_id' },
//       { id: 'locked_token_mint_id', address: 'locked_token_mint_id' },
//       { id: 'reward_token_mint_id', address: 'reward_token_mint_id' },
//       { id: 'system_program_id', address: 'system_program_id' }
//     ]
//   }
// }
