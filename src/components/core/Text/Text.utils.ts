import { CSSProperties } from 'react'

import { stylesMap } from './Text.constants'
import { TextCustomStyleLiterals } from './Text.types'

export const prepareStyles = (styles: CSSProperties): CSSProperties => {
  const result: any = {}

  for (const styleKey in styles) {
    const alias = stylesMap[styleKey as TextCustomStyleLiterals]

    if (alias) {
      if (Array.isArray(alias)) {
        for (const aliasValue of alias) {
          result[aliasValue] = styles[styleKey as keyof CSSProperties]
        }
      } else {
        result[alias] = styles[styleKey as keyof CSSProperties]
      }
    } else {
      result[styleKey] = styles[styleKey as keyof CSSProperties]
    }
  }

  return result
}
