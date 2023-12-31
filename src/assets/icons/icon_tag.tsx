import { Icons } from 'components/Icon/type'
import React from 'react'

const TagIcon: React.FC<Icons> = (props) => {
  const { color, width, height } = props
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7.75 6.5C7.05964 6.5 6.5 7.05964 6.5 7.75C6.5 8.44036 7.05964 9 7.75 9C8.44036 9 9 8.44036 9 7.75C9 7.05964 8.44036 6.5 7.75 6.5Z'
        fill={color}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.5 1C1.67157 1 1 1.67157 1 2.5V10.9393C1 11.3372 1.15804 11.7187 1.43934 12L11.6893 22.25C12.2751 22.8358 13.2249 22.8358 13.8107 22.25L22.25 13.8107C22.8358 13.2249 22.8358 12.2751 22.25 11.6893L12 1.43934C11.7187 1.15804 11.3372 1 10.9393 1H2.5ZM2.5 2.5H10.9393L21.1893 12.75L12.75 21.1893L2.5 10.9393V2.5Z'
        fill={color}
      />
    </svg>
  )
}

TagIcon.defaultProps = {
  color: '#24292F',
  width: 24,
  height: 24,
}

export default TagIcon
