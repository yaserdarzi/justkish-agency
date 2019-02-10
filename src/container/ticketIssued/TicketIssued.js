import React, { Component } from 'react';

import email from './../../../assets/icons/email.svg'
import sms from './../../../assets/icons/sms.svg'
import print from './../../../assets/icons/print.svg'



import './TicketIssued.css';


class TicketIssued extends Component {

    constructor(props) {
        super(props)
        this.state = {
            transaction: true
        }
    }

    render() {


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
                                <p className="ticket-issued-search-list-title"> عامل فروش</p>
                                <p className="ticket-issued-search-list-title">مبلغ </p>
                                <p className="ticket-issued-search-list-title">تاریخ صدور </p>
                                <p className="ticket-issued-search-list-title">دریافت بلیت </p>
                            </div>
                            <div className="ticket-issued-search-list">
                                <p className="ticket-issued-search-list-cell-1">1</p>
                                <p className="ticket-issued-search-list-cell">محمد میرزایی</p>
                                <p className="ticket-issued-search-list-cell">محمد علی یاری</p>
                                <p className="ticket-issued-search-list-cell">265.000</p>
                                <p className="ticket-issued-search-list-cell">15 اسفند 1397</p>
                                <p className="ticket-issued-search-list-cell">
                                    <img src={email} alt="ایمیل" />
                                    <img src={sms} alt="پیام کوتاه" />
                                    <img src={print} alt="پرینت" />
                                </p>
                            </div>
                            <div className="ticket-issued-search-list">
                                <p className="ticket-issued-search-list-cell-1">1</p>
                                <p className="ticket-issued-search-list-cell">محمد میرزایی</p>
                                <p className="ticket-issued-search-list-cell">محمد علی یاری</p>
                                <p className="ticket-issued-search-list-cell">265.000</p>
                                <p className="ticket-issued-search-list-cell">15 اسفند 1397</p>
                                <p className="ticket-issued-search-list-cell">
                                    <img src={email} alt="ایمیل" />
                                    <img src={sms} alt="پیام کوتاه" />
                                    <img src={print} alt="پرینت" />
                                </p>
                            </div>

                        </div>
                        <div className="ticket-issued-search-lists table-tablet" >
                            <div className="ticket-issued-search-list-tablet" >
                                <div className="ticket-issued-search-list" >
                                    <p className="ticket-issued-search-list-title" >شماره </p>
                                    <p className="ticket-issued-search-list-cell">1  </p>
                                </div>
                                <div className="ticket-issued-search-list" >
                                    <p className="ticket-issued-search-list-title" >نام خریدار </p>
                                    <p className="ticket-issued-search-list-cell">محمد میرزایی  </p>
                                </div>
                                <div className="ticket-issued-search-list" >
                                    <p className="ticket-issued-search-list-title" > عامل فروش </p>
                                    <p className="ticket-issued-search-list-cell">محمد علی یاری  </p>
                                </div>
                                <div className="ticket-issued-search-list" >
                                    <p className="ticket-issued-search-list-title" >مبلغ </p>
                                    <p className="ticket-issued-search-list-cell">265.000  </p>
                                </div>
                                <div className="ticket-issued-search-list" >
                                    <p className="ticket-issued-search-list-title" >تاریخ صدور </p>
                                    <p className="ticket-issued-search-list-cell">15 اسفند 1397  </p>
                                </div>
                                <div className="ticket-issued-search-list" >
                                    <p className="ticket-issued-search-list-title" >دریافت بلیت </p>
                                    <p className="ticket-issued-search-list-cell">
                                        <img src={email} alt="ایمیل" />
                                        <img src={sms} alt="پیام کوتاه" />
                                        <img src={print} alt="پرینت" />
                                    </p>
                                </div>

                            </div>
                            <div className="ticket-issued-search-list-tablet" >
                                <div className="ticket-issued-search-list" >
                                    <p className="ticket-issued-search-list-title" >شماره </p>
                                    <p className="ticket-issued-search-list-cell">1  </p>
                                </div>
                                <div className="ticket-issued-search-list" >
                                    <p className="ticket-issued-search-list-title" >نام خریدار </p>
                                    <p className="ticket-issued-search-list-cell">محمد میرزایی  </p>
                                </div>
                                <div className="ticket-issued-search-list" >
                                    <p className="ticket-issued-search-list-title" > عامل فروش </p>
                                    <p className="ticket-issued-search-list-cell">محمد علی یاری  </p>
                                </div>
                                <div className="ticket-issued-search-list" >
                                    <p className="ticket-issued-search-list-title" >مبلغ </p>
                                    <p className="ticket-issued-search-list-cell">265.000  </p>
                                </div>
                                <div className="ticket-issued-search-list" >
                                    <p className="ticket-issued-search-list-title" >تاریخ صدور </p>
                                    <p className="ticket-issued-search-list-cell">15 اسفند 1397  </p>
                                </div>
                                <div className="ticket-issued-search-list" >
                                    <p className="ticket-issued-search-list-title" >دریافت بلیت </p>
                                    <p className="ticket-issued-search-list-cell">
                                        <img src={email} alt="ایمیل" />
                                        <img src={sms} alt="پیام کوتاه" />
                                        <img src={print} alt="پرینت" />
                                    </p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default TicketIssued;
