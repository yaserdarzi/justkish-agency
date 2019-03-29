import React, { Component } from 'react';

import product from '../../assets/images/product.jpg'
import PriceDigit from '../priceDigit/priceDigit';
import TimeStamp from '../times/timespanToDate'; 
import DateJalaly from '../times/dateMiladiToShamsi';

import './reportBox.css';

class ReportBox extends Component {

    componentDidMount(){
      //  console.log(this.props.tours.images)
    }

    render() {
        return (
        <div className="reports-search-table-body" >
            <div>{this.props.data.id }</div>
            <div className="reports-search-table-child2">{this.props.data.ticket_number}</div>
            <div className="reports-search-table-child3" >
                <div className="reports-search-table-play">{this.props.tours.title}</div>
                <div>
                    <span>{this.props.data.count}  عدد</span>  
                    {/* <span> رزرو  265118 </span> /
                    <span> رفرنس xz125659</span> */}
                </div>
            </div> 
            <div>{DateJalaly(TimeStamp(this.props.data.factor_invoice.created_at_timestamp))}</div>
            <div>{this.props.data.agency_agent.name}</div>
            <div className="reports-search-table-child-bold" >{PriceDigit(this.props.data.agencyProfit,'price')} ت</div>
            <div className="reports-search-table-child-bold" >{PriceDigit(this.props.data.agency_agent.profit,'price')} ت</div>
        </div>
        );
    }
}

export default ReportBox;
