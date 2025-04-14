import React, { useState, useContext } from 'react';
import styles from './styles.module.scss';
import { useTranslation } from "react-i18next";

interface Props {
  labels?: {
    ru: string;
    en: string;
  };
}

export const LangSwitcher: React.FC<Props> = ({
  labels = { ru: 'RU', en: 'EN' },
}: Props) => {
  const { i18n } = useTranslation('header');
  const lang = i18n.language;

  return (
    <div className={styles.container} role="group">
      <button
        type="button"
        className={`${styles.button} ${lang === 'ru' ? styles.active : ''}`}
        onClick={() => i18n.changeLanguage('ru')}
        aria-pressed={lang === 'ru'}
      >
        {labels.ru}
      </button>

      <button
        type="button"
        className={`${styles.button} ${lang === 'en' ? styles.active : ''}`}
        onClick={() => i18n.changeLanguage('en')}
        aria-pressed={lang === 'en'}
      >
        {labels.en}
      </button>
    </div>
  );
};
