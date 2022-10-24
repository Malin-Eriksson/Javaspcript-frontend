import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../components/MenuIcon'

const MainMenuSection = () => {
  return (
    <nav className='mainmenu container'>
        <div class='logo'>
            <a href="#">Fixxo.</a>
        </div>
        <div className='menu-links'>
            <NavLink className='menu-link' to="/">Home</NavLink>
            <NavLink className='menu-link' to="/categories">Categories</NavLink>
            <NavLink className='menu-link' to="/products">Products</NavLink>
            <NavLink className='menu-link' to="/contact">Contact</NavLink>
        </div>
        <div className='menu-icons'>
            <MenuIcon className='menu-icon' link="/search" icon="fa-regular fa-magnifying-glass" />
            <MenuIcon className='menu-icon' link="/compare" icon="fa-regular fa-code-compare" />
            <MenuIcon className='menu-icon' link="/wishlist" icon="fa-regular fa-heart" />
            <MenuIcon className='menu-icon' link="/shoppingcart" icon="fa-regular fa-bag-shopping" />
        </div>
    </nav>
  )
}

export default MainMenuSection
