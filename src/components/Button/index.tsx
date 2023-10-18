import React from 'react'

import styles from './button.module.scss'

interface ButtonProps {
  className?: string
  disabled?: boolean
  text?: string
  variant?: 'primary' | 'secondary'
  onClick: () => void
}

export const Button: React.FC<ButtonProps> = ({
  className,
  disabled = false,
  text = 'OKE',
  variant = 'primary',
  onClick,
}) => {
  return (
    <button
      className={[styles.button, styles[variant || ''], className].join(' ')}
      disabled={disabled}
      onClick={onClick}
    >
      <span className={styles.text}>{text}</span>
    </button>
  )
}
