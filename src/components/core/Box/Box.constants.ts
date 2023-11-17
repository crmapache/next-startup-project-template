import { CSSProp } from 'styled-components'

import { CustomStyleLiterals } from '@core/Box/Box.types'

export const stylesMap: Record<CustomStyleLiterals, CSSProp | CSSProp[]> = {
  bgcolor: 'backgroundColor',
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
  h: 'height',
  mh: 'minHeight',
  mxh: 'maxHeight',
  w: 'width',
  mw: 'minWidth',
  mxw: 'maxWidth',
}
