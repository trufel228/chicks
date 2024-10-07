const ADD_MESS = "ADD_MESS"
const CHANGE_MESS = "CHANGE_MESS"

let initialData = {
  messUsers: [
    { id: 1, name: "Иван Иванов" },
    { id: 2, name: "Дональд Трамп" },
    { id: 3, name: "Билл Гейтс" },
  ],
  messItems: [
    { id: 1, mess: "Привет, как дела?" },
    { id: 2, mess: "Го завтра на Марс?" },
    { id: 3, mess: "Жду мой новый чип" },
  ],
  newMessText: "",
}
let messagesReducer = (state = initialData,action)=>{
    if (action.type == ADD_MESS) {
        let newMess = {
          id: 1488,
          mess: state.newMessText,
        };
        state.messItems.push(newMess);
        state.newMessText = "";
      } else if (action.type == CHANGE_MESS) {
        state.newMessText = action.text;
      }
      return(state)
}
export default messagesReducer

export let addMessAC = ()=>{
    return(
      {type: ADD_MESS}
    )
  }
  export let changeMessAC = (text)=>{
    return(
      {type: CHANGE_MESS, text: text}
    )
  }