import type { NextPage } from 'next';
import styles from '../styles/Header.module.css';

const Header: NextPage = () => {
  return (
    <header className={styles.container}>
      <div className={styles.heading}>Parent app header</div>
    </header>
  );
};

export default Header;
