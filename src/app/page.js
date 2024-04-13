'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import styles from './page.module.css';

const page = () => {
  const router = useRouter()
  const [isLoginDisplay, setIsLoginDisplay] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log({ username, password })

      const response = await fetch(`${process.env.API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      console.log(response)

      if (!response.ok) {
        throw new Error('login failed');
      }

      const data = await response.json();

      setUsername('');
      setPassword('');
      setError('');
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
        <div className={styles.loginContainer}>
          <form className={styles.form} onSubmit={handleSubmit}>
            {error && <p>error</p>}
            <label
              className={styles.label}
              for="username"
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
              for="password"
            >Password:</label>
            <input
              className={styles.input}
              type="password"
              id="password"
              name="password"
              autoComplete='off'
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className={styles.loginButton}
              type="submit"
              value="Login" />
          </form>
        </div>
      )}

    </div>
  );
}

export default page;