import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Creative Nest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Creative Nest
        </h1>
        <p className={styles.description}>Hatching Creative Talent</p>
        <Link href="/talent">Our creative talents</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/hatch-idea">Let's hatch your idea!</Link>
      </main>
    </div>
  )
}
