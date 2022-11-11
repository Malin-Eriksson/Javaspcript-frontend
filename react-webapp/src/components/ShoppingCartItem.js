import React from 'react'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import { currencyFormatter } from './utilities/currencyFormatter'

const ShoppingCartItem = ({item}) => {
    const { decrementQuantity, incrementQuantity, removeItem } = useShoppingCart()

    return (
        <div className='shoppingcart-item'>
            <div className='item-image'>
                <img src={item.product.imageName} alt={item.product.name}/>
            </div>
            <div className='item-info'>
                <div className='item-info-name'>{item.product.name}</div>
                <div className='item-info-quantity'>
                    <button className='btn-decrement' onClick={() => decrementQuantity(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button className='btn-increment' onClick={() => incrementQuantity(item)}>+</button>
                </div>
            </div>
            <div className='item-price'>
                <div>{currencyFormatter(item.product.price * item.quantity)}</div>
                <button onClick={() => removeItem(item.articleNumber)}><i className='fa-solid fa-trash'></i></button>
            </div>
        </div>
    )
}

export default ShoppingCartItem