import { Suspense } from 'react';
import Link from 'next/link';
import { LoadingText } from '@/components/loadingUi/LoadingText';
import { LoadingDiv } from '@/components/loadingUi/LoadingDiv';
import { getLanguages } from '@/utils/getLanguages';
import { getArticlesByLanguage } from '@/utils/getArticlesByLanguage';
import Loading from './loading';
import styles from './layout.module.css';

async function LanguagesList() {
  const Languages = await getLanguages();
  return <>
    <ul className={styles.languageUl}>
      {Languages.length > 0 ? (
        Languages.map((language, index) => (
          <li key={index} className={styles.languageList}>
            <Link href={`/${language._id}`}>{language.title}</Link>
          </li>
        ))
      ) : (
        <p>no data</p>
      )}
    </ul>
  </>;
};

async function ArticleList(languageId) {

  const data = await getArticlesByLanguage(languageId);
  return <>
    <ul className={styles.articleUl}>
      {data.articles.length > 0 ? (
        data.articles.map((article, index) => (
          <li key={index} className={styles.articleList}>
            <Link
              href={`/${languageId.languageId}/${article._id}`}
              // className={`languageLink ${pathname === `/${languageId.languageId}/${article._id}` ? 'active' : ''}`}
            >{article.title}</Link>
          </li>
        ))
      ) : (
        <p>no data</p>
      )}
    </ul>
  </>;
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

