import React, {useContext} from 'react'
import ProductGridSection from '../sections/ProductGridSection'
import { ProductContext } from '../contexts/contexts'

const FlashFirstSection = ({flashTitle2}) => {
    const productContext = useContext(ProductContext)
  return (
    <div>
        <section className="__flash-sale-right container">
            <div className="__two-for-left"> 
                <div className="__two-for-left-grid"></div>
                    <ProductGridSection items={productContext.flashProducts} />
                </div>
            <div className="__two-for-right"> 
                <div className="__two-for-right-box">
                    <h1>{flashTitle2}</h1>
                    <a href="#" className="btn-theme-white">
                    <div className="line-button-l-1"></div>
                    <div className="line-button-l-2"></div>
                    <p>SHOP NOW</p>
                    <div className="line-button-r-1"></div>
                    <div className="line-button-r-2"></div>
                    </a>
                </div>
            </div>
        </section>
    </div>
    
  )
}

export default FlashFirstSection