import store from "./data/store";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
export default function reRender(state) {
  root.render(
    <React.StrictMode>
      <App state = {state} dispatch = {store.dispatch.bind(store)} />
    </React.StrictMode>
  );
}

reRender(store.getState())
store.subscribe(()=>{reRender(store.getState())})
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
