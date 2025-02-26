import React from 'react';
import styles from './OperationFull.module.scss';
import { Button } from '../Button';

interface ComponentProps {
  title: string;
  sum: string;
  categoryName: string;
  description: string;
  date: string;
};

export const OperationFull: React.FC<ComponentProps> = ({title, sum, categoryName, description, date}) => {
  const descriptionText = ():string => {
    return description.length > 25
      ? `${description.slice(0, 30)}...`
      : description;
  };

  return (
    <div className={styles.row}>
      <div className={`${styles.col} ${styles.title}`}>
        {title}
      </div>
      <div className={styles.col}>
        {sum}
      </div>
      <div className={styles.col}>
        {categoryName}
      </div>
      <div title={description} className={styles.col}>
        {descriptionText()}
      </div>
      <div className={styles.col}>
        {date}
      </div>
      <div className={styles.col}>
        <Button primary={false} label='Редактировать' />
      </div>
    </div>
  );
}