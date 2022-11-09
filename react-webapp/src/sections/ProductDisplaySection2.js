import React from 'react'
import { NavLink } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { useProductContext } from '../contexts/ProductContext'

const ProductDisplaySection2 = ({title}) => {

    const {productDisplay2} = useProductContext()

    return (
        <section className="product-display-2 container">
            <div className="product-grid">
                <div className="row row-cols-1 row-cols-md-2 ">
                    {
                    productDisplay2.map(product => <ProductCard key={product.articleNumber} item={product} />)
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