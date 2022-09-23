import React from 'react'
import PostItem from './PostItem'

export default function PostList({ posts, listTitle }) {
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>{listTitle}</h2>
            {posts.map((post, index) => <PostItem number={index + 1} post={post} key={post.id} />)}
        </div>
    )
}
