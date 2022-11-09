import React from 'react'
import { NavLink } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { useProductContext } from '../contexts/ProductContext'

const ProductDisplaySection1 = ({title}) => {

        const {productDisplay1} = useProductContext()

    return (
        <section className="product-display-1 container">
            <div className="flash-box">
                <h1>{title}</h1>
                <NavLink className="btn-theme">
                    <span className="btn-theme-left"></span>
                        FLASH SALE
                    <span className="btn-theme-right"></span>
                </NavLink>
            </div>
            <div className="product-grid">
                <div className="row row-cols-1 row-cols-md-2 ">
                    {
                    productDisplay1.map(product => <ProductCard key={product.articleNumber} item={product} />)
                    }
                </div>
            </div>
        </section>
    )
}


export default ProductDisplaySection1