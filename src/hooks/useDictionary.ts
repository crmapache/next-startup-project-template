import { useContext } from 'react'

import { DictionaryContext } from '@providers'

export const useDictionary = (key: string) => {
  const dictionary = useContext(DictionaryContext)

  if (!dictionary[key]) throw new Error('Wrong dictionary key provided!')

  return dictionary[key]
}
