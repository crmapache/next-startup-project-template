export const i18n = {
  defaultLocale: 'es',
  locales: ['es', 'en'],
}

export type Locale = (typeof i18n)['locales'][number]
