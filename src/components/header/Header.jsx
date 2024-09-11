import logo from "../../img/logo.gif"
import "./header.css" 

function Header() {
    return(
      <header className='header'>
        <img src={logo}></img>
        <div className="title title1">
          <h1>Chicks Social Media</h1>
          <h1>Chicks Social Media</h1>
        </div>
        <div className="title title2">
          <h1>Chicks Social Media</h1>
          <h1>Chicks Social Media</h1>
        </div>
        <h1 className="mainTitle">Chicks Social Media</h1>
      </header>
    )
  }

export default Header