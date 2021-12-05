import React from 'react';
import {useState, useEffect} from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
// Provider
// Consumer

function ProductProvider(props) {

    
    const [products, setProducts] = useState(storeProducts);
    const [detProduct, setDetProduct] = useState(detailProduct);
    const [cart, setCart] = useState(storeProducts);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalProduct, setModalProduct] = useState(detailProduct);
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const [cartTax, setCartTax] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
    
    const getItem = (id) => {
        const product = products.find(item => item.id === id);
        return product;
    };
    
    const handleDetail = (id) => {
        const product = getItem(id);
        setDetProduct(product);
    };
    
    const addToCart = (id) => {
        let tempProducts = [...products];
        const index = tempProducts.indexOf(getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        
        setCart([...cart, product])
    };
    useEffect(() => {
        console.log(cart);
    }, [cart])
    
    const openModal = id => {
        const product = getItem(id);
        setModalProduct(product);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const increment = (id) => {
        console.log('This is increment method');
    };

    const decrement = (id) => {
        console.log('This is decrement method');
    };

    const removeItem = (id) => {
        console.log('Item removed');
    };

    const clearCart = () => {
        console.log('cleared cart');
    };
    
    return (
        <ProductContext.Provider value={{
            products, 
            detProduct,
            modalOpen,
            modalProduct,
            cart,
            cartSubTotal,
            cartTax,
            cartTotal,
            handleDetail,
            addToCart,
            openModal,
            closeModal,
            increment,
            decrement,
            removeItem,
            clearCart,
        }}>
            {props.children}
        </ProductContext.Provider>
    );
};

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
