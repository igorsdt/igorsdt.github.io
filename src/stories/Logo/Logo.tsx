import React from 'react';
import styles from './Logo.module.scss';

export const Logo: React.FC = () => {
  return (
    <a href="#" className={styles.logo}>
      <p className={styles.firstWord}>I</p>
      <p className={styles.secondWord}>R</p>
    </a>
  );
}