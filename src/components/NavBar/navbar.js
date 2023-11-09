import React from 'react'
import './navbar.css'
import logo from './winter.png'
import button from './button.png'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <nav className="navbar">  
      <img src={logo} alt="logo" className='logo' />
      <div className="desktopmenu">
        <Link className="desktopmenulistitem">Home</Link>
        <Link className="desktopmenulistitem">clients</Link>
        <Link className="desktopmenulistitem">About</Link>
        <Link className="desktopmenulistitem">Portfolio</Link>
      </div>
      <button className="desktopmenubutton">
        <img src={button} alt="button" className="desktopmenuimg" /> contact me
      </button>
    </nav>
  )
}

export default Navbar