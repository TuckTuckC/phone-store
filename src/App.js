import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import Details from './Components/Details';
import Cart from './Components/Cart';
import Default from './Components/Default';


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route index path='/' element={<ProductList />} />
                <Route path='/details' element={<Details />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='*' element={<Default />} />
            </Routes>
        </Router>
    );
};

export default App;
