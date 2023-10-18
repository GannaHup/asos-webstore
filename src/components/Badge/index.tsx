import React from 'react'

import styles from './badge.module.scss'

interface BadgeProps {
  text: string
}

export const Badge: React.FC<BadgeProps> = ({ text = 'Badge' }) => {
  return (
    <div className={styles.badge}>
      <span className={styles.textBadge}>{text}</span>
    </div>
  )
}
