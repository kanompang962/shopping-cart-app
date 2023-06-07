import React from 'react'
import CartItem from './CartItem'
import { MyCartContext } from '../services/context'

const Cart = () => {
    const { cart, total, removeItems, toggledQuantity, currencyFormat } = MyCartContext();
    return (
        cart.length > 0
            ? <div className='shopping-cart'>
                <div className='title'>
                    ตะกร้าสินค้า
                </div>
                <div className='details'>
                    <CartItem
                        cart={cart}
                        removeItems={removeItems}
                        toggledQuantity={toggledQuantity}
                        currencyFormat={currencyFormat} />
                </div>
                <div className='footer'>
                    รวมทั้งหมด {currencyFormat(total)} บาท
                </div>
            </div>
            : <div className='shopping-cart'>
                <div className='empty'>
                    ไม่มีสินค้า
                </div>
            </div>
    )
}

export default Cart