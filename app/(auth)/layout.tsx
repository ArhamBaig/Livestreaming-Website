import React from 'react'
import { Logo } from './_components/logo'

type Props = {
    children: React.ReactNode
}

const layout = (props: Props) => {
  return (
    <div className='h-full flex flex-col justify-center items-center space-y-6'>
      <Logo />
        {props.children}
    </div>
  )
}

export default layout