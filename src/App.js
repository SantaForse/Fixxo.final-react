import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../src/assets/css/views/style.css';
import CategoriesView from './views/CategoriesView';
import ProductsView from './views/ProductsView';
import SearchView from './views/SearchView';
import CompareView from './views/CompareView';
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView';
import ShoppingCartView from './views/ShoppingCartView';
import WishListView from './views/WishListView';

function App() {
  return (

      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/categories" element={<CategoriesView />} />
            <Route path="/products" element={<ProductsView />} />
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