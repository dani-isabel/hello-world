import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello world</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello World
        </h1>

        <p className={styles.description}>
          I'm learning Next.js
        </p>
        <img src="https://image.freepik.com/vector-gratis/salvar-concepto-planeta_23-2148505378.jpg" alt="world"/>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
