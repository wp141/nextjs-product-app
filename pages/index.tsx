import Head from 'next/head'
import styles from '../styles/Home.module.css'
import LandingNav from '../components/LandingNav'
import Image from 'next/image'
import mainImage from '../public/home_main.png'

export default function Home() {
  return (
    <div className={styles.home}>
      <LandingNav/>
      <div className={styles.home_1}>
        <div className={styles.home_1_text}>
          <h1> 
            Your Product.   Right Here.
          </h1>
          <br/>
          <h1>💼</h1>
        </div>
      </div>
      {/* <Image className={styles.home_1_img} src={mainImage} alt="main promo image"/> */}
    </div>
  )
}
