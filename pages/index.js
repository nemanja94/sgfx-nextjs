import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Home.module.css'
import Carousel from '../components/Carousel'

export default function Home() {
  return (
    <div className={styles.container}>
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
      <div className={styles.paralax}>
        <div className={styles.topBox}>
          <h1>Kontaktirajte nas</h1>
        </div>
        <div className={styles.banner}>
          <div className={styles.leftBanner}>
            <h1>TICKETING APP</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend lacus et odio maximus ultrices. In hac habitasse platea dictumst. Vivamus ullamcorper rhoncus dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend lacus et odio maximus ultrices. In hac habitasse platea dictumst. Vivamus ullamcorper rhoncus dictum.</p>
            <button>Vise</button>
          </div>
          <div className={styles.rightBanner}>
            <Image src="/images/2.jpg" width={230} height={230}></Image>
            <h1>Digital Ticketing System</h1>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.footerLogo}>
          <h1>SGFX</h1>
        </div>
        <div className={styles.footer1}>
          <Link href='/'><p>Naslovna</p></Link>
          <Link href='/about'><p>Usluge</p></Link>
          <Link href='/services'><p>Ticketing App</p></Link>
        </div>
        <div className={styles.footer2}>
          <p>www.sgfx.rs</p>
          <p>office@sgfx.rs</p>
         <p>011 1234567</p>
        </div>
        <div className={styles.footer3}>
          <p>SGFX Media d.o.o.</p>
          <p>Neka Adresa 14, 11550 Lazarevac</p>
          <p>PIB: 123456789 MB: 789665423</p>
        </div>
      </footer>
    </div>
  )
}
