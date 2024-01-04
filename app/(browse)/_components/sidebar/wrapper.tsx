import React from 'react'

type Props = {
  children: React.ReactNode
}

const Wrapper = ({children}: Props) => {
  return (
    <aside className='fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35]'>
      {children}
    </aside>
  )
}

export default Wrapper