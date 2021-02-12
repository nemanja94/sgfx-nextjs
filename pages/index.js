import Head from 'next/head'

import styles from '../styles/Home.module.css'
import Carousel from '../components/Carousel'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SGFX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel></Carousel>
     
    </div>
  )
}
