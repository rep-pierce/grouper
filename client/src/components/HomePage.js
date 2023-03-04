import React from "react";
import { useRecoilValue } from "recoil";
import { groupsStateAtom } from "../recoil/atoms";
import GroupCard from "./GroupCard";


const Homepage = () => {
    const groups = useRecoilValue(groupsStateAtom);


    return(
        <div className="Home-page-div">
            <div className="Group-cards">
                {groups.map(group => <GroupCard key={group.id} group={group} />) }
            </div>
        </div>
    )
}

export default Homepage;