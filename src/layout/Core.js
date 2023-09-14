import React from 'react'

const Core = ({children, title}) => {
  return (
    <div className='core'>
       <div className="title">{title}</div>
       <div className="content">{children}</div>
    </div>
  )
}

export default Core
