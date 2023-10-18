import { ReactNode } from 'react'

import { Navbar } from './Navbar'

interface PropsLayout {
  children: ReactNode
}

const LayoutWeb = ({ children }: PropsLayout) => {
  return (
    <div className='h-screen'>
      <Navbar />
      <div className='flex justify-center'>{children}</div>
    </div>
  )
}

export default LayoutWeb
