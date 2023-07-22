import { Metadata } from 'next'

import { SettingsPage } from '@features'

export const metadata: Metadata = {
  title: 'Settings Page',
}

export default function Settings() {
  return <SettingsPage />
}
