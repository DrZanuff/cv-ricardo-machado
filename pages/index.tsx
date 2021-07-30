import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DrZanuff</title>
        <meta name="CV" content="Ricardo Machado CV" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.menu}></div>
      <div className={styles.content}>
        <h1>Hello</h1>
        <p>Tudo bem pessoa??</p>
      </div>
    </div>
  )
}
