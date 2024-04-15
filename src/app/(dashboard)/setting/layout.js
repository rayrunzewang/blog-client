'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './layout.module.css'

const layout = ({ children }) => {
  const pathname = usePathname()

  return (
    <div className={styles.settingSection}>
      <h2 className={styles.title}>setting</h2>
      <ul className={styles.settingUL}>
        <li className={`${styles.settingList} ${pathname === '/setting/profile' ? `${styles.active}` : ''}`}
        ><Link href={'/setting/profile'}>Profile</Link></li>
        <li className={`${styles.settingList} ${pathname === '/setting/security' ? `${styles.active}` : ''}`}><Link href={'/setting/security'}>Security</Link></li>
        <li className={`${styles.settingList} ${pathname === '/setting/preference' ? `${styles.active}` : ''}`}><Link href={'/setting/preference'}>Preference</Link></li>
      </ul>
      <div className={styles.settingPanel}>
        {children}
      </div>
    </div>
  )
}

export default layout