import React, { useState } from 'react';
import styles from './styles.module.scss';

interface Props {
  initialValue?: string;
  onChange?: (value:string) => void;
  labels?: {
    ru: string;
    en: string;
  };
}

export const LangSwitcher: React.FC<Props> = ({
  initialValue = 'ru',
  onChange,
  labels = { ru: 'RU', en: 'EN' },
}: Props) => {
  const [lang, setLang] = useState<string>(initialValue);

  const handleToggle = (newValue: string) => {
    setLang(newValue);
    onChange?.(newValue);
  };

  return (
    <div className={styles.container} role="group">
      <button
        type="button"
        className={`${styles.button} ${lang === 'ru' ? styles.active : ''}`}
        onClick={() => handleToggle('ru')}
        aria-pressed={lang === 'ru'}
      >
        {labels.ru}
      </button>

      <button
        type="button"
        className={`${styles.button} ${lang === 'en' ? styles.active : ''}`}
        onClick={() => handleToggle('en')}
        aria-pressed={lang === 'en'}
      >
        {labels.en}
      </button>
    </div>
  );
};
