const ADD_POST = "ADD_POST"
const CHANGE_POST = "CHANGE_POST"

let profileReducer = (state, action)=>{
    if (action.type == ADD_POST) {
        let newPost = {
          id: 1488,
          mess: state.newPostText,
          likes: 0,
        };
        state.postItems.unshift(newPost);
        state.newPostText = "";
      } else if (action.type == CHANGE_POST) {
        state.newPostText = action.text;
      } 
      return(state)
}
export default profileReducer

export let addPostAC = ()=>{
    return(
        {type: ADD_POST, id: 1}
    )
  }
  export let changePostAC = (text)=>{
    return(
        {type: CHANGE_POST, text: text}
    )
  }