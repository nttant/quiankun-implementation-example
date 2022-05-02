import type { NextPage } from 'next';
import styles from '../styles/Footer.module.css';

const Footer: NextPage = () => {
  return (
    <footer className={styles.container}>
      <div>Parent app footer</div>
    </footer>
  );
};

export default Footer;
