import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { Display1Context } from '../contexts/contexts'

const ProductDisplaySection1 = ({title}) => {

        const items = useContext(Display1Context)

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
                    items.map(product => <ProductCard key={product.articleNumber} item={product} />)
                    }
                </div>
            </div>
        </section>
    )
}


export default ProductDisplaySection1