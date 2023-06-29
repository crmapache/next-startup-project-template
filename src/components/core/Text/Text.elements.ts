'use client'

import styled from 'styled-components'

export const TextContainer = styled.div<{ $sx: any; $styles: any; $variantStyles: any }>`
  color: #2f2f2f;

  ${({ $variantStyles }) => $variantStyles};
  ${({ $styles }) => $styles};
  ${({ $sx }) => $sx};
`
