import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { ProductContext } from '../contexts/contexts'

const ProductDisplaySection2 = ({title, items = []}) => {

    const products = useContext(ProductContext)

    return (
        <section className="product-display-2 container">
            <div className="product-grid">
                <div className="row row-cols-1 row-cols-md-2 ">
                    {
                    items.map(product => <ProductCard key={product.articleNumber} item={product} />)
                    }
                </div>
            </div>
            <div className="flash-box">
                <h1>{title}</h1>
                <NavLink className="btn-theme">
                    <span className="btn-theme-left"></span>
                        FLASH SALE
                    <span className="btn-theme-right"></span>
                </NavLink>
            </div>
        </section>
    )
}


export default ProductDisplaySection2