import React from 'react'
import './Header.css'

import TopBar from '../TopBar/TopBar'
import NavBar from '../NavBar/NavBar'
import Landing from '../../template/index/Landing/Landing'
function Header() {
  return (
    <header className="header">
        <TopBar />
        <NavBar />
    </header>
  )
}

export default Header