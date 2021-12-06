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
    
    const openModal = id => {
        const product = getItem(id);
        setModalProduct(product);
        setModalOpen(true);
    };
    
    const closeModal = () => {
        setModalOpen(false);
    };
    

    const findSelectedCartProduct = (id) => {
        let tempCart = [...cart];

        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        return {product, tempCart};
    }

    const increment = (id) => {
        const {product, tempCart} = findSelectedCartProduct(id);

        product.count += 1;
        product.total = product.count * product.price;

        setCart([...tempCart]);
    };
    
    const decrement = (id) => {
        const {product, tempCart} = findSelectedCartProduct(id);

        product.count -= 1;
        
        if (product.count < 1) {
            removeItem(id);
        } else {
            product.total = product.count * product.price;
            setCart([...tempCart]);
        }

    };
    
    const removeItem = (id) => {
        let tempProducts = [...products];
        let tempCart = [...cart];

        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProducts.indexOf(getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        setCart([...tempCart]);
        setProducts([...tempProducts]);
    };

    const clearCart = () => {
        setCart([]);
        products.forEach(item => {
            item.inCart = false;
            item.count = 0;
            item.total = 0;
        });
    };
    
    const addTotals = () => {
        let subTotal = 0;
        cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.07;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        setCartSubTotal(subTotal);
        setCartTax(tax);
        setCartTotal(total);
    }
    useEffect(() => {
        addTotals();
    }, [cart])
    
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
