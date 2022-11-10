import React, {useContext} from 'react'
import ProductGridSection from '../sections/ProductGridSection'
import {  FlashProductsContext } from '../contexts/contexts'

const FlashFirstSection = ({flashTitle}) => {
    const flashProducts = useContext(FlashProductsContext)
  return (
    <div>
        <section className="__flash-sale-left container">
            <div className="__two-for-left"> 
                <h1>{flashTitle}</h1>
                <a href="#" className="btn-theme-white">
                    <div className="line-button-l-1"></div>
                    <div className="line-button-l-2"></div>
                    <p>SHOP NOW</p>
                    <div className="line-button-r-1"></div>
                    <div className="line-button-r-2"></div>
                </a>
            </div>
            <div className="__two-for-right">
                <div className="__two-for-right-grid">
                <ProductGridSection items={flashProducts} />
                </div>
            </div>
        </section>
    </div>
    
  )
}

export default FlashFirstSection