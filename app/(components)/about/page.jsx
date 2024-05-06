

 export const metadata = {
  title:'about'
}

import Todo from '@/app/todo/todo'
import React from 'react'

export default async function About() {
 const data =  await fetch('https://jsonplaceholder.typicode.com/todos/1',{
  next:{
    revalidate:60
  }
 })
 const result = await data.json()
     
  return (
    <div>about
      {result.title}
      <Todo/>
    </div>
  )
}
