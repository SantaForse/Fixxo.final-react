import React  from 'react'
import ProductCard from '../components/ProductCard'


const ProductGridSection = ({title, products}) => {


  
  
  return (
    <section className="product-grid">
        <div className="container">
          <h1>{title}</h1>
            <div className="grid">
                {
                  products.map(product => <ProductCard key={product.id} product={product} />)
                }
                
            </div>
        </div>
    </section>
  )
}

export default ProductGridSection
