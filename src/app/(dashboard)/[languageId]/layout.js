'use client';

import { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { LoadingText } from '@/components/loadingUi/LoadingText';
import { LoadingDiv } from '@/components/loadingUi/LoadingDiv';
import useSWR from 'swr';
import { RiDeleteBinLine } from "react-icons/ri";
import styles from './layout.module.css';


function LanguagesList() {
  const pathname = usePathname();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, mutate } = useSWR(`${process.env.NEXT_PUBLIC_API_BASE_URL}/learning/language`,
    fetcher,
    {
      refreshInterval: 600000,
    });
  return (
    <>
      {data &&
        <ul className={styles.languageUL}>
          {data.length > 0 ? (
            data.map((language, index) => (
              <li
                key={index}
                className={`${styles.languageList}`}>
                <Link
                  className={`${styles.LanguageLink} ${pathname === `/${language._id}` ? `${styles.activeLanguageLink}` : ''}`}
                  href={`/${language._id}  `}
                >{language.title}</Link>
              </li>
            ))
          ) : (
            <p>no data</p>
          )}
        </ul>
      }
    </>
  )

};

function ArticleList({ languageId }) {
  const router = useRouter();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, mutate } = useSWR(`${process.env.NEXT_PUBLIC_API_BASE_URL}/learning/language/${languageId}/article`,
    fetcher,
    {
      refreshInterval: 500,
    });

  const pathname = usePathname()
  const handleAddArticle = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/learning/article`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          languageId: languageId,
          articles: [
            {
              title: 'New Article',
              body: 'No Content Yet'
            }
          ]
        })
      });

      if (response.ok) {
      } else {
        console.error('Failed to submit data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const deleteArticle = async (article) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/learning/article/${article._id}`, {
        method: 'DELETE'
      })

      if (!res.ok) {
        throw new Error('Delete post error');
      }

    } catch (error) {
      console.error('Delete post error:', error);
    }
  }

  const handleDelete = async (article) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      try {
        await deleteArticle(article);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <>
      {data &&
        <div>
          <h2 className={styles.articleULTitle}>{data.title}</h2>
          <button onClick={handleAddArticle} className={styles.addArticle}>Add New</button>
          <ul className={styles.articleUL}>
            {data.articles.length > 0 ? (
              data.articles.map((article, index) => (
                <li
                  key={index}
                  className={styles.articleList}>

                  <Link
                    href={`/${languageId}/${article._id}`}
                    className={`${styles.articleLink} ${pathname === `/${languageId}/${article._id}` ? `${styles.activeArticleLink}` : ''}`}
                  >{article.title}</Link>

                  <span
                    className={styles.articleDeleteButton}
                    onClick={() => handleDelete(article)}
                  >
                    <RiDeleteBinLine />
                  </span>
                </li>
              ))
            ) : (
              <p>no data</p>
            )}
          </ul>
        </div>
      }
    </>
  )
};

export default function Layout({ children, params: { languageId } }) {
  const [isArticleListDisplay, setIsArticleListDisplay] = useState(false)

  const handleArticleToggle = () => {
    setIsArticleListDisplay(!isArticleListDisplay);
  }

  return (
    <div>
      <div className={styles.languageNav}>
        <Suspense fallback={<LoadingDiv />}>
          <LanguagesList />
        </Suspense>
      </div>
      <div className={styles.asideAndMain}>
          <div className={`${styles.aside} ${!isArticleListDisplay && styles.asideHide}`}>
            <Suspense fallback={<LoadingText number={5} />}>
              <ArticleList languageId={languageId} />
            </Suspense>
          </div>
        <div className={styles.main}>
          <button
            className={styles.ArticleToggle}
            onClick={handleArticleToggle}
          >Articles</button>
          {children}
        </div>
      </div>
    </div>
  );
}

