
function Post(props){
    return(
        <div className="post">
            <img src = {require(`../../../img/${props.user.avatar}`)} alt="avatarochka" className="avatar" />
            <span>{props.user.name}</span>
            <p>
              {props.message}
                <span className="likes">{props.likes}</span>
            </p>
        </div>
    )
}
export default Post