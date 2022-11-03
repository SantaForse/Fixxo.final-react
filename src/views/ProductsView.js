import React, { useState } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'


const ProductsView = () => {
  window.top.document.title = 'Products | Fixxo.'

  const [featuredProducts, setFeaturedProducts] = useState([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", initialprice: "$35", finalprice: "$30", rating: 5, img: "https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 2, name: "Modern Black Blouse", category: "Fashion", initialprice: "$35", finalprice: "$30", rating: 5, img: "https://images.pexels.com/photos/5242790/pexels-photo-5242790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 3, name: "Modern Black Blouse", category: "Fashion", initialprice: "$35", finalprice: "$30", rating: 5, img: "https://images.pexels.com/photos/8386668/pexels-photo-8386668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 4, name: "Modern Black Blouse", category: "Fashion", initialprice: "$35", finalprice: "$30", rating: 5, img: "https://images.pexels.com/photos/4005031/pexels-photo-4005031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
  ])

  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Products" />
      <ProductGridSection title="Products" products={featuredProducts} />
      <FooterSection />
    </>
  )
}

export default ProductsView