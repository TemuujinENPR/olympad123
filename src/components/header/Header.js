import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../../img/Modern Sys_CoLogo.png'
import { CloseOutlined, MenuOutlined } from '@ant-design/icons'

function Header() {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  const handleClose = () => {
    setClick(false)
  }

  return (
    <div className='header'>
      <img src={logo} width={90} height={90} alt='syscotech'/>
      <ul className={`nav-links ${click ? 'active' : ''}`}>
        <li className="upward"><Link to='/' onClick={handleClose}>Dashboard</Link></li>
        <li className="upward"><Link to='/portfolio' onClick={handleClose}>Portfolio</Link></li>
        <li className="upward"><Link to='/services' onClick={handleClose}>Services</Link></li>
        <li className="upward"><Link to='/mainformsecond' onClick={handleClose}>olympad burtguuleh</Link></li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
        {click ? <CloseOutlined className='icon' /> : <MenuOutlined className='icon' /> }
      </div>
    </div>
  )
}

export default Header