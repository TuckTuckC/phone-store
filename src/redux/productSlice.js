import {createSlice} from '@reduxjs/toolkit';
import {storeProducts, detailProduct} from '../data';

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: storeProducts,
        detailProduct: detailProduct,
    },

    reducers: {
        setProducts: (state, action) => {
            return {...state, products: [...action.payload]}
        },

        handleDetail: (state,action) => {
            return console.log('Hello from productSlice');
        }
    }
});

export const {setProducts, handleDetail} = productSlice.actions;

export default productSlice.reducer;