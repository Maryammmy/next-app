import Link from 'next/link'
import React from 'react'

export default async function Posts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
     cache:'no-store'
    })
    const posts = await response.json()
  
    return (
        <div>

            {posts.map((post) => {
                return (
                    <Link href={`/posts/${post.id}`} className='text-black text-decoration-none'>
                    <div className='bg-light my-2 py-2'>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                    </Link>
                )


            })}
        </div>
    )
}
