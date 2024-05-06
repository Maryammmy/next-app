import React, { Suspense } from 'react'
import PostDetails from '../postDetails/postDetails'


export default async function PostDetailsPage({ params }) {
    // await new Promise((resolve)=>{
    //     setTimeout(()=>{
    //         resolve()
    //     },2000)
    // })


    return (
        <>
            <h1>Post Details</h1>
            <Suspense fallback='loading...'>
                <PostDetails postid={params.id} />
            </Suspense>
        </>
    )
}
