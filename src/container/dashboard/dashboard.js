import React, { Component } from 'react';

//
// external component ------------------->
//
import Seller from './../../components/seller/Seller'
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
        this.getAllSellers();

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
                //console.log(responsJson.data)
                this.setState({
                    agents: responsJson.data,
                    agentLoading: false
                })
            })
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
                        <div className="dashboard-calenrder" ></div>
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