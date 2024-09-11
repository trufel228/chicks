import Post from "./post"

function Posts(props){
    return(
        <div className="posts">
          <input type="text" placeholder="Enter the post" />
          <button>Add post</button>
          <Post userName = {props.userName} message = "доброго времени суток! сумерки гугугага" />
          <Post userName = {props.userName} message = "я пошел в школу, всем пака" />
          <Post userName = {props.userName} message = "я гуляю в лесу с собаками" />
          <Post userName = {props.userName} message = "недавно прогал по деревьям" />
          <Post userName = {props.userName} message = "я проснулся, всем бобра" />
        </div>
    )
}
export default Posts