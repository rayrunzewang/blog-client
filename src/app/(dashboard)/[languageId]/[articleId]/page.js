'use client'
import React, { useState } from 'react'
import { getArticle } from '@/utils/getArticle';
import { LoadingText } from '@/components/loadingUi/LoadingText';
import styles from './page.module.css'
import { CiLock } from "react-icons/ci";
import { CiUnlock } from "react-icons/ci";

import useSWR from 'swr';

export default function page({ params: { languageId, articleId } }) {
  const [isArticleLocked, setIsArticleLocked] = useState(true)
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data: article, error, mutate } = useSWR(`${process.env.NEXT_PUBLIC_API_BASE_URL}/learning/article/${articleId}`, fetcher);

  const handleLockClick = () => {
    setIsArticleLocked(!isArticleLocked)
  }

  // const article = await getArticle(articleId);
  return (
    <ul>
      {article ? (
        <div>
          <ul className={styles.EditToolUL}>
            <li
              className={`${styles.EditToolList} ${styles.EditToolListLock}`}
              onClick={handleLockClick}
            >{isArticleLocked ? <CiLock /> : <CiUnlock />}</li>
   
                <li className={`${styles.EditToolList} ${isArticleLocked && styles.EditToolListHidden}`}>Edit</li>

                <li className={`${styles.EditToolList} ${isArticleLocked && styles.EditToolListHidden}`}>Delete</li>
          </ul>
          <article>
            <p className={styles.title}>{article.title}</p>
            <p className={styles.paragraph}>{article.body}</p>
            {/* {article.body.map((blogContent , index)=>{
              <p key={index}>{blogContent.content}</p>
            })} */}
          </article>
        </div>
      ) : (
        <LoadingText number={10} />
      )}
    </ul>
  );
}
