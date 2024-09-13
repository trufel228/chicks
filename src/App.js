import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Messages from "./components/messages/messages"

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Header />
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path = "/profile" element = {<Profile />} />
            <Route path = '/messages' element = {<Messages userName1 = "Иван Иванов" userName2 = "Дональд Трамп" userName3 = "Билл Гейтс" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;