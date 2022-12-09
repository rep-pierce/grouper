import React from 'react';
import { useNavigate } from "react-router-dom";
import PostCard from './PostCard';


function GroupPage({group, setGroup}){
    const navigate = useNavigate()

    function handleHome(){
        setGroup({})
        navigate('/')
    }
    function handleRenderPosts(){
        return group.posts.map(post => <PostCard key={post.title} post={post} />)
    }

    return(
        <div className='Group-page'>
            <h1>{group.name}</h1>
            <p>{group.description}</p>
            <div>{handleRenderPosts()}</div>
            <button className='button' onClick={handleHome}>Return to HomePage</button>
        </div>
    )
}

export default GroupPage;