import React, { useState } from 'react';
import EditPostForm from './EditPostForm';

function PostCard({ post, user, group, fetchGroups, currentUser }) {
    const [openEdit, setOpenEdit] = useState(false);

    const handleDelete = () => {
        fetch(`/posts/${post.id}`, {
            method: "DELETE"
        })
            .then(r => r.json)
            .then(fetchGroups)
    }

    const handleEdit = () => {
        setOpenEdit(openEdit => !openEdit)
    }  

    const visibleButtons = () => {
        if (currentUser.id == user.id) {
            return (
                <>
                    <button onClick={handleDelete}> Delete</button>
                    <button onClick={handleEdit}>Edit</button>
                </>
            )
        }
    }

    return (
        <div className='Post-card'>
            <h1>User: {user.username}, says {post.title}</h1>
            <p>{post.content}</p>
            <p>{post.image}</p>
            {visibleButtons()}
            {openEdit ? <EditPostForm post={post} fetchGroups={fetchGroups} currentUser={currentUser} group={group} /> : null}
        </div>
    )
}

export default PostCard;