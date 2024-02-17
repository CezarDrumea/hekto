import { Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './layouts/Header';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='home' element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
