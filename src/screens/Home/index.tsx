import IllShopping from 'assets/illustrations/ill_shopping.svg'
import { TextInput } from 'components'
import { Constants } from 'constants/index'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import styles from './home.module.scss'

const Home = () => {
  const history = useHistory()
  const [keyword, setKeyword] = useState('')

  const handleChangeInput = (value: string) => {
    setKeyword(value)
  }

  const handleKeyDownInput = () => {
    history.push(`${Constants.route.SEARCH}?keyword=${keyword}`)
  }

  return (
    <div className={styles.container}>
      <img src={IllShopping} className={styles.shoppingImg} />
      <div className={styles.content}>
        <span className={styles.text}>
          Come enjoy a pleasant shopping experience at ASOS. Find the latest products and feel
          comfortable transacting with our best service. What are you waiting for? Find your item
          now!
        </span>
        <TextInput
          canEnter
          placeholder='Search T-Shirt or anything...'
          value={keyword}
          className={styles.searchInput}
          autoFocus
          variant='small'
          onInput={(val) => handleChangeInput(val as string)}
          onKeyDown={() => handleKeyDownInput()}
        />
      </div>
    </div>
  )
}

export default Home
