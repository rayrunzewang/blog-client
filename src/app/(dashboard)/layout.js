'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './layout.module.css';
import { useRouter } from 'next/navigation';

const DashboardLayout = ({
  children
}) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {

    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? JSON.parse(storedTheme) : false;
  }

  })
  const router = useRouter();
  const handleLogoClick = () => {
    router.push('/6618a20d992f5c5a8d4ee93d');
  }

  const handleThemeChange = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme', JSON.stringify(newTheme));
  }

  return (
    <section className={styles.dashboard} data-theme={isDarkMode && 'dark'}>
      <header className={styles.header}>
        <div className={styles.logoWrapper}>
          <span className={styles.logo} onClick={handleLogoClick} >Learning Hub</span>
        </div>
        <nav className={styles.navBar}>
          <ul className={styles.navUL}>
            <li>
              <span className={styles.themeButton} onClick={handleThemeChange}>{isDarkMode ? 'dark mode' : 'light mode'}</span>
            </li>
            <li>
              <Link
                className={styles.link}
                href={'/setting/profile'}
              >Setting</Link>
            </li>
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
