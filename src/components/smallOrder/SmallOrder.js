import React, { Component } from 'react';



import MinusPlus from './../common/MinusPlus/MinusPlus'
import PriceDigit from '../priceDigit/priceDigit';


import deletee from './../../../assets/icons/delete.svg';



import './SmallOrder.css';




class SmallOrder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            person:0,
            agentLoading:false
        }
    }


        //minus plus 
        handleFilterUpdate = (newValue) => {
            this.setState({
                person: newValue
            });
        }
    

    render() {

        const renderPrices = ( 
            this.props.prices !== undefined ?
            // <p>{this.props.prices.product_price_range.price}</p>

            <li key={this.props.prices.product_price_range.id} className="create-ticket-tourist-change-li">
            {console.log(this.props.prices.count)}
            <div className="notCloseMenuLand">
                <h6 className="notCloseMenuLand">{this.props.prices.product_price_range.title}</h6>
                <span>{PriceDigit(this.props.prices.product_price_range.price,'price')}</span> 
                <p className="notCloseMenuLand">({this.props.prices.product_price_range.min} تا {this.props.prices.product_price_range.max} سال)</p> 
             
            </div>
            <div className="MinusPlus" >
                <MinusPlus actionDec={this.actionDec} actionInc={() => this.actionInc} change={this.handleFilterUpdate} counter={this.props.prices.count}   />
            </div>
        </li>
             
            : ''
           

        )

        return (
            <div >
                <div className="create-ticket-your-order">
                    <div className="create-ticket-your-order-box1">
                        <p className="create-ticket-your-order-title" ><img src={deletee} alt="حذف" />{this.props.title}</p>
                        <div className="create-ticket-your-order-numbers">
                    
                        </div>
                    </div>
                    <div className="create-ticket-your-order-box2">
                        <span> {this.props.date}</span>  
                    </div>
                    <div className="MinusPlus" >
                            {renderPrices}
                            </div>
                </div>
            </div>
        );
    }
}

export default SmallOrder;
