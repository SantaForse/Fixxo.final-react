import React, {useEffect} from 'react'
import ProductGridSection from '../sections/ProductGridSection'
import { useProductContext } from '../contexts/ProductContext'

const FlashFirstSection = ({flashTitle2}) => {
    const {flash, getFlash} = useProductContext()

    useEffect (() => {
        getFlash()
      }, [])

  return (
    <>
        <section className="__flash-sale-right container">
            <div className="flashSmallScreenSecond">
                <h1>{flashTitle2}</h1>
                <a href="#" className="btn-theme-white">
                    <div className="line-button-l-1"></div>
                    <div className="line-button-l-2"></div>
                    <p>FLASH SALE</p>
                    <div className="line-button-r-1"></div>
                    <div className="line-button-r-2"></div>
                    </a>
            </div>
            <div className="__two-for-left"> 
                <div className="__two-for-left-grid">
                    <ProductGridSection items={flash} />
                </div>
            </div>
            <div className="__two-for-right">
                <div className="flashBigScreenSecond container">
                    <div className="__two-for-right-box">
                        <h1>{flashTitle2}</h1>
                        <a href="#" className="btn-theme-white">
                        <div className="line-button-l-1"></div>
                        <div className="line-button-l-2"></div>
                        <p>FLASH SALE</p>
                        <div className="line-button-r-1"></div>
                        <div className="line-button-r-2"></div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </>
    
  )
}

export default FlashFirstSection