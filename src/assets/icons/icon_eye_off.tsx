import { type Icons } from 'components/Icon/type'
import React from 'react'

const EyeOffIcon: React.FC<Icons> = (props) => {
  return (
    <svg viewBox='0 0 17 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g opacity='0.5' clipPath='url(#clip0_1386_5633)'>
        <path
          d='M9.94545 9.44545C9.75819 9.64642 9.53237 9.80761 9.28147 9.9194C9.03056 10.0312 8.75971 10.0913 8.48506 10.0962C8.21042 10.101 7.93761 10.0505 7.68292 9.94761C7.42822 9.84473 7.19686 9.69161 7.00262 9.49738C6.80839 9.30314 6.65527 9.07178 6.55239 8.81708C6.44952 8.56239 6.399 8.28958 6.40384 8.01494C6.40869 7.74029 6.4688 7.46944 6.5806 7.21853C6.69239 6.96763 6.85358 6.74181 7.05455 6.55455M1 0.5L16 15.5M12.55 12.05C11.3845 12.9384 9.9653 13.4306 8.5 13.4545C3.72727 13.4545 1 8 1 8C1.84811 6.41947 3.02441 5.0386 4.45 3.95L12.55 12.05ZM7.06818 2.70909C7.5375 2.59924 8.018 2.54432 8.5 2.54545C13.2727 2.54545 16 8 16 8C15.5861 8.77428 15.0925 9.50323 14.5273 10.175L7.06818 2.70909Z'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_1386_5633'>
          <rect width='16' height='16' fill='white' transform='translate(0.5)' />
        </clipPath>
      </defs>
    </svg>
  )
}

EyeOffIcon.defaultProps = {
  width: 17,
  height: 16,
}

export default EyeOffIcon
