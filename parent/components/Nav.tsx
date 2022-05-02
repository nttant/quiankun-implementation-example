import styles from '../styles/Nav.module.css';

export default function Nav() {
  return (
    <nav>
      <ul className={styles.menu}>
        <li>
          {
            // eslint-disable-next-line @next/next/no-html-link-for-pages
            <a href="/">Home</a>
          }
        </li>
        <li>
          {
            // eslint-disable-next-line @next/next/no-html-link-for-pages
            <a href="/page-app-1">App 1</a>
          }
        </li>
        <li>
          {
            // eslint-disable-next-line @next/next/no-html-link-for-pages
            <a href="/page-app-2">App 2</a>
          }
        </li>
      </ul>
    </nav>
  );
}
