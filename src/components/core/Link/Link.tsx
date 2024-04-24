import NextLink from 'next/link'

import { i18n } from '../../../../i18n.config'
import { LinkProps } from './Link.types'

export const Link = ({ href, lang, ...props }: LinkProps) => {
  const isDefaultLang = lang === i18n.defaultLocale
  const path = isDefaultLang ? href : `/${lang}${href}`

  return <NextLink href={path} {...props} />
}
