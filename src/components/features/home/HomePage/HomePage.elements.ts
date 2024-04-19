'use client'

import styled from 'styled-components'

export const HomePageContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background.primary};
  transition: all 0.2s;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const LocaleButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`
