import React, { Component } from 'react';



import MinusPlus from './../common/MinusPlus/MinusPlus'



import deletee from './../../../assets/icons/delete.svg';



import './SmallOrder.css';




class SmallOrder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            person:0
        }
    }


        //minus plus 
        handleFilterUpdate = (newValue) => {
            this.setState({
                person: newValue
            });
        }
    

    render() {
        return (
            <div >
                <div className="create-ticket-your-order">
                    <div className="create-ticket-your-order-box1">
                        <p className="create-ticket-your-order-title" ><img src={deletee} alt="حذف" />{this.props.title}</p>
                        <div className="create-ticket-your-order-numbers">
                            <div className="MinusPlus" >
                                <MinusPlus change={this.handleFilterUpdate} counter={this.state.person} name={this.state.person} />
                            </div>
                        </div>
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
