'use client'

import styled from 'styled-components'
import { Interpolation } from 'styled-components/dist/types'

export const TypographyContainer = styled.div<{ $variantStyles: Interpolation<object> }>`
  ${({ $variantStyles }) => $variantStyles};
`
