import React from 'react'
import styles from './Title.module.css'

export default function Title({dec}) {
  return (
    <h1 className={styles.text}>{dec}</h1>
  )
}
