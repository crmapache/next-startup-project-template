import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

export const i18n = {
  defaultLocale: 'es',
  locales: ['es', 'en'],
}

export type Locale = (typeof i18n)['locales'][number]

export default getRequestConfig(async ({ locale }) => {
  if (!i18n.locales.includes(locale as any)) notFound()

  return {
    messages: (await import(`./src/messages/${locale}.json`)).default,
  }
})
