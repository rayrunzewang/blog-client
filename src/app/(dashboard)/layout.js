import styles from './layout.module.css';
import Link from 'next/link'

const DashboardLayout = ({
  children
}) => {
  return (
    <section className={styles.learningSection}>
      <header className={styles.header}>
        <div>
          <span className={styles.logo}>Learning Hub</span>
        </div>
        <nav className={styles.navBar}>
          <ul className={styles.ul}>
            <li className={styles.li}>theme</li>
            <li className={styles.li}><Link className={styles.link} href={'#'}>Profile</Link></li>
            <li className={styles.li}><Link className={styles.link} href={'#'}>Setting</Link></li>
          </ul>
        </nav>
      </header>
      {children}
    </section>
  );
}

export default DashboardLayout;
