'use client'

import { useContext } from 'react'
import { useTranslations } from 'next-intl'
import { LocaleSwitcher } from '@shared'

import { Button, Typography } from '@core'
import { ThemeContext } from '@providers'

import { ButtonsContainer, HomePageContainer } from './HomePage.elements'

export const HomePage = () => {
  const { toggleTheme } = useContext(ThemeContext)
  const t = useTranslations('Home')

  return (
    <HomePageContainer>
      <Typography as="h1" variant="title">
        {t('title')}
      </Typography>

      <ButtonsContainer>
        <Button onClick={toggleTheme}>{t('toggle-theme-button')}</Button>

        <LocaleSwitcher />
      </ButtonsContainer>
    </HomePageContainer>
  )
}
