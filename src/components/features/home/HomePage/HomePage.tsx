'use client'

import { useContext } from 'react'

import { Button, Typography } from '@core'
import { ThemeContext } from '@providers'

import { ButtonsContainer, HomePageContainer, LocaleButtonsContainer } from './HomePage.elements'

export const HomePage = () => {
  const { toggleTheme } = useContext(ThemeContext)

  return (
    <HomePageContainer>
      <Typography as="h1" variant="title">
        Next Startup Project Template
      </Typography>

      <ButtonsContainer>
        <Button onClick={toggleTheme}>Toggle Theme</Button>

        <LocaleButtonsContainer>
          <Button variant="primary">ES</Button>
          <Button variant="secondary">EN</Button>
        </LocaleButtonsContainer>
      </ButtonsContainer>
    </HomePageContainer>
  )
}
