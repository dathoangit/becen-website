import React from "react";
import styles from './styles.module.scss'

export const Button = (props: React.HTMLAttributes<HTMLSpanElement>) => {
  return <button {...props} className={`${styles.button} w-32 h-10 flex items-center justify-center`}>{props.children}</button>
}
