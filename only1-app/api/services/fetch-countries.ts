import axios from 'axios'

interface Country {
  name: {
    common: string
  }
}

export const fetchCountries = async (name: string): Promise<string[]> => {
  if (!name) return []

  const { data } = await axios.get<Country[]>(`https://restcountries.com/v3.1/name/${name}`)

  return data?.map((country) => country.name.common) || []
}
