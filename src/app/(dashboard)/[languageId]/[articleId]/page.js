import React from 'react'
import { getArticle } from '@/utils/getArticle';

export default async function page({ params: { languageId, articleId } }) {

  const article = await getArticle(articleId);

  return (
    <ul>
      {article ? (
        <div>
          <p>{article.title}</p>
          <p>{article.body}</p>
        </div>
      ) : (
        <p>no data</p>
      )}
    </ul>
  );
}
