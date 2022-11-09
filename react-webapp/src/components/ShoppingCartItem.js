import React from 'react'

const ShoppingCartItem = ({item}) => {
  return (
    <div className='shoppingcart-item'>
        <div className='item-image'>
            <img src={item.product.imageName} />
        </div>
    </div>
  )
}

export default ShoppingCartItem