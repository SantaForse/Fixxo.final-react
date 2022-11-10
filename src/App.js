import React, { useEffect ,useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../src/assets/css/views/style.css';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView';
import ShoppingCartView from './views/ShoppingCartView';
import WishListView from './views/WishListView';
import { ProductContext, FeaturedProductsContext, FlashProductsContext } from './contexts/contexts';



function App() {
  
const [products, setProducts] = useState([])
const [featured, setFeatured] = useState([])
const [flash, setFlash] = useState([])

useEffect(() =>  {
   const fetchAllData = async () => {
    const result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
    setProducts(await result.json())
  }
  fetchAllData()

  const fetchFeaturedData = async () => {
    const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
    setFeatured(await result.json())
  }
  fetchFeaturedData()



  const fetchFlashData = async () => {
    const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
    setFlash(await result.json())
  }
  fetchFlashData()


}, [setProducts, setFeatured, setFlash])

  return (

      <BrowserRouter>
          <ProductContext.Provider value={products}>
          <FeaturedProductsContext.Provider value={featured}>
          <FlashProductsContext.Provider value={flash}>
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="/categories" element={<CategoriesView />} />
              <Route path="/products" element={<ProductsView />} />
              <Route path="/products/:id" element={<ProductDetailsView />} />
              <Route path="/contacts" element={<ContactsView />} />
              <Route path="/search" element={<SearchView />} />
              <Route path="/compare" element={<CompareView />} />
              <Route path="/wishlist" element={<WishListView />} />
              <Route path="/shoppingcart" element={<ShoppingCartView />} />
              <Route path="*" element={<NotFoundView />} />
            </Routes>
          </FlashProductsContext.Provider>
          </FeaturedProductsContext.Provider>
          </ProductContext.Provider>
      </BrowserRouter>
  
  );
}

export default App;