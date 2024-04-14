'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import LoadingSpinner from '@/components/loadingUi/LoadingSpinner';
import styles from './page.module.css';

const page = () => {
  const router = useRouter()
  const [isLoginDisplay, setIsLoginDisplay] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginLoading, setIsLoginLoading] = useState(false)
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoginLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('login failed');
      }

      const data = await response.json();

      setUsername('');
      setPassword('');
      setError('');
      setIsLoginLoading(false);
      router.push('/6618a20d992f5c5a8d4ee93d')
    } catch (error) {
      setError(error.message);
      console.error('login failed', error);
    }
  };

  const handleCkick = () => {
    setIsLoginDisplay(!isLoginDisplay);
  }

  return (
    <div className={styles.homePage}>
      <div>
        <p className={styles.paragraph}> mock: random qoute API</p>
      </div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Learning Hub</h1>
          <h2 className={styles.subTitle}>"Study on, I'll handle the reminders."</h2>
          <button className={styles.button} onClick={handleCkick} >start now</button>
        </div>
      </div>
      {isLoginDisplay && (
        <div className={styles.loginContainer
        }>
          <form className={styles.form} onSubmit={handleSubmit}>
            {error && <p>error</p>}
            <label
              className={styles.label}
              htmlFor="username"
            >Username:</label>
            <input
              className={styles.input}
              type="text"
              id="username"
              name="username"
              autoComplete='off'
              onChange={(e) => setUsername(e.target.value)}
            />
            <label
              className={styles.label}
              htmlFor="password"
            >Password:</label>
            <input
              className={styles.input}
              type="password"
              id="password"
              name="password"
              autoComplete='off'
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className={styles.button}
              type="submit"
            >{!isLoginLoading ? 'Login' : <LoadingSpinner />}</button>
          </form>
        </div>
      )}

    </div>
  );
}

export default page;