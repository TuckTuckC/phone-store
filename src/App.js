import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import ProductList from './Components/ProductList/ProductList';
import Details from './Components/Details/Details';
import Cart from './Components/Cart/Cart';
import Default from './Components/Default/Default';


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <ProductList />
      <Details />
      <Cart />
      <Default />
    </React.Fragment>
  );
}

export default App;
