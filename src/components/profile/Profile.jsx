import "./profile.css"
import Posts from "./posts/posts"

function Profile(props) {  
    return(
      <div className='profile'>
        <div className="me">
          <img src={require(`../../img/${props.profileData.postUsers[0].avatar}`)} alt="avatarka" className="avatar"/>
          <div className="name">
            <h2>{props.profileData.postUsers[0].name}
              <span>{props.profileData.postUsers[0].nickname}</span>
            </h2>
          </div>
        </div>

        <Posts profileData = {props.profileData} dispatch = {props.dispatch} />
      </div>
    )
  }

export default Profile