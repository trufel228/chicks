import React from "react"
import Message from "./message"
import "./messages.css"
import User from "./user"
let messText = React.createRef()

function Messages(props){
    let addMess = ()=>{
        props.addMess(messText.current.value)
    }
    return(
        <div className="messages">
            <div className="users">
                {props.dialogData.messUsers.map((e)=><User user = {e.name} id = {e.id}/>)}
            </div>
            <div className="messageContainer">
                {props.dialogData.messItems.map((e)=><Message message = {e.mess} id = {e.id}/>)}
                <textarea placeholder="введите сообщение" ref={messText}></textarea>
                <button onClick={addMess}>send</button>
            </div>
        </div>
    )
}
export default Messages