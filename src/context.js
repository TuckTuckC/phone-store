import React from 'react';
import {useState} from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
// Provider
// Consumer

function ProductProvider(props) {


    const [products, setProducts] = useState(storeProducts);
    const [detProduct, setDetProduct] = useState(detailProduct);

    const handleDetail = () => {
        console.log('Hello from detail');
    };

    const addToCart = (id) => {
        console.log(`Hello from addToCart, id id ${id}`);
    };



    return (
        <ProductContext.Provider value={{
            products, 
            detProduct, 
            handleDetail,
            addToCart,
        }}>
            {props.children}
        </ProductContext.Provider>
    );
};

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
