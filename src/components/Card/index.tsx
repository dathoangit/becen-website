import styles from './styles.module.scss';
import React from 'react';

export const Card = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`${styles.cardApp} ${props.className} bg-bg-card dark:bg-bg-card`}>{props.children}</div>
  );
};
