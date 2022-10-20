import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../src/assets/css/views/style.css';
import ContactsView from './views/ContactsView';
import HomeView from './views/HomeView';
import NotFoundView from './views/NotFoundView';

function App() {
  return (

      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/contacts" element={<ContactsView />} />
            <Route path="*" element={<NotFoundView />} />
          </Routes>
      </BrowserRouter>
  
  );
}

export default App;