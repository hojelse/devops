import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { people } from '../../public/data'

export default function Talent({ people }) {
  return (
    <>
      <Head>
        <title>Our Creative Talent</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Our Creative Talents
          </h1>
          <ul>
            {
              Object.keys(people).map(person_id => {
                let person = people[person_id]
                return <li key={person_id}>
                  <Link href={`/talent/${person_id}`}><a>{person.name}</a></Link>
                </li>
              })
            }
          </ul>
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
