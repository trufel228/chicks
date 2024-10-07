const ADD_POST = "ADD_POST"
const CHANGE_POST = "CHANGE_POST"

let initialData = {
  postItems: [
    { id: 1, mess: "доброго времени суток! сумерки гугугага", likes: 52 },
    { id: 1, mess: "я пошел в школу, всем пака", likes: 42 },
    { id: 1, mess: "я гуляю в лесу с собаками", likes: 1488 },
    { id: 1, mess: "недавно прогал по деревьям", likes: 77 },
    { id: 1, mess: "я проснулся, всем бобра", likes: 112 },
    { id: 1, mess: "я пошел на улицу, чтобы выгуляться", likes: 325 },
  ],
  postUsers: [
    {
      id: 1,
      name: "Xatab Minionov",
      nickname: "@minionchik",
      avatar: "ava.jpg",
    },
  ],
  newPostText: "",
}
let profileReducer = (state = initialData, action)=>{
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