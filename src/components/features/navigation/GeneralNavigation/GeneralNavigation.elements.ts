'use client'

import styled from 'styled-components'

export const GeneralNavigationContainer = styled.nav`
  display: flex;
  gap: 16px;
  padding: 20px;
  justify-content: center;
  background-color: #222;
  color: #fff;

  & > a {
    &:hover {
      color: aqua;
    }
  }
`
