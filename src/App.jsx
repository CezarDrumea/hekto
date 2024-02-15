import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Heading1 } from './typography/Heading';

const App = () => {
  return (
    <>
      <Heading1>Hello</Heading1>

      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
