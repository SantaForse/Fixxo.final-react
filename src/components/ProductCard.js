import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductCard = ({product}) => {

    const addToWishList = (e) => {
        console.log(`${e.target} added to wishlist`)
    }
    const addToCompare = (e) => {
        console.log("added to compare")
    }
    const addToCart = (e) => {
        console.log("added to shopping cart")
    }
  return (
    <div className="card">
        <div className="card-box">
            <img src={product.img} alt={product.name} />
            <div className="card-interaction">
                    <button onClick={addToWishList} className="card-balls"><i className="fa-regular fa-heart"></i></button>
                    <button onClick={addToCompare} className="card-balls"><i className="fa-regular fa-code-compare"></i></button>
                    <button onClick={addToCart} className="card-balls"><i className="fa-regular fa-bag-shopping"></i></button>
                    <NavLink to="/products"><button className="card-balls last-ball"><i className="fa-solid fa-eye"></i></button></NavLink>
            </div>

            <NavLink to={`/products/${product.name.toLowerCase().replace( / /gi, "-")}`} className="card-quick-view">
                <button className="btn-theme-red">
                    <div className="line-button-l-1"></div>
                    <div className="line-button-l-2"></div>
                        <p>QUICK VIEW</p> 
                    <div className="line-button-r-1"></div>
                    <div className="line-button-r-2"></div>
                </button>
            </NavLink>
        </div>

        <div className="card-text">
            <p>{product.category}</p>
            <h1 className="h1title">{product.name}</h1>
            <div className="card-stars">
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
            </div>
            <h2 className="h2title"><span>{product.initialprice}</span> {product.finalprice}</h2>
        </div>

    </div>
  )
}

export default ProductCard