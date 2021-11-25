import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: [],
    },

    reducers: {
        add: (state, action) => {
            state.value = [...state, action.payload.productId]
        }
    }
})

export const {add} = cartSlice.actions

export default cartSlice.reducer