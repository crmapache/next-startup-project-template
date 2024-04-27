'use client'

import { useLocale } from 'next-intl'

import { Button } from '@core'

import { locales } from '../../../i18n'
import { LocaleSwitcherContainer } from './LocaleSwitcher.elements'

export const LocaleSwitcher = () => {
  const currentLocale = useLocale()

  return (
    <LocaleSwitcherContainer>
      {locales.map((locale) => (
        <Button
          variant={currentLocale === locale ? 'primary' : 'secondary'}
          key={locale}
          href="/"
          locale={locale}>
          {locale.toUpperCase()}
        </Button>
      ))}
    </LocaleSwitcherContainer>
  )
}
