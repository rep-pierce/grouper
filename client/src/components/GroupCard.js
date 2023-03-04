import React from 'react';
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from 'recoil';
import { groupStateAtom } from '../recoil/atoms';

const GroupCard = ({group}) => {
    const navigate = useNavigate()
    const setGroup = useSetRecoilState(groupStateAtom)

    const handleGroupPage = () => {
        setGroup(group)
        navigate('/group')
    }

    return(
        <div className='Group-card'>
            <div>
                <h1>{group.name}</h1>
                <p>{group.description}</p>
                <button className='button'>Join</button>
                <button className='button' onClick={handleGroupPage}>go to group page</button>
            </div>
        </div>
    )
}

export default GroupCard;