import { getTranslations } from 'next-intl/server'

import { HomePage } from '@features'
import { GenerateMetadataProps } from '@types'

export async function generateMetadata({ params: { locale } }: GenerateMetadataProps) {
  const t = await getTranslations({ locale, namespace: 'Home' })

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
  }
}

export default function Page() {
  return <HomePage />
}
