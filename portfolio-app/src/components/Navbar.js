import { Link } from 'react-router-dom'
import './NavbarStyles.css'

import React, { useState } from 'react'

import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
    const [menu, setMenu] = useState(true);
    // const handleMenu = () => setMenu(!menu);

    const [color, setColor] = useState(false);

    const addNavColor = () =>{
        if(window.scrollY >= 150){
           setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener('scroll', addNavColor)

  return (
    <>
       <div className={color? 'header header-bg': 'header'}>
        <Link to='/'>
            <h1>PortFolio</h1>
        </Link>
        <ul className={menu?'nav-menu ':'nav-menu active'}>
            <li><Link to='/'>Home</Link></li>
            <li> <Link to='/project'>Project</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>

        <div className="hamburger" onClick={()=>setMenu(!menu)}>
            {menu? <FaBars size={20} style={{color:'white'}}/>:<FaTimes size={20} style={{color:'white'}}/>}
        </div>

       </div>
    </>
  )
}

export default Navbar
