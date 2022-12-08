import React from "react";
import GroupCard from "./GroupCard";
import NavBar from "./NavBar";

function Homepage({groups, setGroup}){

    function createGroupCards(){
        groups.map(group => <GroupCard key={group.id} group={group} setGroup={setGroup} />)
    }

    return(
        <div className="Home-page-div">
            <div className="Group-cards">
                <NavBar />
                {createGroupCards}
            </div>
        </div>
    )
}

export default Homepage;