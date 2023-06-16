import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="py-2 z-30 relative">
      <div className="container">
        <div className="box flex items-center justify-between">
          <div className="logo">
            <img className="w-[170px] h-1/2" src={logo} alt=""/>
          </div>
          <ul className="menu_items flex items-center gap-5 text-white">
            <li>
              <a href="#about">О нас</a>
            </li>
            <li>
              <a href="#partners">Партнеры</a>
            </li>
            <li>
              <a href="#portfolio">Наши работы</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
