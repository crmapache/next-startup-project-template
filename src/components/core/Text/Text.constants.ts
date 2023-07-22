import { CSSProp } from 'styled-components'

import { TextCustomStyleLiterals } from './Text.types'

export const stylesMap: Record<TextCustomStyleLiterals, CSSProp | CSSProp[]> = {
  align: 'textAlign',
  m: 'margin',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mr: 'marginRight',
  mt: 'marginTop',
  mx: ['marginLeft', 'marginRight'],
  my: ['marginTop', 'marginBottom'],
  p: 'padding',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  pr: 'paddingRight',
  pt: 'paddingTop',
  px: ['paddingLeft', 'paddingRight'],
  py: ['paddingTop', 'paddingBottom'],
}
