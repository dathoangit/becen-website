import styles from './styles.module.scss'
import React from "react";

export const Container = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={`${styles.container} ${props.className}`}>
    {props.children}
  </div>
}
