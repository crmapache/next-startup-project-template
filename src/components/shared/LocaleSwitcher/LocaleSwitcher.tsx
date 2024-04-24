'use client'

import { usePathname } from 'next/navigation'

import { Button } from '@core'

import { i18n } from '../../../../i18n.config'
import { LocaleSwitcherContainer } from './LocaleSwitcher.elements'

export const LocaleSwitcher = () => {
  const pathName = usePathname()

  const redirectedPathName = (locale: string): string => {
    if (!pathName) return '/'

    const pathnameIsMissingLocale = i18n.locales.every(
      (locale) => !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`,
    )

    if (pathnameIsMissingLocale) {
      if (locale === i18n.defaultLocale) return pathName
      return `/${locale}${pathName}`
    } else {
      if (locale === i18n.defaultLocale) {
        const segments = pathName.split('/')
        const isHome = segments.length === 2
        if (isHome) return '/'

        segments.splice(1, 1)
        return segments.join('/')
      }

      const segments = pathName.split('/')
      segments[1] = locale
      return segments.join('/')
    }
  }

  const isLocaleButtonActive = (locale: string): boolean => {
    if (!pathName) {
      return i18n.defaultLocale === locale
    }

    const pathnameIsMissingLocale = i18n.locales.every(
      (locale) => !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`,
    )

    if (pathnameIsMissingLocale) {
      return i18n.defaultLocale === locale
    }

    return pathName.split('/')[1] === locale
  }

  return (
    <LocaleSwitcherContainer>
      {i18n.locales.map((locale) => (
        <Button
          variant={isLocaleButtonActive(locale) ? 'primary' : 'secondary'}
          key={locale}
          href={redirectedPathName(locale)}>
          {locale.toUpperCase()}
        </Button>
      ))}
    </LocaleSwitcherContainer>
  )
}
