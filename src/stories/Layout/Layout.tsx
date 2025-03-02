import React from 'react';
import styles from './Layout.module.scss';
import { Header } from '../Header/Header';
import { useTheme } from "../../providers/ThemeProvider";

export const Layout: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div data-theme={theme} className={styles.layout}>
      <Header />
    </div>
  );
}