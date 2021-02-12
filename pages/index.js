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
      <div className={styles.title}>
        <h1>Sve sto vam treba da svoj posao predstavite na profesionalan nacin</h1>
        <p>Najjace oruzje u marketingu, promovisite svoj posao kroz profesionalne show-real video prezentacije. Reklame, postovi za drustvene medije i baneri ce vam takodje trebati, a mi vam mozemo pomoci u tome</p>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.card_title}>
            <h1>Korporativni dizajn</h1>
          </div>
          <div className={styles.card_content}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend lacus et odio maximus ultrices. In hac habitasse platea dictumst. Vivamus ullamcorper rhoncus dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend lacus et odio maximus ultrices. In hac habitasse platea dictumst. Vivamus ullamcorper rhoncus dictum.</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card_title}>
            <h1>Korporativni dizajn</h1>
          </div>
          <div className={styles.card_content}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend lacus et odio maximus ultrices. In hac habitasse platea dictumst. Vivamus ullamcorper rhoncus dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend lacus et odio maximus ultrices. In hac habitasse platea dictumst. Vivamus ullamcorper rhoncus dictum.</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card_title}>
            <h1>Korporativni dizajn</h1>
          </div>
          <div className={styles.card_content}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend lacus et odio maximus ultrices. In hac habitasse platea dictumst. Vivamus ullamcorper rhoncus dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend lacus et odio maximus ultrices. In hac habitasse platea dictumst. Vivamus ullamcorper rhoncus dictum.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
