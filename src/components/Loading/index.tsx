import { Icon } from 'components'

import styles from './loading.module.scss'

export const Loading: React.FC = () => {
  return (
    <div className={styles.loading}>
      <Icon name='bubbleLoading' />
    </div>
  )
}
