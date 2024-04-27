import 'server-only'

import { Locale } from '../i18n'

const dictionaries: Record<Locale, () => Promise<any>> = {
  en: () => import('../messages/en.json').then((module) => module.default),
  es: () => import('../messages/es.json').then((module) => module.default),
}
