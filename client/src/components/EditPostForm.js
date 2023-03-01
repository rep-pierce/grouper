import React, { useState } from 'react';
// import { useOutletContext } from "react-router-dom"
// import { useNavigate } from 'react-router-dom';

const EditPostForm = ({ currentUser, group, post, fetchGroups }) => {
    const [formData, setFormData] = useState({
        title: post.title,
        image: post.image,
        content: post.content,
    })
    // const [errors, setErrors] = useState([])
    // const [display, setDisplay] = useState('login')


    const handleChange = (e) => {
        const value = e.target.value;
        // console.log(e.target)
        const name = e.target.name;
        setFormData((formData) => ({
            ...formData,
            [name]: value
        }));
    }

const handleSubmit = (e) => {
    e.preventDefault()
    const postParams = {
        user_id: currentUser.id,
        title: formData.title,
        content: formData.content,
        image: formData.image,
        group_id: group.id
    }

    // console.log(postParams)

    fetch(`/posts/${post.id}`, {
        method: "PATCH",
        body: JSON.stringify(postParams),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(r => r.json)
        .then(fetchGroups)
}


return (
    <div className='post-form-div'>
        <form className='post-form' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" value={formData.title} onChange={(e) => handleChange(e)} />
            </div>
            <div>
                <label htmlFor="image">Image:</label>
                <input type="text" id="image" name="image" value={formData.image} onChange={(e) => handleChange(e)} />
            </div>
            <div>
                <label htmlFor="content">Content:</label>
                <input type="text" id="content" name="content" value={formData.content} onChange={(e) => handleChange(e)} />
            </div>
            <div>
                <button className='button' type="submit" value="Post" >
                    Post
                </button>
            </div>
        </form>
    </div>
)
    }
export default EditPostForm;