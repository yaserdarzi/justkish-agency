import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import base from '../../api/baseURL';
import Token from '../../api/token';
import PriceDigit from '../../components/priceDigit/priceDigit';
import TimeStamp from '../../components/times/timespanToDate';
import MiladiToJalaly from '../../components/times/dateMiladiToShamsi';



//
// icons and images ------------------------------------------------->
//
import email from './../../../assets/icons/email.svg'
import sms from './../../../assets/icons/sms.svg'
import print from './../../../assets/icons/print.svg'



import './TicketIssued.css';


class TicketIssued extends Component {

    constructor(props) {
        super(props)
        this.state = {
            transaction: true,
            allTicket:[],
            isLoadingAllTicket:false,


        }
    }


    componentDidMount(){
        console.log("component did mount!");
        this._getAllTicket(); // fetch all tickets --->

    }


    //
    // Get all ticket lists --------------------------------------------------->
    //

    _getAllTicket =() =>{
        this.getData('agency/factor?page=0');
        
    }

    getData(key) {

        this.setState({
            isLoadingAllTicket: true
        })

        const url = base.baseURL + key;

        return fetch(url, {
            method: "GET",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "agent": "web",
                "Authorization": Token
            },
            redirect: "follow",
            referrer: "no-referrer"
        })
            .then(response => response.json())
            .then(responsJson => {
                console.log(responsJson.data)
                this.setState({
                    allTicket: responsJson.data,
                    isLoadingAllTicket: false  // stop show loadig ------------------->!
                })
            })
    }

    //
    // show ticket and get ticket Id ----------------------->
    //

    _showTicket =(id) => {
        console.log(id);
        browserHistory.push({pathname:'/view-ticket',search: '?id=' + id, state: id })
    }


    render() {

        const renderAllTickets = (
            this.state.isLoadingAllTicket === false ? 
                this.state.allTicket.map((item,index) =>
              
                <div className="ticket-issued-search-list" key={index}>
                    <p className="ticket-issued-search-list-cell-1">{item.id}</p>
                    <p className="ticket-issued-search-list-cell">{item.customer.name}</p>
                    {/* <p className="ticket-issued-search-list-cell">اسم عامل فروش</p> */}
                    <p className="ticket-issued-search-list-cell">{PriceDigit(item.total_count,'price')}</p>
                    <p className="ticket-issued-search-list-cell">{MiladiToJalaly(TimeStamp(item.created_at_timestamp))}</p>
                    <div className="ticket-issued-search-list-cell">
                        {/* <Link to="/view-ticket"><img src={email} alt="ایمیل" /></Link>
                        <Link to="/view-ticket"><img src={sms} alt="پیام کوتاه" /></Link> */}
                        <div  onClick={() => this._showTicket(item.id)}><img src={print} alt="پرینت" /></div>
                    </div>
                </div>
                            
                            )
        :
        <div className="loader"></div>
        )

        return (

            <div className="ticket-issued">
                <div className="ticket-issued-box container">
                    <div className="ticket-issued-search">
                        <div className="ticket-issued-search-title" >
                            <h1>بلیت های صادر شده</h1>
                            <div className="ticket-issued-search-input">
                                <i className="fas fa-search"></i>
                                <input className="" placeholder="جستجو در نتایج" />
                            </div>
                        </div>
                        <div className="ticket-issued-search-lists table-desktop" >
                            <div className="ticket-issued-search-list-titles" >
                                <p className="ticket-issued-search-list-title-1">شماره </p>
                                <p className="ticket-issued-search-list-title">نام خریدار</p>
                                {/* <p className="ticket-issued-search-list-title"> عامل فروش</p> */}
                                <p className="ticket-issued-search-list-title">مبلغ </p>
                                <p className="ticket-issued-search-list-title">تاریخ صدور </p>
                                <p className="ticket-issued-search-list-title">دریافت بلیت </p>
                            </div>
                      
                            {renderAllTickets}

                        </div>
                        <div className="ticket-issued-search-lists table-tablet" >
                        {/* {renderAllTickets} */}

                        </div>
                       
                    </div>
                </div>

            </div>
        );
    }
}

export default TicketIssued;
