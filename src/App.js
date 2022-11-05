import React, { useState } from 'react'
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


function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", initialprice: "$35", finalprice: "$30", rating: 5, img: "https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 2, name: "Modern Black Blouse", category: "Fashion", initialprice: "$35", finalprice: "$30", rating: 5, img: "https://images.pexels.com/photos/5242790/pexels-photo-5242790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 3, name: "Modern Black Blouse", category: "Fashion", initialprice: "$35", finalprice: "$30", rating: 5, img: "https://images.pexels.com/photos/8386668/pexels-photo-8386668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    { id: 4, name: "Modern Black Blouse", category: "Fashion", initialprice: "$35", finalprice: "$30", rating: 5, img: "https://images.pexels.com/photos/4005031/pexels-photo-4005031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
  ])

  return (

      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeView items={products} />} />
            <Route path="/categories" element={<CategoriesView items={products} />} />
            <Route path="/products" element={<ProductsView  items={products} />} />
            <Route path="/products/:name" element={<ProductDetailsView />} />
            <Route path="/contacts" element={<ContactsView />} />
            <Route path="/search" element={<SearchView />} />
            <Route path="/compare" element={<CompareView />} />
            <Route path="/wishlist" element={<WishListView />} />
            <Route path="/shoppingcart" element={<ShoppingCartView />} />

            <Route path="*" element={<NotFoundView />} />
          </Routes>
      </BrowserRouter>
  
  );
}

export default App;