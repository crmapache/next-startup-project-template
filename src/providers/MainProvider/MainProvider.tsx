'use client'

import { QueryClient, QueryClientProvider } from 'react-query'

import { MainProviderProps } from './MainProvider.types'

export const MainProvider = ({ children }: MainProviderProps) => {
  const queryClient = new QueryClient()

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
