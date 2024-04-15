'use client';
import styles from './Languages.module.css';
import { getTags } from '@/utils/getLanguages';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const LanguageList = () => {
  const router = useRouter()
  const [tags, setTags] = useState([]);
  useEffect(() => {
    const fetchTags = async () => {
      const data = await getTags();
      setTags(data);
    }

    fetchTags();
  }, [])



  return (
    <ul className={styles.ul}>
      {tags ? (
        tags.map((tag, index) => (
          <li key={index} onClick={() => handleClick(tag.language)} className={styles.li}>{tag.language}</li>
        ))
      ) : (
        <p>no data</p>
      )}
    </ul>
  );
}

export default LanguageList;
