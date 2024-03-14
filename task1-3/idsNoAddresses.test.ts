import { idsNoAddresses } from './idsNoAddresses'

describe('TASK 3 - idsNoAddresses', () => {
  it('should properly extract ids for missing addresses', () => {
    const output = idsNoAddresses({
      admin_init: {
        accounts: [
          { id: 'admin_id', signer: true },
          { id: 'program_id', address: 'staking_program_id' },
          { id: 'locked_token_mint_id', address: 'locked_token_mint_id' },
          { id: 'reward_token_mint_id', address: 'reward_token_mint_id' },
          { id: 'system_program_id' }
        ]
      }
    })

    expect(output).toEqual(['admin_id', 'system_program_id'])
  })
})
