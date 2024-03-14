import { instructions } from './instructions'

describe('TASK 2 - instructions', () => {
  it('should properly resolve instructions', () => {
    const output = instructions({
      addresses: {
        staking_program_id: '5XDdQrpNCD89LtrXDBk5qy4v1BW1zRCPyizTahpxDTcZ',
        locked_token_mint_id: '3bRTivrVsitbmCTGtqwp7hxXPsybkjn4XLNtPsHqa3zR',
        reward_token_mint_id: { address: 'locked_token_mint_id' },
        system_program_id: '11111111111111111111111111111111'
      },
      instructions: {
        admin_init: {
          accounts: [
            { id: 'admin_id', signer: true },
            { id: 'program_id', address: 'staking_program_id' },
            { id: 'locked_token_mint_id', address: 'locked_token_mint_id' },
            { id: 'reward_token_mint_id', address: 'reward_token_mint_id' },
            { id: 'system_program_id', address: 'system_program_id' }
          ]
        }
      }
    })

    expect(output).toEqual({
      admin_init: {
        accounts: [
          { id: 'admin_id', signer: true },
          { id: 'program_id', address: '5XDdQrpNCD89LtrXDBk5qy4v1BW1zRCPyizTahpxDTcZ' },
          { id: 'locked_token_mint_id', address: '3bRTivrVsitbmCTGtqwp7hxXPsybkjn4XLNtPsHqa3zR' },
          { id: 'reward_token_mint_id', address: '3bRTivrVsitbmCTGtqwp7hxXPsybkjn4XLNtPsHqa3zR' },
          { id: 'system_program_id', address: '11111111111111111111111111111111' }
        ]
      }
    })
  })
})
