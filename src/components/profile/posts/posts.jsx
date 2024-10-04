import Post from "./post"
import React from "react"
import { addPostAC, changePostAC } from "../../../data/profileReducer"
let postText = React.createRef()

function Posts(props){
    let addPost = ()=>{
        props.dispatch(addPostAC())
    }
    let onChange = ()=>{
        props.dispatch(changePostAC(postText.current.value))
    }
    return(
        <div className="posts">
          <input type="text" placeholder="Enter the post" ref = {postText} value = {props.profileData.newPostText} onChange={onChange} />
          <button onClick={addPost}>Add post</button>
          {props.profileData.postItems.map((e)=><Post user = {props.profileData.postUsers[0]} message = {e.mess} id = {e.id} likes = {e.likes} />)}
        </div>
    )
}
export default Posts