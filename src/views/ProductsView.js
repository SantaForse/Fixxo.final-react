import React, { useContext } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import { ProductContext } from '../contexts/contexts'
import MainMenuWhiteSection from '../sections/MainMenuWhiteSection'


const ProductsView = () => {
  const products = useContext(ProductContext);
  window.top.document.title = 'Products | Fixxo.'

  return (
    <>
      <MainMenuWhiteSection />
      <BreadcrumbSection currentPage="Products" />
      <ProductGridSection title="All Products" items={products} />
      <FooterSection />
    </>
  )
}

export default ProductsView