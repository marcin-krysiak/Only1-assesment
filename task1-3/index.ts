import { addresses } from './address'
import { instructions } from './instructions'
import { idsNoAddresses } from './idsNoAddresses'

// TASK 1
addresses({
  staking_program_id: '5XDdQrpNCD89LtrXDBk5qy4v1BW1zRCPyizTahpxDTcZ',
  system_program_id: '11111111111111111111111111111111',
  locked_token_mint_id: '3bRTivrVsitbmCTGtqwp7hxXPsybkjn4XLNtPsHqa3zR',
  reward_token_mint_id: { address: 'locked_token_min_id' }
})

// TASK 2
console.log('TASK 2', instructions({
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
}))

// TASK 3
console.log('TASK 3', idsNoAddresses({
  admin_init: {
    accounts: [
      { id: 'admin_id', signer: true },
      { id: 'program_id', address: 'staking_program_id' },
      { id: 'locked_token_mint_id', address: 'locked_token_mint_id' },
      { id: 'reward_token_mint_id', address: 'reward_token_mint_id' },
      { id: 'system_program_id' }
    ]
  }
}))
