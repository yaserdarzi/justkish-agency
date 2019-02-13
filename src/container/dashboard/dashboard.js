import React, { Component } from 'react';
import { Link } from 'react-router';
import Calendar from 'react-persian-calendar';

//
// external component ------------------->
//



//
// external component ------------------->
//
import Seller from './../../components/seller/Seller';
import base from '../../api/baseURL';
import Token from '../../api/token';

//
// icons and images --------------------------------->
//
import report from './../../../assets/icons/report.svg'
import support from './../../../assets/icons/support.svg'
import call from './../../../assets/icons/call.svg'
import mail from './../../../assets/icons/mail.svg'
import questionmark from './../../../assets/icons/questionmark.svg'


import './dashboard.css';



class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            agentLoading:true,
            agents:[],

        }
    }


    componentDidMount() {
        console.log()
        this.getAllSellers();
        this.getCalenderDayeMonth();

    }



    //
    // fetching all sellers ------------------------------------------------
    //
    getAllSellers() {
        // get all seler and show in sellers part -------->
        this.getData('agency/agent')

    }

    getData(key) {

        this.setState({
            agentLoading: true
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
                    agents: responsJson.data,
                    agentLoading: false
                })
            })
    }



    // 
    //   Seller managemts ------------------------>
    //
    sellermanagment = () => {
        
        window.location.pathname ='/addsellers'

    }

    

    getCalenderDayeMonth = () => {
        // jalali day month
        let currentMonthJalali = document.querySelector('#calendar .header > span').innerHTML.slice(4)
        let currentDayJalali = document.querySelector('.day.today').innerHTML

        // chris day month
        let monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        let currentMonthChris = monthNames[(new Date()).getMonth()]
        let currentDayChris = (new Date()).getDay()

        this.setState({ currentDayJalali: currentDayJalali,
                        currentMonthJalali: currentMonthJalali,
                        currentDayChris: currentDayChris,
                        currentMonthChris: currentMonthChris
                     })
    }

    handler = () => {

    }

    render() {

        const allAgents = (
            // render all agents and pass props name , avatar , level ------->
            this.state.agentLoading === false ? this.state.agents.map((item, index) =>
                <Seller key={index}
                    id={item.id}
                    name={item.name}
                    editAgent={() => this.editSellerModalOpen(item.id)}
                    avatar={item.image}
                    level={item.type === 'normal' ? 'عامل فروش' : 'مدیر'} />
            ) : <div className="loader"></div>

        )


        return (
            <div className="dashboard">
                <div className="dashboard1">
                    <div className="calender-weather-box" >
                        <div className="dashboard-calenrder">

                            <div className="calendar-left">
                                <div className="calendar-jalali" >
                                    <h1>{this.state.currentDayJalali}</h1>
                                    <div className="calendar-jalali-detail">
                                        <h2>امروز</h2>
                                        <h2>{this.state.currentMonthJalali}</h2>
                                    </div>
                                </div>
                                <div className="calendar-chris" >
                                    <h1>{this.state.currentDayChris}</h1>
                                    <div className="calendar-chris-detail">
                                        <h2>Today</h2>
                                        <h2>{this.state.currentMonthChris}</h2>
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

                            {/* <Seller name="MOJTABA" level="عاملین فروش" /> */}
                            {allAgents}

                        </ul>

                        <Link to="/addsellers" className="checkout-request" >
                            مدیریت عاملین فروش
                        </Link>


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