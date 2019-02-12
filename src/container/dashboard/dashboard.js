import React, { Component } from 'react';
import Calendar from 'react-persian-calendar'
//
// external component ------------------->
//
import Seller from './../../components/seller/Seller';
import report from './../../../assets/icons/report.svg';
import support from './../../../assets/icons/support.svg';
import call from './../../../assets/icons/call.svg';
import mail from './../../../assets/icons/mail.svg';
import questionmark from './../../../assets/icons/questionmark.svg';



import './dashboard.css';



class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        let todayMonth = document.querySelector('#calendar .header > span').innerHTML.slice(4)
        let todayDay = document.querySelector('.day.today').innerHTML

        this.setState({ todayDay: todayDay, todayMonth: todayMonth })
    }
    handler = () => {

    }
    render() {
        return (
            <div className="dashboard">
                <div className="dashboard1">
                    <div className="calender-weather-box" >
                        <div className="dashboard-calenrder">

                            <div className="calendar-left">
                                <div className="calendar-jalali" >
                                    <h1>{this.state.todayDay}</h1>
                                    <div className="calendar-jalali-detail">
                                        <h2>امروز</h2>
                                        <h2>{this.state.todayMonth}</h2>
                                    </div>
                                </div>
                                <div className="calendar-chris" >
                                    <h1>14</h1>
                                    <div className="calendar-chris-detail">
                                        <h2>Today</h2>
                                        <h2>March</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="calendar-right">
                                <Calendar onChange={this.handler} />
                            </div>

                        </div>
                        <div className="dashboard-weather" ></div>
                    </div>
                    <div className="sale-statistics" >
                        <div className="statistics-actions" >
                            <div className="sale-title" >
                                <h3>فروش<img src={questionmark} alt="فروش" /></h3>
                                <span>آمار کل فروش در سامانه </span>
                            </div>
                            <div className="dashboard-dates" >
                                <ul>
                                    <li className="time-active">هفته</li>
                                    <li>ماه</li>
                                    <li>سال</li>
                                </ul>
                            </div>
                        </div>
                        <div className="dashboard-chart" >


                        </div>
                    </div>

                </div>
                <div className="dashboard2">
                    <div className="dashbord-sellers">
                        <p className="dashbord-sellers-title" >عاملین فروش<img src={questionmark} alt="فروش" /></p>
                        <ul className="dashbord-manage-sellers" >

                            <Seller name="MOJTABA" level="عاملین فروش" />
                            <Seller name="ARAS" level="عاملین فروش" />
                            <Seller name="YAER" level="عاملین فروش" />

                        </ul>

                        <button className="checkout-request" >
                            اضافه کردن عامل فروش جدید
                        </button>


                    </div>
                    <div className="dashboard-report" >
                        <img src={report} alt="گزارش مالی" />
                        <span>گزارش فروش ومالی</span>
                    </div>
                    <div className="dashboard-support">
                        <h1><img src={support} alt="پشتیبانی" /> پشتیبانی</h1>
                        <div className="dashboard-support-text" >
                            <h2>پشتیبانی فنی</h2>
                            <p className="dashboard-support-phone">
                                ‍‍      <span>076-44495698 -- 076-44495698</span>
                                <img src={call} alt="تلفن" />
                            </p>
                            <p className="dashboard-support-mail">
                                ‍‍     <span>support@justkish.com</span>
                                <img src={mail} alt="ایمیل" />
                            </p>
                        </div>
                        <div className="dashboard-support-text" >
                            <h2>پشتیبانی فروش در جزیرخ کیش</h2>
                            <p className="dashboard-support-phone">
                                ‍‍      <span>076-44495698 -- 076-44495698</span>
                                <img src={call} alt="تلفن" />
                            </p>
                            <p className="dashboard-support-mail" >
                                ‍‍     <span>support@justkish.com</span>
                                <img src={mail} alt="ایمیل" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;