import Link from 'next/link';
import styles from './layout.module.css';

const DashboardLayout = ({
  children
}) => {
  return (
    <section className={styles.dashboard}>
      <header className={styles.header}>
        <div>
          <span className={styles.logo}>Learning Hub</span>
        </div>
        <nav className={styles.navBar}>
          <ul className={styles.ul}>
            <li>theme</li>
            <li><Link className={styles.link} href={'#'}>Profile</Link></li>
            <li><Link className={styles.link} href={'/setting'}>Setting</Link></li>
          </ul>
        </nav>
      </header>
      <div>
        {children}
      </div>
    </section>
  );
}
export default DashboardLayout;
