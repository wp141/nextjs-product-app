import Head from 'next/head'
import styles from '../styles/Features.module.css'
import LandingNav from '../components/LandingNav'

export default function Features() {
  return (
    <div>
       <LandingNav/>
       <div className={styles.features_content}>
          <h2>Features</h2><br/>
          <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</b>
       </div>
    </div>
  )
}
