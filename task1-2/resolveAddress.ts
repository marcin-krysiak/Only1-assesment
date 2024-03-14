import type { Addresses } from './address'

export function resolveAddress (addresses: Addresses, address: keyof Addresses): string {
  const addressValue = addresses[address]

  if (typeof addressValue === 'string') {
    return addressValue
  }

  // else
  return resolveAddress(addresses, addressValue.address)
}
