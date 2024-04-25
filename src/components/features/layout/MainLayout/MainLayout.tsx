import { useMessages, NextIntlClientProvider } from 'next-intl'

import { RootLayoutProps } from '@types'
import StyledComponentsRegistry from '@lib/registry'

import { i18n } from '../../../../../i18n.config'

import '@styles/globals.css'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
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
