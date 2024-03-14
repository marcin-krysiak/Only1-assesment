import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CountriesAutocomplete } from '@/app/ui/countries-autocomplete'
import React from 'react'

export default function Home () {
  return (
      <main>
        <div className="flex justify-center items-center w-full h-screen p-24 border-box bg-slate-800">
          <Card className="w-full h-full bg-sky-500">
            <CardHeader className="p-10">
              <CardTitle className="text-center">Autocomplete input test</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center items-center">
              <CountriesAutocomplete />
            </CardContent>
          </Card>
        </div>
      </main>
  )
}
