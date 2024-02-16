import { Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './layouts/Header';

const App = () => {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
