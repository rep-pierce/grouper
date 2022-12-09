import React from 'react';
import { useNavigate } from "react-router-dom";


function GroupPage({group, setGroup}){
    const navigate = useNavigate()

    function handleHome(){
        // TODO: useEffect to clear side effect: clearing group
        setGroup({})
        navigate('/')
    }

    return(
        <div className='Group-page'>
            <h1>{group.name}</h1>
            <p>{group.description}</p>
            <button className='button' onClick={handleHome}>Return to HomePage</button>
        </div>
    )
}

export default GroupPage;