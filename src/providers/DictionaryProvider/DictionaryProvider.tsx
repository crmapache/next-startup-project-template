'use client'

import { createContext } from 'react'

import { DictionaryProviderProps } from './DictionaryProvider.types'

export const DictionaryContext = createContext<any>({})

export const DictionaryProvider = ({ children, dictionary }: DictionaryProviderProps) => {
  return <DictionaryContext.Provider value={dictionary}>{children}</DictionaryContext.Provider>
}
