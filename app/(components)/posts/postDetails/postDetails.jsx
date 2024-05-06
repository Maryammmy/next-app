import React from 'react'

export default async function PostDetails({postid}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`, {
        next: {
            revalidate: 120
        }
    })
    const post = await response.json()
  
  return (
    <>
<h2>{post.title}</h2>
<p>{post.body}</p>
    </>
  )
}
