'use client'
import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import LoadingSpinner from '@/components/loadingUi/LoadingSpinner';
import styles from './page.module.css';

const page = () => {
  const router = useRouter()
  const inputRef = useRef(null);
  const [isLoginDisplay, setIsLoginDisplay] = useState(false);
  const [username, setUsername] = useState('');
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [isLoginLoading, setIsLoginLoading] = useState(false)
  const [error, setError] = useState('');

  useEffect(() => {
    if(isLoginDisplay){
      inputRef.current.focus();
    }
  }, [isLoginDisplay]);

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
    }
  };

  const handleCkick = () => {
    setIsLoginDisplay(true);
  }

  return (
    <div className={styles.homePage}>
      {/* <div>
        <p className={styles.paragraph}> mock: random qoute API</p>
      </div> */}
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>Learning Hub</h1>
          <h2 className={styles.subTitle}>"Study on, I'll handle the memories."</h2>
          <button className={styles.button} onClick={handleCkick} >start now</button>
        </div>
      </div>
      <div className={`${styles.loginContainer} ${!isLoginDisplay && styles.loginContainerHidden}`
      }>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label
            className={styles.label}
            htmlFor="username"
          >Username:</label>
          <div
            className={styles.inputCriteria}
          >{usernameFocus && <span >
            minimum 3 characters
          </span>}
          </div>
          <input
            className={styles.input}
            type="text"
            id="username"
            name="username"
            autoComplete='off'
            ref={inputRef}
            onChange={(e) => setUsername(e.target.value)}
            onFocus={() => { setUsernameFocus(true) }}
            onBlur={() => { setUsernameFocus(false) }}
          />
          <label
            className={styles.label}
            htmlFor="password"
          >Password:</label>
          <div className={styles.inputCriteria}>
            {passwordFocus && <span >
              including both letter and number
            </span>}
          </div>
          <input
            className={styles.input}
            type="password"
            id="password"
            name="password"
            autoComplete='off'
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => { setPasswordFocus(true) }}
            onBlur={() => { setPasswordFocus(false) }}
          />
          <div className={styles.alertContainer}>
            {error && <p className={styles.alert}>{error}</p>}
          </div>
          <button
            className={styles.button}
            type="submit"
          >{!isLoginLoading ? 'Login' : <LoadingSpinner />}</button>
        </form>
      </div>
    </div>
  );
}

export default page;