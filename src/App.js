import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import './App.css';

function App() {
  return (
    <div className='container'>
      <Header />
      <Navbar />
      <div className='content'>
        <Profile />
      </div>
    </div>
  );
}

export default App;