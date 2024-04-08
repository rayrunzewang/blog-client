import styles from './TagUnorderedList.module.css';
import { getTags } from '@/utils/getTags';

export const TagUnorderedList = async ({ children }) => {
  await new Promise(resolve => setTimeout(resolve, 3000));
  const tags = await getTags();
  return (
    <ul className={styles.ul}>
      {
        tags.map((tag, index) => (
          <li key={index} className={styles.li}>{tag}</li>
        ))
      }
    </ul>
  );
}
