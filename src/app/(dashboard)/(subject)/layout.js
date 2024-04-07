import styles from './layout.module.css';

const SubjectLayout = ({ children }) => {
  return (
    <div>
      <div className={styles.tagManager}>
        <ul className={styles.ul}>
          <li className={styles.li}>javascript</li>
          <li className={styles.li}>node.js</li>
          <li className={styles.li}>react.js</li>
          <li className={styles.li}>next.js</li>
          <li className={styles.li}>MongoDB</li>
          <li className={styles.li}>GraphQL</li>
          <li className={styles.li}>Java</li>
        </ul>
      </div>
      {children}
    </div>
  );
}

export default SubjectLayout;