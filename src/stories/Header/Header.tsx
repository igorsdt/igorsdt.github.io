import React from 'react';
import { useTranslation } from 'react-i18next';
import { Logo } from '../Logo/Logo';

import styles from './Header.module.scss';
import { ThemeSwitcher } from "../../shared/UI/ThemeSwitcher";
import { LangSwitcher } from "../../shared/UI/LangSwitcher";

export const Header: React.FC = () => {
  const { t } = useTranslation('header');

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav className={styles.nav}>
          <a href="#" className={styles.navItem}>{t('menu.tables')}</a>
          <a href="#" className={styles.navItem}>{t('menu.about')}</a>
        </nav>
        <div className={styles.switchers}>
          <ThemeSwitcher />
          <LangSwitcher />
        </div>
      </div>
    </header>
  );
}