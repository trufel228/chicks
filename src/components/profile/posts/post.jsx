import ava from "../../../img/ava.jpg"

function Post(props){
    return(
        <div className="post">
            <img src={ava} alt="avatarochka" className="avatar" />
            <span>{props.userName}</span>
            <p>
              {props.message}
            </p>
        </div>
    )
}
export default Post