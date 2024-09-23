import { NavLink } from "react-router-dom"

function User(props){
    return(
        <NavLink to = {`/messages/${props.id}`}>{props.user}</NavLink>
    )
}
export default User