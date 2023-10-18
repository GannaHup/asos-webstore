// Icon
import EyeIcon from 'assets/icons/icon_eye'
import EyeOffIcon from 'assets/icons/icon_eye_off'
import BubbleLoadingIcon from 'assets/icons/icon_loading_bubble'
import LogoutIcon from 'assets/icons/icon_logout'
import SearchIcon from 'assets/icons/icon_search'
import TagIcon from 'assets/icons/icon_tag'

import { Props } from './type'

export const iconTypes = {
  bubbleLoading: BubbleLoadingIcon,
  eye: EyeIcon,
  eyeOff: EyeOffIcon,
  logout: LogoutIcon,
  search: SearchIcon,
  tag: TagIcon,
}

interface IconProps extends Props {
  name: keyof typeof iconTypes
}

export const Icon = (props: IconProps) => {
  const name = props.name
  const Icon = iconTypes[name]

  if (name && iconTypes[name]) {
    return <Icon {...props} />
  }

  return null
}
