import Post from "./post"

function Posts(props){
    return(
        <div className="posts">
          <input type="text" placeholder="Enter the post" />
          <button>Add post</button>
          {props.profileData.postItems.map((e)=><Post user = {props.profileData.postUsers[0]} message = {e.mess} id = {e.id} likes = {e.likes} />)}
        </div>
    )
}
export default Posts