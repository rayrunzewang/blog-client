import styles from './LoadingText.module.css';

export const LoadingText = ({ number }) => {
  return (
    <div className={styles.loadingContainer}>
      {Array(number).fill(0).map((_, index) => (
        <div key={index} className={styles.loadingItem} />
      ))}
    </div>
  );
}

