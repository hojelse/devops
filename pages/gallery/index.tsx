import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { people } from '../../public/data'

export default function Gallery({ people }) {
  return (
    <>
      <Head>
        <title>Our gallery</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Our gallery
          </h1>
          <p className={styles.description}>Projects that have taken flight</p>
        </main>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: { people: people },
  }
}
