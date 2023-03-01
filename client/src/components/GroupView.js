import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import PostCard from "./PostCard";
import PostForm from "./PostForm";

function GroupView({ groups, currentUser, setGroups, postSub, setPostSub, fetchGroups }) {
    let params = useParams()
    // console.log(params)


    const foundGroup = groups.find(group => group.id == params.groupId)

    function handleRenderPosts() {
        // console.log(foundGroup)
        return foundGroup.posts.map(post => <PostCard key={post.id} post={post} user={foundGroup.user} setGroups={setGroups} fetchGroups={fetchGroups} currentUser={currentUser} group={foundGroup} />)

    }
    return (
        <div className="Group-view-wrapper">
            <div className="Group-card">
                <h1>{foundGroup.name}</h1>
                <p>{foundGroup.description}</p>
                <div className="Group-posts-wrapper">
                    {handleRenderPosts()}
                </div>
                <PostForm currentUser={currentUser} group={foundGroup} />
            </div>
        </div>
    )
}

export default GroupView;