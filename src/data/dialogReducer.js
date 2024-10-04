const ADD_MESS = "ADD_MESS"
const CHANGE_MESS = "CHANGE_MESS"

let messagesReducer = (state,action)=>{
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