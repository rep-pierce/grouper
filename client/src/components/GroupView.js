import React from "react";
// import { useParams } from "react-router-dom"
import { useRecoilValue, useSetRecoilState } from "recoil";
import { groupsStateAtom, postSubStateAtom } from "../recoil/atoms";
import PostCard from "./PostCard";
import PostForm from "./PostForm";

const GroupView = () => {
    // let params = useParams()
    // console.log(params)
    const groups = useRecoilValue(groupsStateAtom);
    const setFoundGroup = useSetRecoilState();
    // const [postSub, setPostSub] = useRecoilState(postSubStateAtom)

    console.log(groups)


    const foundGroup = groups.find(group => group.id == params.groupId)
    setFoundGroup(foundGroup);

    function handleRenderPosts() {
        console.log(foundGroup)
        return foundGroup.posts.map(post => <PostCard key={post.id} post={post} />)

    }
    return (
        <div className="Group-view-wrapper">
            <div className="Group-card">
                <h1>{foundGroup.name}</h1>
                <p>{foundGroup.description}</p>
                <div className="Group-posts-wrapper">
                    {handleRenderPosts()}
                </div>
                <PostForm />
            </div>
        </div>
    )
}

export default GroupView;