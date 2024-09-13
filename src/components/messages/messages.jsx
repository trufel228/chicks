import Message from "./message"
import "./messages.css"
import User from "./user"

function Messages(props){
    return(
        <div className="messages">
            <div className="users">
                <User user = {props.userName1} />
                <User user = {props.userName2} />
                <User user = {props.userName3} />
            </div>
            <div className="messageContainer">
                <Message message = "Привет, как дела?"/>
                <Message message = "Го завтра на Марс?"/>
                <Message message = "Жду мой новый чип"/>
                <textarea placeholder="введите сообщение"></textarea>
                <button>send</button>
            </div>
        </div>
    )
}
export default Messages