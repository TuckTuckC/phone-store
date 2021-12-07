import React from 'react';
import {useNavigate} from 'react-router-dom';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './CartTotals';
import {ProductConsumer} from '../../context';

function Cart() {

    const url = window.location.pathname

    return (
        <section>
            <ProductConsumer>
                {value => {
                    const {cart} = value;
                    if(cart.length > 0) {
                        return (
                            <React.Fragment>
                                <Title name='your' title='cart' />
                                <CartColumns />
                                <CartList value={value} />
                                <CartTotals value={value} history={url} />
                            </React.Fragment>
                        );
                    } else {
                        return <EmptyCart />
                    }
                }}
            </ProductConsumer>
        </section>
    );
};

export default Cart;
