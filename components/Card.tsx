import React from 'react'
import styles from './Card.module.scss'

export interface CardProps {
  children: React.ReactNode
  title: string
}

export const Card: React.FC<CardProps> = (props) => {
  return (
    <div className={styles.Card}>
      <div className={styles.Card__title}>{props.title}</div>
      <div className={styles.Card__description}>{props.children}</div>
    </div>
  )
}
