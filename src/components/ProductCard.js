import React from 'react'

const ProductCard = () => {
  return (
    <div className="card-1 card">
                    <div className="card-box">

                        <div className="card-interaction">
                            <div className="card-balls">
                                <i className="fa-regular fa-heart"></i>
                            </div>
                            <div className="card-balls">
                                <i className="fa-regular fa-arrows-rotate"></i>
                            </div>
                            <div className="card-balls">
                                <i className="fa-regular fa-bag-shopping"></i>
                            </div>
                        </div>

                        <div className="card-quick-view">
                            <button className="btn-theme-red">
                                <div className="line-button-l-1"></div>
                                <div className="line-button-l-2"></div>
                                 <p>QUICK VIEW</p> 
                                <div className="line-button-r-1"></div>
                                <div className="line-button-r-2"></div>
                            </button>
                        </div>
                    </div>

                    <div className="card-text">
                        <p>Category</p>
                        <h1>Modern Black Blouse</h1>
                        <div className="card-stars">
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                            <i className="fa-sharp fa-solid fa-star"></i>
                        </div>
                        <h2><span>$35.00 </span>$30.00</h2>
                    </div>

                </div>
  )
}

export default ProductCard