import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../components/MenuIcon'

const MainMenuSection = () => {
  return (
    <nav className="mainmenu container">
    <div className="logo">
        Fixxo.
    </div>
    <div class="menu-links">
        <NavLink className="menu-link" to="/">Home</NavLink>
        <NavLink className="menu-link" to="/categories">Categories</NavLink>
        <NavLink className="menu-link" to="/products">Products</NavLink>
        <NavLink className="menu-link" to="/contacts">Contacts</NavLink>
        
    </div>
    <div className="menu-icons">
       <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass" />
       <MenuIcon link="/compare" icon="fa-regular fa-repeat" />
       <MenuIcon link="/wishlist" icon="fa-regular fa-heart" />
       <MenuIcon link="/shoppingcart" icon="fa-regular fa-shopping-bag" />
    </div>
</nav>
  )
}

export default MainMenuSection