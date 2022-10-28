import React from 'react'
import ProductCard from '../components/ProductCard'

const ProductGridSection = ({title}) => {


  const [products, setProducts] = useState ([
    { id: 1, productName: "Modern Black Blouse", category: "Fashion", price: "$35", rating: 5, imgUrl: "carg-img.jpg"},
    { id: 2, productName: "Modern Black Blouse", category: "Fashion", price: "$35", rating: 5, imgUrl: "carg-img.jpg"},
    { id: 3, productName: "Modern Black Blouse", category: "Fashion", price: "$35", rating: 5, imgUrl: "carg-img.jpg"},
    { id: 4, productName: "Modern Black Blouse", category: "Fashion", price: "$35", rating: 5, imgUrl: "carg-img.jpg"}
  ])
  
  return (
    <section className="product-grid">
        <div className="container">
          <h1>{title}</h1>
            <div className="grid">
                {
                  products.map(product => <ProductCard />)
                  }
                
            </div>
        </div>
    </section>
  )
}

export default ProductGridSection
