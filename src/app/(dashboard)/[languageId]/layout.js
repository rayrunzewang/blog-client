'use client'
import { Suspense } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { LoadingText } from '@/components/loadingUi/LoadingText';
import { LoadingDiv } from '@/components/loadingUi/LoadingDiv';
import { getLanguages } from '@/utils/getLanguages';
import { getArticlesByLanguage } from '@/utils/getArticlesByLanguage';
import styles from './layout.module.css';

async function LanguagesList() {
  const pathname = usePathname()
  const Languages = await getLanguages();

  return <>
    <ul className={styles.languageUL}>
      {Languages.length > 0 ? (
        Languages.map((language, index) => (
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
  </>;
};

async function ArticleList(languageId) {
  const pathname = usePathname()

  const data = await getArticlesByLanguage(languageId);
  return (
    <>
      <h2 className={styles.articleULTitle}>{data.title}</h2>
      <ul className={styles.articleUL}>
        {data.articles.length > 0 ? (
          data.articles.map((article, index) => (
            <li
              key={index}
              className={styles.articleList}>
              <Link
                href={`/${languageId.languageId}/${article._id}`}
                className={`${styles.articleLink} ${pathname === `/${languageId.languageId}/${article._id}` ? `${styles.activeArticleLink}` : ''}`}
              >{article.title}</Link>
            </li>
          ))
        ) : (
          <p>no data</p>
        )}
      </ul>
    </>
  )
};

export default function Layout({ children, params: { languageId } }) {

  return (
    <div>
      <div className={styles.languageNav}>
        <Suspense fallback={<LoadingDiv />}>
          <LanguagesList />
        </Suspense>
      </div>
      <div className={styles.asideAndMain}>
        <div className={styles.aside}>
          <Suspense fallback={<LoadingText number={5} />}>
            <ArticleList languageId={languageId} />
          </Suspense>
        </div>
        <div className={styles.main}>
            {children}
        </div>
      </div>
    </div>
  );
}

