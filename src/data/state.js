let state = {
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
};
export default state;
let reRender = (state) => {
  return
};
export let subscribe = (observer)=>{
  reRender = observer
} 

export let addPost = () => {
  let newPost = {
    id: 1488,
    mess: state.profileData.newPostText,
    likes: 0,
  };
  state.profileData.postItems.unshift(newPost);
  state.profileData.newPostText = "";
  reRender(state);
};
export let changePost = (text) => {
  state.profileData.newPostText = text;
  reRender(state);
};

export let addMess = () => {
  let newMess = {
    id: 1488,
    mess: state.dialogData.newMessText,
  };
  state.dialogData.messItems.push(newMess);
  state.dialogData.newMessText = "";
  reRender(state);
};
export let changeMess = (text) => {
  state.dialogData.newMessText = text;
  reRender(state);
};
