import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from './layouts/Header';

import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import PageNotFound from './pages/PageNotFound';
import Footer from './layouts/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Navigate replace to='home' />} />
        <Route path='home' element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path='cart' element={<Cart />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};
export default App;
