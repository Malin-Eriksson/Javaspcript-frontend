import React from 'react'
import { NavLink } from 'react-router-dom'


const ProductCard = ({product}) => {
  
  const addToWishList = (e) => {
    console.log(`${e}"added to wish list"`) 
  }
  const addToCompare = (e) => {
    console.log("added to compare") 
  }
  const addToCart = (e) => {
    console.log("added to shopping cart") 
  }
  
  
  return (
<div className="col">
    <div className="card">    
    <div className="card-body">
        <div className="card-img">
            <img src={product.img} alt={product.name}/>
            <div className="card-menu">
                <button onClick={addToWishList} className="menu-link"><i className="fa-regular fa-heart"></i></button>
                <button onClick={addToCompare} className="menu-link"><i className="fa-regular fa-code-compare"></i></button>
                <button onClick={addToCart} className="menu-link"><i className="fa-regular fa-bag-shopping"></i></button> 
             </div>
            <NavLink to={`/products/${product.name.toLowerCase().replace(/ /gi, "-")}`} className="btn-theme">
                <span className="btn-theme-left"></span>
                    QUICK VIEW
                <span className="btn-theme-right"></span>
            </NavLink>
        </div>
            <p className="card-category">{product.category}</p>
            <h5 className="card-title">{product.name}</h5>
        <div className="card-rating">
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
        </div>
            <p className="card-price">{product.price}</p>
        </div>
    </div>
</div>  
  )
}

export default ProductCard