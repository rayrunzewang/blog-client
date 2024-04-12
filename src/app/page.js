import styles from './page.module.css';
import Link from 'next/link';

const page = () => {
  return (
    <div className={styles.homePage}>
      <div>
        <p className={styles.paragraph}> mock: random qoute API</p>
      </div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Learning Hub</h1>
          <h2 className={styles.subTitle}>"Study on, I'll handle the reminders."</h2>
          <Link className={styles.link} href='/6618a20d992f5c5a8d4ee93d'>start now</Link>
        </div>
      </div>
    </div>
  );
}

export default page;