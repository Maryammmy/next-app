 export const metadata={
    title:'articles'
}
import React from 'react'
import title from './[title]/page'

export default function layout({children}) {
  return (
    <div className='vh-100 bg-danger'>layout
    <div>{children}</div>
    </div>
  )
}