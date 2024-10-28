import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head";
import "./header.css";

const Header = () => {
    const [click, setClick] = useState(false)
  return (
    <>
      <Head />
      <header>
        <nav className="flexSB"> 
            <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
                <l1 style={{marginRight:'40px'}}><Link to='/'>Home</Link></l1>
                <l1 style={{marginRight:'40px'}}><Link to='/courses'>All Courses</Link></l1>
                <l1 style={{marginRight:'40px'}}><Link to='/about'>About</Link></l1>
            </ul>
            <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
