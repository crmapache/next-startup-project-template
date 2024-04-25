import 'server-only'

import { Locale } from '../../i18n.config'

const dictionaries: Record<Locale, () => Promise<any>> = {
  en: () => import('../messages/en.json').then((module) => module.default),
  es: () => import('../messages/es.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
