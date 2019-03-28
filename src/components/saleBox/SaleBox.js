import React, { Component } from 'react';

import product from '../../assets/images/product.jpg'
import priceDigit from '../priceDigit/priceDigit';

import './SaleBox.css';

class SaleBox extends Component {

    componentDidMount(){
        console.log(this.props.tours.images)
    }

    render() {
        return (
            <div className="sale-box">
                    <div className="product-sale-box" >
                        <img className="product-picture" src={ this.props.tours.images != '' ? 'http://justkish.com/files/products/' + this.props.tours.images : product} alt="محصول" />
                        <span className="product-sale-title" >
                            <span>{this.props.tours.title}</span>
                            <span className="product-sale" >{this.props.data.count}
                                <span>فروش</span>
                            </span>
                        </span>
                    </div>
                    <div className="product-price-box" >
                        <span className="product-price-title" >میزان درآمد</span>
                        <span className="product-price-number" >
                           {priceDigit(this.props.data.agencyProfit,'price')}
                            <span>تومان</span>
                        </span>
                    </div>

            </div>
        );
    }
}

export default SaleBox;
