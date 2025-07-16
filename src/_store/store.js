import { configureStore, createSlice } from "@reduxjs/toolkit"
import data from '../assets/data'

const menuSlice = createSlice({
    name: "menu",
    initialState: data.menu,
    reducers: {
        /** ---- CURRENTLY NOT USING ----*/
        setMenu(_state, action) { return action.menu },
    }
})

const orderModalSlice = createSlice({
    name: "orderModal",
    initialState: {
        modalMenu: null,
        options: { '온도': 0, '진하기': 0, '사이즈': 0 },
        quantity: 1
    },
    reducers: {
        setModalMenu(state, action) { return { ...state, modalMenu: action.modalMenu } },
        setOptions(state, action) { return { ...state, options: action.options } },
        setQuantity(state, action) { return { ...state, quantity: action.quantity } },

        resetOrderModal(_state, _action) {
            const initialState = {
                modalMenu: null,
                options: { '온도': 0, '진하기': 0, '사이즈': 0 },
                quantity: 1
            }
            return initialState
        },
    }
})

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart(state, action) { return [...state, action.cartItem] },
        removeFromCart(state, action) { return state.filter((item) => item.id !== action.cartItem.id) },
    }
})

const store = configureStore({
    reducer: {
        menuState: menuSlice.reducer,
        orderModalState: orderModalSlice.reducer,
        cartState: cartSlice.reducer,
    }
})

export default store
export { menuSlice, orderModalSlice, cartSlice }