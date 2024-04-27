import { unstable_setRequestLocale } from 'next-intl/server'

import { MainLayout } from '@features'
import { MainProvider } from '@providers'
import { RootLayoutProps } from '@types'

import { locales } from '../../i18n'

export default async function RootLayout({ children, params }: RootLayoutProps) {
  unstable_setRequestLocale(params.locale)

  return (
    <MainProvider>
      <MainLayout params={params}>{children}</MainLayout>
    </MainProvider>
  )
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}
