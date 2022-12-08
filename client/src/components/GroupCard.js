import React from 'react';

function GroupCard({group}){

    return(
        <div className='Group-card'>
            <div>
                <h1>{group.name}</h1>
                <p>{group.description}</p>
                <button className='button'>Join</button>
                <button className='button'>go to group page</button>
            </div>
        </div>
    )
}

export default GroupCard;