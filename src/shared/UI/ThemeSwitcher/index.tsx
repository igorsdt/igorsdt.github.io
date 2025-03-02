import React, { useCallback, useEffect, useState } from "react";
import styles from './styles.module.scss';
import { useTheme } from "../../../providers/ThemeProvider";

interface Props {
  onChange?: (checked: boolean) => void;
  className?: string;
}

export const ThemeSwitcher: React.FC = ({
  onChange,
  className = '',
}: Props) => {
  const { toggleTheme, theme } = useTheme();
  const [isDark, setTheme] = useState<boolean>(false);

  useEffect((): void => {
    setTheme(theme === "dark");
  }, [theme]);

  const handleToggle = () => {
    setTheme(!isDark);
    onChange?.(!isDark);
    toggleTheme();
  };

  return (
    <div
      role="switch"
      aria-checked={isDark}
      tabIndex={0}
      className={`${styles.container} ${className} ${
        isDark ? styles.checked : ''
      }`}
      onClick={handleToggle}
    >
      <div className={styles.handle}>
        <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <g className={`${isDark ? styles.hide : ''}`}>
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M18.36 5.64l1.41-1.41"/>
          </g>
          <g className={`${isDark ? '' : styles.hide}`}>
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </g>
        </svg>
      </div>
    </div>
  );
};