import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { people } from '../../public/data'

export default function HatchIdea({ people }) {
  const router = useRouter()
  const { person: person_id } = router.query

  return (
    <>
      <Head>
        <title>Hatch your idea!</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Work with { (person_id) ? person_id : 'us' } to hatch your idea!
          </h1>
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
