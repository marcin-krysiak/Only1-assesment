import { instructions } from './instructions'
import { resolveAddress } from './resolveAddress'

describe('resolveAddress', () => {
  const addresses = {
    staking_program_id: '5XDdQrpNCD89LtrXDBk5qy4v1BW1zRCPyizTahpxDTcZ',
    locked_token_mint_id: '3bRTivrVsitbmCTGtqwp7hxXPsybkjn4XLNtPsHqa3zR',
    reward_token_mint_id: { address: 'locked_token_mint_id' },
    system_program_id: '11111111111111111111111111111111'
  }

  it('should properly resolve address if string', () => {
    const output = resolveAddress(addresses, 'staking_program_id')

    expect(output).toEqual('5XDdQrpNCD89LtrXDBk5qy4v1BW1zRCPyizTahpxDTcZ')
  })

  it('should properly resolve address if key', () => {
    const output = resolveAddress(addresses, 'reward_token_mint_id')

    expect(output).toEqual('3bRTivrVsitbmCTGtqwp7hxXPsybkjn4XLNtPsHqa3zR')
  })
})
