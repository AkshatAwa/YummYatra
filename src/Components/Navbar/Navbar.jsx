import React, { useState,useRef } from 'react'
import './Navbar.css'
import navlogo from './navlogo2.png'
import menu from './menu.png'
import { Link } from 'react-scroll'

function Navbar() {
  const [showMenu, setshowMenu] = useState(false);

  return (
      <nav className="navbar">
        <img src={navlogo} alt="logo" className="logo"/>
        <div className="desktopMenu">
          <Link className="Vloggerss1" activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
          <Link className="Vloggerss2" activeClass='active' to='creators' spy={true} smooth={true} offset={-50} duration={500}>Creators</Link>
          <Link className="Vloggerss3" activeClass='active' to='suggestions' spy={true} smooth={true} offset={-40} duration={500}>Suggestions</Link>
          <Link className="Vloggerss4" activeClass='active' to='blogs' spy={true} smooth={true} offset={10} duration={500}>Blogs</Link>
        </div>
        <button className="contactBtn text-black" onClick={()=>{
          document.getElementById("contact").scrollIntoView({behavior: 'smooth'});
        }}><i className="ri-chat-4-line text-black"></i>Contact Us</button>
        <img src={menu} alt="menu" className="menulogo" onClick={()=> setshowMenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
          <Link className="listVloggerss" activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setshowMenu(false)}>Home</Link>
          <Link className="listVloggerss" activeClass='active' to='creators' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setshowMenu(false)}>Creators</Link>
          <Link className="listVloggerss" activeClass='active' to='suggestions' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setshowMenu(false)}>Suggestions</Link>
          <Link className="listVloggerss" activeClass='active' to='blogs' spy={true} smooth={true} offset={-100} duration={500} onClick={()=>setshowMenu(false)}>Blogs</Link>
          <Link className="listVloggerss" activeClass='active' to='contact' spy={true} smooth={true} offset={50} duration={500} onClick={()=>setshowMenu(false)}>Contact</Link>
        </div>
      </nav>
  )
}

export default Navbar