'use client'
import React from 'react'
import { getArticle } from '@/utils/getArticle';
import { LoadingText } from '@/components/loadingUi/LoadingText';
import styles from './page.module.css'
import useSWR from 'swr';

export default function page({ params: { languageId, articleId } }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data: article, error, mutate } = useSWR(`${process.env.NEXT_PUBLIC_API_BASE_URL}/learning/article/${articleId}`, fetcher);

  // const article = await getArticle(articleId);
  return (
    <ul>
      {article ? (
        <div>
          <p className={styles.title}>{article.title}</p>
          <p className={styles.body}>{article.body}</p>
        </div>
      ) : (
        <LoadingText number={10} />
      )}
    </ul>
  );
}
