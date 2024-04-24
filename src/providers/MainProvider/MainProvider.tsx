'use client'

import { QueryClient, QueryClientProvider } from 'react-query'

import { DictionaryProvider } from '../DictionaryProvider'
import { ThemeProvider } from '../ThemeProvider'
import { MainProviderProps } from './MainProvider.types'

export const MainProvider = ({ children, dictionary }: MainProviderProps) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <DictionaryProvider dictionary={dictionary}>
        <ThemeProvider>{children}</ThemeProvider>
      </DictionaryProvider>
    </QueryClientProvider>
  )
}
