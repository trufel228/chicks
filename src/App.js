import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Messages from "./components/messages/messages"

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App(props) {
  return (
    <div className='container'>
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path = "/" element = {<Profile profileData = {props.state.profileData} addPost = {props.addPost} />} />
            <Route path = "/profile" element = {<Profile profileData = {props.state.profileData} addPost = {props.addPost} />} />
            <Route exact = {false} path = '/messages' element = {<Messages dialogData = {props.state.dialogData} addMess = {props.addMess}/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;