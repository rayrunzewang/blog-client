import styles from './layout.module.css';

const Layout = ({ children, username, email, contact, address }) => {
  return (
    <div>
      <div className={styles.infoContainer}>
        <p className={styles.infoTitle}>Username</p>
        {username}
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.infoTitle}>Email</p>
        {email}
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.infoTitle}>Contact</p>
        {contact}
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.infoTitle}>Address</p>
        {address}
      </div>
    </div>
  );
}

export default Layout;