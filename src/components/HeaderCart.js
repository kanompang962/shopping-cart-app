import React from 'react'
import { MyCartContext } from '../services/context'

const HeaderCart = () => {
    const { amount } = MyCartContext();
    return (
        <div className='header-cart'>
            <span>ตะกร้าสินค้า</span>
            <span className='badget'>{amount}</span>
        </div>
    )
}

export default HeaderCart