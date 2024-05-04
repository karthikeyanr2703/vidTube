import React from 'react'
import './Navbar.css'
import menuIcon from "../../assets/menu.png"
import logo from "../../assets/logo.png"
import searchIcon from "../../assets/search.png"
import uploadIcon from "../../assets/upload.png"
import moreIcon from "../../assets/more.png"
import notificationIcon from "../../assets/notification.png"
import profileIcon from "../../assets/jack.png"


const Navbar = ({setSidebar,sidebar}) => {
  return (
    <nav className='navbar-main'>
        <div className="navbar-left">
            <img className='menu-icon' src={menuIcon} onClick={() => setSidebar(prev => !prev)} alt="" />
            <img className='logo' src={logo} alt="" />
        </div>
        <div className="navbar-middle">
           <div className="search-box">
           <input type="text" placeholder='Search' />
            <img src={searchIcon} alt="" />
           </div>
        </div>
        <div className="navbar-right">
            <img src={uploadIcon} alt="" />
            <img src={moreIcon} alt="" />
            <img src={notificationIcon} alt="" />
            <img src={profileIcon} className='navbar-profile' alt="" />
        </div>

    </nav>
  )
}

export default Navbar
