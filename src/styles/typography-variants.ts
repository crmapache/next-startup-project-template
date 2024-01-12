'use client'

import { css } from 'styled-components'
import { Interpolation } from 'styled-components/dist/types'

const commonVariantStyles = css`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  text-transform: none;
  letter-spacing: normal;
  transition: all 0.2s;
  color: #2f2f2f;
`

export const typographyVariants: Record<string, Interpolation<object>[]> = {
  title: css`
    ${commonVariantStyles};
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;

    @media (max-width: 1440px) {
      font-size: 18px;
      line-height: 22px;
    }
  `,
  body: css`
    ${commonVariantStyles};
    font-size: 16px;
    line-height: 20px;
  `,
}
