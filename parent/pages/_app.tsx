import '../styles/globals.css';
import type { AppProps } from 'next/app';
import styles from '../styles/MyApp.module.css';

import Header from '../components//Header';
import Footer from '../components//Footer';
import MainView from '../components//MainView';
import Nav from '../components//Nav';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <div>
        <Header />
        <Nav />
      </div>
      <div>
        <MainView>
          <Component {...pageProps} />
        </MainView>
      </div>
      <div className={styles.footercontainer}>
        <Footer />
      </div>
    </div>
  )
}

export default MyApp
