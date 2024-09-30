import Post from "./post"
import React from "react"
let postText = React.createRef()

function Posts(props){
    let addPost = ()=>{
        props.addPost()
    }
    let onChange = ()=>{
        props.changePost(postText.current.value)
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