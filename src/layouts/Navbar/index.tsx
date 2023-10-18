import AsosLogo from 'assets/images/asos-logo.png'
import Profile from 'assets/images/profile.jpg'
import { Icon, TextInput } from 'components'
import { Constants } from 'constants/index'
import useDisclosure from 'hooks/useDisclosure'
import { useQueryParams } from 'hooks/useQueryParams'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { removeAllCookies } from 'utils/cookies'

import styles from './navbar.module.scss'

export const Navbar = () => {
  const history = useHistory()
  const query = useQueryParams()
  const disclosure = useDisclosure({ open: false })
  const queryKeyword = query.get('keyword')
  const [keyword, setKeyword] = useState(queryKeyword || '')

  const handleChangeInput = (value: string) => {
    setKeyword(value)
  }

  const handleKeyDownInput = () => {
    history.push(`${Constants.route.SEARCH}?keyword=${keyword}`)
  }

  const handleLogout = () => {
    removeAllCookies()
    window.location.reload()
  }

  return (
    <div className={styles.navbar}>
      <div className='flex flex-row items-center gap-14'>
        <div className='cursor-pointer' onClick={() => history.push(Constants.route.HOME)}>
          <img src={AsosLogo} className='w-28' />
        </div>
        <div className='w-72 flex flex-row'>
          <TextInput
            canEnter
            iconName='search'
            iconPosition='left'
            placeholder='Search T-Shirt or anything...'
            value={keyword}
            variant='small'
            onInput={(val) => handleChangeInput(val as string)}
            onKeyDown={() => handleKeyDownInput()}
          />
        </div>
      </div>
      <div className='relative'>
        <div className={styles.sectionRight} onClick={disclosure.onToggle}>
          <img src={Profile} className='w-8 h-8 rounded-full overflow-hidden' />
          <span className='text-sm text-gray-50'>Sam Altman</span>
        </div>
        {disclosure.isOpen && (
          <div className={styles.logout} onClick={handleLogout}>
            <span>Logout</span>
            <Icon name='logout' />
          </div>
        )}
      </div>
    </div>
  )
}
