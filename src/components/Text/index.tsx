import React from 'react'
import styles from './style.module.scss'
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";

type TextType = React.HTMLAttributes<HTMLSpanElement> & {
  children: any,
  fontSize?: number,
  mobileFontSize?: number,
  fontWeight?: number
  whiteSpace?: 'nowrap'
  color?: string
}

export const Text = (props: TextType) => {
  const {className, color, mobileFontSize, whiteSpace, fontSize, fontWeight, children, style} = props
  return (
    <span
      {...props}
      className={`text-text-primary text ${styles.text} ${className} `}
      style={{
        whiteSpace: whiteSpace || 'inherit',
        fontSize: fontSize ? `${fontSize}px` : undefined,
        fontWeight,
        color,
        ...style
      }}
    >
      {children}
    </span>
  )
}

export const TextHeader = (props: TextType) => {
  const {className, children} = props

  return (
    <Text {...props} className={`${styles.textHeader} ${className} text-text-primary-dark`}>
      {children}
    </Text>
  )
}

export const TextGrey = (props: TextType) => {
  const {className, children} = props

  return (
    <Text {...props} className={`${styles.textGrey} ${className} `}>
      {children}
    </Text>
  )
}

export const TextWhite = (props: TextType) => {
  const {className, children} = props

  return (
    <Text {...props} className={`${styles.textWhite} ${className}`}>
      {children}
    </Text>
  )
}

export const TextGradient = (props: TextType) => {
  const {className, children} = props
  return (
    <Text {...props}
          className={`${styles.text} ${styles.textGradient} ${className}`}
    >
      {children}
    </Text>
  )
}

export const TextGreen = (props: TextType) => {
  const {className, children} = props

  return (
    <Text {...props} className={`${styles.textGreen} ${className}`}>
      {children}
    </Text>
  )
}


export const TextYellow = (props: TextType) => {
  const {className, children} = props

  return (
    <Text {...props} className={`${styles.textYellow}
     ${className}`}>
      {children}
    </Text>
  )
}

export const TextPrimary = (props: TextType) => {
  const {className, children} = props

  return (
    <Text {...props} className={`${styles.textPrimary} ${className}`}>
      {children}
    </Text>
  )
}

export const TextLink = (props: TextType & { href?: string }) => {
  const {className, href, children} = props

  return (
    <div className="flex flex-col items-center">
      <TextGradient
        {...props}
        className={`${styles.textLink} ${className}`}
        onClick={(e) => {
          href && window.open(href)
          if (props.onClick) {
            props.onClick(e)
          }
        }}
      >
        {children}
      </TextGradient>
      <div className="w-full h-[1px] [background:linear-gradient(266deg,#FFCE4E_0%,#FFCB4E_0%,#FF804E_100%)] "/>
    </div>
  )
}
