import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href={'/drinks'}>Drinks</Link>
      <Link href={'/steam'}>Steam</Link>
      <Link href={'/tiktok'}>Tiktok</Link>
    </main>
  )
}
