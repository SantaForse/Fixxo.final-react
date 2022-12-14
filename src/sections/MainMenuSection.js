import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../components/MenuIcon'
import {useShoppingCart} from '../contexts/ShoppingCartContext'

const MainMenuSection = () => {
  const [showMenu, setShowMenu] = useState()

  const { cartQuantity } = useShoppingCart()

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }



  return (
    <div className="wideMenu">
      <nav className="mainmenu container">
        <NavLink className="logo" to="/" end>Fixxo.</NavLink>
        <div className={`menu-links ${ showMenu ? "d-grid" : "" }`}>
          <NavLink className="menu-link" to="/" end>Home</NavLink>
          <NavLink className="menu-link" to="/categories" end>Categories</NavLink>
          <NavLink className="menu-link" to="/products" >Products</NavLink>
          <NavLink className="menu-link" to="/contacts" end>Contacts</NavLink>
          
      </div>
      <div className="menu-icons">
        <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass" />
        <MenuIcon hideOnMobile={true} link="/compare" icon="fa-regular fa-code-compare" />
        <MenuIcon hideOnMobile={true} quantity="3" link="/wishlist" icon="fa-regular fa-heart" />
        <button className="menu-icons" type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart">
            <MenuIcon quantity={cartQuantity} icon="fa-regular fa-shopping-bag" />
        </button>
        <button onClick={toggleMenu} className="d-xl-none menu-icon btn-menu-icon"><i className="fa-regular fa-bars"></i></button>
      </div>
    </nav>
  </div>
  )
}

export default MainMenuSection