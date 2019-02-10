import React, { Component } from 'react';

import positive from './../../../assets/icons/positive.svg';
import ngative from './../../../assets/icons/ngative.svg';
import deletee from './../../../assets/icons/delete.svg';


import './SmallOrder.css';

class SmallOrder extends Component {
    render() {
        return (
            <div >
                <div className="create-ticket-your-order">
                    <div className="create-ticket-your-order-box1">
                        <p className="create-ticket-your-order-title" ><img src={deletee} alt="حذف" />{this.props.title}</p>
                        <p className="create-ticket-your-order-numbers">
                            <img src={positive} alt="مثبت" />
                            <span>{this.props.orderNumber}</span>
                            <img src={ngative} alt="منفی" />
                        </p>
                    </div>
                    <div className="create-ticket-your-order-box2">
                        <span> {this.props.date}</span>
                        <span>{this.props.price} </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default SmallOrder;
