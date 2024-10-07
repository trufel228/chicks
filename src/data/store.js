import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./dialogReducer";

let reducers = combineReducers({
    profileData: profileReducer,
    dialogData: messagesReducer
})
let store = createStore(reducers)

export default store