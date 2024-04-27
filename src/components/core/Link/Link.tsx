import { createSharedPathnamesNavigation } from 'next-intl/navigation'

import { locales } from '../../../i18n'
import { LinkProps } from './Link.types'

export const Link = ({ locale, children, ...props }: LinkProps) => {
  const { Link: NextLink } = createSharedPathnamesNavigation({ locales })

  return (
    <NextLink {...props} locale={locale}>
      {children}
    </NextLink>
  )
}
