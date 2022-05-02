import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Parent app heading</h1>
      <p>Parent app content. We could have assigned a micro app to this home page.</p>
    </div>
  )
}

export default Home
