'use client';
import { getTags } from '@/utils/getLanguages';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './TitleList.module.css';

const TitleList = ({ language }) => {
  const router = useRouter()
  const [tags, setTags] = useState([]);
  
  useEffect(() => {
    const fetchTags = async () => {
      const data = await getTags();
      setTags(data);
    }

    fetchTags();
  }, [])

  const handleClick = (topic) => {
    router.push(`/${language}/${topic}`);
  }

  return (
    <ul className={styles.ul}>
      {tags?(
      Array.isArray(tags) && tags.length > 0 &&
        tags.filter(tag => (tag.language.toLowerCase() === language.toLowerCase()))[0].articles.map((article, index) => (
          <li key={index} onClick={() => handleClick(article.title)} className={styles.li}>{article.title}</li>
        ))
      ):(
        <p>no data</p>
      )
      }
    </ul>
  );
}

export default TitleList;
