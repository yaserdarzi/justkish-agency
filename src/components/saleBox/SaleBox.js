import React, { Component } from 'react';

import product from '../../../assets/images/product.jpg'

import './SaleBox.css';

class SaleBox extends Component {
    render() {
        return (
            <div className="sale-box">
                    <div className="product-sale-box" >
                        <img className="product-picture" src={product} alt="محصول" />
                        <span className="product-sale-title" >
                            <span>پاراسل</span>
                            <span className="product-sale" >۲۰
                                <span>فروش</span>
                            </span>
                        </span>
                    </div>
                    <div className="product-price-box" >
                        <span className="product-price-title" >میزان درآمد</span>
                        <span className="product-price-number" >
                            2,000,000
                            <span>تومان</span>
                        </span>
                    </div>

            </div>
        );
    }
}

export default SaleBox;
