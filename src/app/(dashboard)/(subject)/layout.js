import styles from './layout.module.css';
import { Suspense } from 'react';
import { TagUnorderedList } from '@/components/TagUnorderedList';

const SubjectLayout = ({ children }) => {
  return (

    <div>
      <div className={styles.tagManager}>
        <Suspense fallback={<div className={styles.loading}>Loading...</div>}>
          <TagUnorderedList></TagUnorderedList>
        </Suspense>
      </div>
      {children}
    </div>
  );
}

export default SubjectLayout;