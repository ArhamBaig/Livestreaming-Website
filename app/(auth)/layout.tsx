import React from 'react'

type Props = {
    children: React.ReactNode
}

const layout = (props: Props) => {
  return (
    <div className='bg-orange-400 h-screen w-screen'>
        {props.children}
    </div>
  )
}

export default layout