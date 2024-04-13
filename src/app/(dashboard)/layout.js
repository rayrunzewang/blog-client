'use client'
import Link from 'next/link';
import styles from './layout.module.css';
import { useRouter } from 'next/navigation';

const DashboardLayout = ({
  children
}) => {
  const router = useRouter()
  const handleLogoClick = () => {
    router.push('/6618a20d992f5c5a8d4ee93d')
  }
  
  return (
    <section className={styles.dashboard}>
      <header className={styles.header}>
        <div>
          <span className={styles.logo} onClick={handleLogoClick} >Learning Hub</span>
        </div>
        <nav className={styles.navBar}>
          <ul className={styles.ul}>
            <li>theme</li>
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
