import React from 'react'


const CartItem = ({ cart, removeItems, toggledQuantity, currencyFormat }) => {
    return (
        <>
            {cart && cart.map((item, index) => (
                <div key={index} className='items'>
                    <img src={item.image_url} alt={item.name} />
                    <div className='description'>
                        <span className='name'>{item.name}</span>
                        <span className='price'>ราคา {currencyFormat(item.price)} บาท</span>
                    </div>
                    <div className='quantity'>
                        <button className='plus-btn'
                            onClick={() => toggledQuantity(item.id, 'increment')}>
                            +
                        </button>
                        <input type="number" value={item.quantity} disabled />
                        <button className='minus-btn'
                            onClick={() => toggledQuantity(item.id, 'decrement')}>
                            -
                        </button>
                    </div>
                    <div className='total'>
                        {currencyFormat(item.quantity * item.price)}
                    </div>
                    <div className='remove'>
                        <p onClick={() => removeItems(item.id)}>ลบ</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default CartItem