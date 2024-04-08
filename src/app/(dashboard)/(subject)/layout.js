import styles from './layout.module.css';
import { Suspense } from 'react';
import { TagUnorderedList } from '@/components/TagUnorderedList';
import { Loading } from '@/components/Loading';

const SubjectLayout = ({ children }) => {
  return (

    <div>
      <div className={styles.tagManager}>
        <Suspense fallback={<Loading />}>
          <TagUnorderedList />
        </Suspense>
      </div>
      {children}
    </div>
  );
}

export default SubjectLayout;