import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'

function App() {
  const [email, setEmail] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClick = () => {
    setEmail(!email)
  }

  const handleEmail = () => {
    window.location.href = 'mailto:business@gmail.com'
  }

  return (
    <>
      <div className="app">
        <Router>
          <header className="header">
            <nav className='nav'>
              <h1>Business</h1>
              <div className='navbar'>
                <Link aria-current="page" to="/">Home</Link>
                <Link to="/about">About</Link>
                <button className="btn" onClick={handleClick}>Contact</button>
              </div>
              <div className="mobile-menu">
                <button className="hamburger" onClick={toggleMenu}>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </button>
               {menuOpen && <ul className= "menu-items">
                  <li><Link aria-current="page" to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><button className="btn" onClick={handleClick}>Contact</button></li>
                </ul>}
              </div>
            </nav>

          </header>
          {email && <span className='contact' onClick={handleEmail}>business@gmail.com</span>}

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>


        </Router>
        <footer className='footer'>
          <h2>Business</h2>
          <p>Copyright 2023. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
