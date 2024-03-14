import { useQuery } from '@tanstack/react-query'
import { fetchCountries } from '@/api/services/fetch-countries'

export const useGetCountries = (name: string) => {
  return useQuery({
    queryKey: ['countries', name],
    queryFn: async () => await fetchCountries(name)
  })
}
