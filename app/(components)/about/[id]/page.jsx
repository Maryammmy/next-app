import React from 'react'

export default function id({params}) {
    console.log(params)
  return (
    <div>id | {params.id}</div>
  )
}
