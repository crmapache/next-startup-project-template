'use client'

import styled from 'styled-components'

export const BoxElement = styled.div<{ $sx: any; $style: any }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 0;
  width: 100%;

  ${({ $style }) => $style};
  ${({ $sx }) => $sx};
`
