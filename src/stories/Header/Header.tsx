import React from 'react';
import { Logo } from '../Logo/Logo';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <nav className={styles.nav}>
        <a href="#" className={styles.navItem}>link 1</a>
        <a href="#" className={styles.navItem}>link 2</a>
        <a href="#" className={styles.navItem}>link 3</a>
        <a href="#" className={styles.navItem}>link 4</a>
      </nav>
    </header>
  );
}