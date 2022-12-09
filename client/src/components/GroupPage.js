import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet } from "react-router-dom";
import PostForm from './PostForm';
import GroupCard from './GroupCard';


function GroupPage({groups, currentUser }){
    const navigate = useNavigate()

    function createGroupCards(){
        return groups.map(group => <GroupCard key={group.id} group={group}/>)
    } 

    function handleHome(){
        // TODO: useEffect to clear side effect: clearing group
        // setGroup({})
        navigate('/home')
    }

    return(
        <div className='Group-page'>
            {/* list of groups */}
            {createGroupCards()}
        
            <Outlet context={[currentUser]}/>
            <button className='button' onClick={handleHome}>Return to HomePage</button>
        </div>
    )
}

export default GroupPage;