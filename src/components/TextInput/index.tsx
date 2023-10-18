import { Icon } from 'components'
import { iconTypes } from 'components/Icon'
import { ChangeEvent, HTMLProps, KeyboardEvent, useState } from 'react'

import styles from './textInput.module.scss'

interface Props {
  canEnter?: boolean
  className?: string
  iconName?: keyof typeof iconTypes
  iconPosition?: 'left' | 'right'
  label?: string
  placeholder?: string
  type?: string
  variant?: 'small' | 'medium' | 'large'
  onInput?: (value: string | number) => void
  onKeyDown?: () => void
}

export const TextInput: React.FC<Props & HTMLProps<HTMLInputElement>> = ({
  canEnter,
  iconName,
  iconPosition = '',
  label,
  placeholder,
  type,
  variant = 'medium',
  onInput,
  onKeyDown,
  ...inputProps
}) => {
  const [inputType, setInputType] = useState(type)
  const inputId = inputProps.id ?? inputProps.name

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (onInput) onInput(event.target.value)
  }

  const onKeyDownInput = (event: KeyboardEvent<HTMLInputElement>) => {
    if ((event.code === 'Enter' || event.keyCode === 13) && canEnter) {
      if (onKeyDown) onKeyDown()
    }
  }

  const showHidePassword = () => {
    if (inputType === 'password') {
      setInputType('text')
    } else {
      setInputType('password')
    }
  }

  return (
    <div className={styles.wrapperInput}>
      {Boolean(label) && (
        <label htmlFor={inputId} className={[styles.label, styles[variant]].join(' ')}>
          {label}
        </label>
      )}
      <div className={styles.textInput}>
        <input
          id={inputId}
          autoComplete='off'
          className={[styles.input, styles[variant], styles[iconPosition]].join(' ')}
          placeholder={placeholder}
          type={inputType}
          onKeyDown={onKeyDownInput}
          onChange={onChangeInput}
          {...inputProps}
        />
        {type === 'password' && (
          <div className={styles.seePassword} onClick={showHidePassword}>
            <Icon name={inputType === 'password' ? 'eyeOff' : 'eye'} />
          </div>
        )}
        {iconName && (
          <div className={[styles.icon, styles[iconPosition]].join(' ')} onClick={showHidePassword}>
            <Icon name={iconName} />
          </div>
        )}
      </div>
    </div>
  )
}
