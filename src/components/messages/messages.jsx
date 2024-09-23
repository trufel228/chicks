import Message from "./message"
import "./messages.css"
import User from "./user"

function Messages(props){
    return(
        <div className="messages">
            <div className="users">
                {props.dialogData.messUsers.map((e)=><User user = {e.name} id = {e.id}/>)}
            </div>
            <div className="messageContainer">
                {props.dialogData.messItems.map((e)=><Message message = {e.mess} id = {e.id}/>)}
                <textarea placeholder="введите сообщение"></textarea>
                <button>send</button>
            </div>
        </div>
    )
}
export default Messages