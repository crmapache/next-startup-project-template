import { CSSProperties } from 'react'

import { TextVariant } from '@types'

const commonVariantStyles = {
  fontFamily: '"Roboto", sans-serif;',
  fontWeight: '400',
  textTransform: 'none' as CSSProperties['textTransform'],
  letterSpacing: 'normal',
}

export const textVariants: Record<string, TextVariant> = {
  body: {
    ...commonVariantStyles,
    fontSize: '16px',
    lineHeight: '20px',
  },
  title: {
    ...commonVariantStyles,
    fontSize: '20px',
    lineHeight: '24px',
    fontWeight: '700',
  },
}
