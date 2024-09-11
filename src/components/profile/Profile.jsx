import "./profile.css"
import ava from "../../img/ava.jpg"
import Posts from "./posts/posts"

function Profile() {
    return(
      <div className='profile'>
        <div className="me">
          <img src={ava} alt="avatarka" className="avatar"/>
          <div className="name">
            <h2>Xatab Minionov
              <span>@minionchik</span>
            </h2>
          </div>
        </div>

        <Posts userName = "Xatab Minionov" />
      </div>
    )
  }

export default Profile