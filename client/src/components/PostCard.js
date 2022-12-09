import React from 'react';

function PostCard({post}){

    return(
        <div className='Post-card'>
            <h1>{post.name}</h1>
            <p>{post.content}</p>
            <p>{post.image}</p>
        </div>
    )
}

export default PostCard;