'use client'
import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import LoadingSpinner from '@/components/loadingUi/LoadingSpinner';
import Link from 'next/link';
import styles from './page.module.css';

const getQuote = async () => {
  try {
    const data = await fetch(process.env.NEXT_PUBLIC_QUOTE_API_BASE_URL, {
      headers: { 'X-Api-Key': process.env.NEXT_PUBLIC_QUOTE_API_KEY },
    });
    return data.json()
  } catch (error) {
    console.error(error.message)
  }
}

const page = () => {
  const router = useRouter()
  const inputRef = useRef(null);
  const [isLoginDisplay, setIsLoginDisplay] = useState(false);
  const [quote, setQuote] = useState('');
  const [username, setUsername] = useState('');
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [isLoginLoading, setIsLoginLoading] = useState(false)
  const [error, setError] = useState('');

  useEffect(() => {
    if (isLoginDisplay) {
      inputRef.current.focus();
    }
  }, [isLoginDisplay]);

  useEffect(() => {
    const fetchQuote = async () => {
      const [data] = await getQuote();
      setQuote(data);
      console.log(data.quote)
    }

    fetchQuote();
  }, [])

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
      {quote &&
        <div className={styles.quoteWrapper}>
          <p className={styles.quote}>"{quote.quote}"</p>
          <Link
            className={styles.quoteLink}
            href={`https://google.com/search?q=` + quote.author}
            target='_blank'
          >
            <span className={styles.quotehyphen}>-</span>
            <span className={styles.quoteAuthor}>{quote.author}</span>
          </Link>
        </div>
      }
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
            Username or Email
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
            onFocus={() => {
              setUsernameFocus(true);
              setError('');
            }}
            onBlur={() => { setUsernameFocus(false) }}
          />
          <label
            className={styles.label}
            htmlFor="password"
          >Password:</label>
          <div className={styles.inputCriteria}>
            {passwordFocus && <span >
              
            </span>}
          </div>
          <input
            className={styles.input}
            type="password"
            id="password"
            name="password"
            autoComplete='off'
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => { 
              setPasswordFocus(true);
              setError('');
             }}
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