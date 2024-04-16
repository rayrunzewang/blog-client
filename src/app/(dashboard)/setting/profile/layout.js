import styles from './layout.module.css';

const Layout = ({ username, email, contact, address }) => {
  return (
    <div>
      <div className={styles.infoContainer}>
        <p>Username</p>
        {username}
      </div>
      <div className={styles.infoContainer}>
        <p>Email</p>
        {email}
      </div>
      <div className={styles.infoContainer}>
        <p>Contact</p>
        {contact}
      </div>
      <div className={styles.infoContainer}>
        <p>Address</p>
        {address}
      </div>

    </div>
  )
}

export default Layout;