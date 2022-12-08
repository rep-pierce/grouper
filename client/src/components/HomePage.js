import React from "react";
import GroupCard from "./GroupCard";

function Homepage({groups}){

    function createGroupCards(){
        return groups.map(group => <GroupCard key={group.id} group={group} />)
    }

    return(
        <div className="Home-page-div">
            <div className="Group-cards">
                {createGroupCards()}
            </div>
        </div>
    )
}

export default Homepage;