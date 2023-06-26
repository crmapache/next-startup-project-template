import Link from 'next/link'

export const GeneralNavigation = () => {
  return (
    <nav style={{ display: 'flex', gap: '15px' }}>
      <Link href="/">Home</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/profile/settings">Settings</Link>
    </nav>
  )
}
