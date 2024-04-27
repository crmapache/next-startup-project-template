import { useMessages, NextIntlClientProvider } from 'next-intl'

import { RootLayoutProps } from '@types'
import StyledComponentsRegistry from '@lib/registry'

import { locales } from '../../../../i18n'

import '@styles/globals.css'

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }))
}

export const MainLayout = ({ children, params: { locale } }: RootLayoutProps) => {
  const messages = useMessages()

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
