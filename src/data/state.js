import { act } from "react";

let store = {
  _state: {
    profileData: {
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
    },

    dialogData: {
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
    },
  },
  reRender(state) {
    return;
  },
  subscribe(observer) {
    this.reRender = observer;
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    if (action.type == "ADD_POST") {
      let newPost = {
        id: 1488,
        mess: this._state.profileData.newPostText,
        likes: 0,
      };
      this._state.profileData.postItems.unshift(newPost);
      this._state.profileData.newPostText = "";
    } else if (action.type == "CHANGE_POST") {
      this._state.profileData.newPostText = action.text;
    } else if (action.type == "ADD_MESS") {
      let newMess = {
        id: 1488,
        mess: this._state.dialogData.newMessText,
      };
      this._state.dialogData.messItems.push(newMess);
      this._state.dialogData.newMessText = "";
    } else if (action.type == "CHANGE_MESS") {
      this._state.dialogData.newMessText = action.text;
    }
    this.reRender(this._state);
  },
};
export default store;
