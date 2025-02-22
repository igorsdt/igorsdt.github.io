import React from 'react';
import styles from './Layout.module.scss';
import { Header } from '../Header/Header';

export const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <Header />
    </div>
  );
}