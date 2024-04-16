'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getArticle } from '@/utils/getArticle';
// import { LoadingText } from '@/components/loadingUi/LoadingText';
import styles from './page.module.css';
import { CiLock } from "react-icons/ci";
import { CiUnlock } from "react-icons/ci";
import useSWR from 'swr';

export default function page({ params: { languageId, articleId } }) {
  const [isArticleLocked, setIsArticleLocked] = useState(true);
  const [isEditPanelDisplay, setIsEditPanelDisplay] = useState(false);
  const [isError, setIsError] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    body: ''
  })

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data: article, error, mutate } = useSWR(`${process.env.NEXT_PUBLIC_API_BASE_URL}/learning/article/${articleId}`, fetcher,
  {
    refreshInterval:500
  }
  );

  const router = useRouter();

  const handleLockClick = () => {
    setIsArticleLocked(!isArticleLocked);
  }

  const handleEdit = () => {
    setIsEditPanelDisplay(true);
  }

  const handleEditCancel = () => {
    setIsEditPanelDisplay(false);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSubmit = {
      title: formData.title || article.title,
      body: formData.body || article.body
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/learning/article/${article._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSubmit),
      });

      if (response.ok) {
        setIsEditPanelDisplay(false);
        mutate()
      } else {
        setIsError('error');
      }
    } catch (error) {
      setIsError('error');
      console.error('Error:', error);
    }
  }

  // const article = await getArticle(articleId);
  return (
    <div>
      <ul>
        {article ? (
          <div>
            {!article?.error &&
              <ul className={`${styles.EditToolUL} ${isArticleLocked && styles.EditToolULHidden}`}>
                <li
                  className={`${styles.EditToolList} ${styles.EditToolListLock}`}
                  onClick={handleLockClick}
                >{isArticleLocked ? <CiLock /> : <CiUnlock />}</li>

                <li
                  className={`${styles.EditToolList} ${isArticleLocked && styles.EditToolListHidden}`}
                  onClick={handleEdit}
                >Edit</li>
              </ul>
            }
            <article>
              <h2 className={styles.title}>{article.title}</h2>
              <p className={styles.paragraph}>{article.body}</p>
              {/* {article.body.map((blogContent , index)=>{
              <p key={index}>{blogContent.content}</p>
            })} */}
            </article>
          </div>
        ) : (
          <p className={styles.loading}>loading...</p>
        )}
      </ul>
      {isEditPanelDisplay &&
        <div className={styles.editPanelContainer}>
          <div className={styles.editPanel}>
            <form className={styles.editPanelForm} onSubmit={handleSubmit}>
              <label
                htmlFor="title"
                className={styles.label}
              >Title:</label>
              <input
                name='title' id='title'
                className={styles.editPanelTitle}
                type="text"
                defaultValue={article && article.title}
                onChange={handleChange}
              />
              <label
                htmlFor="body"
                className={styles.label}
              >Body:</label>
              <textarea
                name='body'
                id='body'
                className={styles.editPanelContent}
                defaultValue={article && article.body}
                onChange={handleChange}
              />
              <div className={styles.alert}>
                {isError && <p className={styles.alertMessage}>error</p>}
              </div>
              <div className={styles.buttonGroup}>
                <button className={styles.cancelButton} type='button' onClick={handleEditCancel}>Cancel</button>
                <button className={styles.submitButton}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      }
    </div>
  );
}
