// สร้าง context api ให้บริการข้อมูล

import { createContext, useContext, useEffect, useReducer } from 'react'
import CartData from '../data/CartData'
import reducer from './reducer';

const initeState = {
    cart: CartData,
    total: 0,
    amount: 0,
};

const CartContext = createContext();

export const MyCartContext = () => {
    return useContext(CartContext)
}

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initeState);

    useEffect(() => {
        dispatch({ type: 'TOTAL' });
    }, [state.cart]);
    // ลบสินค้า
    const removeItems = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: id });
    };
    // เพิ่มลดสินค้า +-
    const toggledQuantity = (id, type) => {
        dispatch({ type: 'TOGGLE_QUANTITY', payload: { id, type } });
    };
    // ใส่ , เช่น 1,000 2,000 3,000 4,000 5,000 6,000
    const currencyFormat = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }


    return (
        <CartContext.Provider value={{ ...state, removeItems, toggledQuantity, currencyFormat }}>
            {children}
        </CartContext.Provider>
    )
};

export { CartContext, CartProvider }