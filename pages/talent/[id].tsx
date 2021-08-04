import Head from "next/head"
import styles from "../../styles/Home.module.css"
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next"
import Link from 'next/link'
import {people} from '../../public/data';

export default function Person({ person }) {  
  return (
    <div className={styles.container}>
      <Head>
        <title>{person.name}</title>
      </Head>
      <main className={styles.main}>
        <img src={person.image} width="300px" />
        <h1 className={styles.title}>{person.name}</h1>
        <ul>
          {
            person.skills.map(skill => {
              return <li key={skill}>{skill}</li>
            })
          }
        </ul>
        <p className={styles.description}>{person.short_about}</p>
        <Link href={person.portfolio_link}>
          <button>{person.portfolio}</button>
        </Link>
        <Link
          href={{
            pathname: '/hatch-idea',
            query: { person: person.person_id },
          }}
        >
          <button>Let's hatch your idea!</button>
        </Link>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const person = people[`${params.id}`]

  return {
    props: { person: person },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = people

  const paths = Object.keys(data).map((person_id) => {
    return { params: { id: person_id } }
  })

  return {
    paths,
    fallback: false,
  }
}
