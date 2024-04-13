import styles from './LoadingSpinner.module.css'; 

const LoadingSpinner = () => {
    return (
      <div className={styles.loadingSpinnerWrapper}>
        <div className={styles.loadingSpinner}></div>
      </div>
    );
};

export default LoadingSpinner;