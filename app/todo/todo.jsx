"use client"
import React, { useEffect, useState } from 'react'

export default function todo() {
    const [todo,setTodo]=useState({})
    useEffect(()=>{
   async function data() {
    const data = await   fetch('https://jsonplaceholder.typicode.com/todos/1')
    const result = await data.json()
  setTodo(result)
   }
   data()
    },[])
  return (
    <div>todo
        {todo.title}
    </div>
  )
}
