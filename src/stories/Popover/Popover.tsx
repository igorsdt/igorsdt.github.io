import React, { useEffect, useState } from 'react';
import styles from './Popover.module.scss';

interface PopoverProps {
  /**
   * Show or hide popover
   * @default false
   */
  visible: boolean;
  /**
   * Component body content
   */
  children?: React.ReactNode;
  /**
   * Popover title
   * @default ''
   */
  title?: string;
};

export const Popover: React.FC<PopoverProps> = ({visible=false, children, title}) => {
  const [isVisible, setVisible] = useState(false);
  const visibleStyle = isVisible ? styles.open : '';

  useEffect(() => {
    setVisible(visible);
  }, [visible]);
  
  return (
    <div className={`${styles.popover} ${visibleStyle}`}>
      <div className={styles.bg}></div>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <h3 className={styles.title}>{title}</h3>
          <button 
            onClick={() => setVisible(false)} 
            className={styles.close}
            aria-label="Закрыть попап"
          >
            ×
          </button>
        </div>
        <div className={styles.body}>
          {children}
        </div>
      </div>
    </div>
  );
}