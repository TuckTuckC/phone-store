import React from 'react';
import {useState, useEffect} from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
// Provider
// Consumer

function ProductProvider(props) {

    
    const [products, setProducts] = useState(storeProducts);
    const [detProduct, setDetProduct] = useState(detailProduct);
    const [cart, setCart] = useState([]);
    const [modalOpen, setModelOpen] = useState(true);
    const [modalProduct, setModalProduct] = useState(detailProduct);
    
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
    
    return (
        <ProductContext.Provider value={{
            products, 
            detProduct, 
            handleDetail,
            addToCart,
            openModal,
            closeModal,
        }}>
            {props.children}
        </ProductContext.Provider>
    );
};

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
