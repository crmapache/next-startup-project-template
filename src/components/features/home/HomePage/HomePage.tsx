'use client'

import { useContext } from 'react'
import { LocaleSwitcher } from '@shared'

import { Button, Typography } from '@core'
import { useDictionary } from '@hooks'
import { ThemeContext } from '@providers'

import { ButtonsContainer, HomePageContainer } from './HomePage.elements'

export const HomePage = () => {
  const { toggleTheme } = useContext(ThemeContext)
  const d = useDictionary('Home')

  return (
    <HomePageContainer>
      <Typography as="h1" variant="title">
        {d.title}
      </Typography>

      <ButtonsContainer>
        <Button onClick={toggleTheme}>{d.toggleThemeButton}</Button>

        <LocaleSwitcher />
      </ButtonsContainer>
    </HomePageContainer>
  )
}
