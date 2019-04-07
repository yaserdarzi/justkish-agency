import React, { Component } from 'react';
import { Link } from 'react-router';
import Calendar from 'react-persian-calendar';
import Chart from 'react-apexcharts'
//
// external component ------------------->
//



//
// external component ------------------->
//
import Seller from './../../components/seller/Seller';
import base from '../../api/baseURL';
import Token from '../../api/token';
// import PriceDigit from '../../components/priceDigit/priceDigit';

//
// icons and images --------------------------------->
//
import report from '../../assets/icons/report.svg'
import support from '../../assets/icons/support.svg'
import call from '../../assets/icons/call.svg'
import mail from '../../assets/icons/mail.svg'
import questionmark from '../../assets/icons/questionmark.svg'
import sun from '../../assets/icons/201.svg'
import suncloud from '../../assets/icons/200.svg'
import rain from '../../assets/icons/202.svg'
import cloud from '../../assets/icons/203.svg'
import humidity from '../../assets/icons/humidity.svg'


import './dashboard.css';

var month = [];


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            agentLoading: true,
            agents: [],
            dataChart: [],
            userType:'',


            options: {
                chart: {
                    id: 'apexchart-example'
                },
                grid: {
                    xaxis: {
                        lines: {
                            show: false
                        }
                    },
                    yaxis: {
                        lines: {
                            show: false
                        }
                    }
                },

                fill: {
                    type: "gradient",
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.7,
                        opacityTo: 0.9,
                        colorStops: [
                            {
                                offset: 0,
                                color: "#EB656F",
                                opacity: 1
                            },
                            {
                                offset: 20,
                                color: "#FAD375",
                                opacity: 1
                            },
                            {
                                offset: 60,
                                color: "#61DBC3",
                                opacity: 1
                            },
                            {
                                offset: 100,
                                color: "#95DA74",
                                opacity: 1
                            }
                        ]
                    }
                },
                dataLabels: {
                    enabled: true,
                    style: {
                        colors: ['transparent']
                    }
                },
                xaxis: {
                    // chart horizontal number
                    // categories: ['شنبه', 'فروردین', '15', 'فروردین', 'فروردین', 'فروردین', 'فروردین', 'فروردین', 'فروردین', 'فروردین', 'فروردین', 'فروردین', 'فروردین', 'فروردین', 'فروردین', 'فروردین', 'فروردین', 'فروردین'],
                    categories:  [] ,
                    labels: {
                        style: {
                            // colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8'],
                            fontSize: '30px',
                        }
                    }
                }


            },

            dataLabels: {

                style: {
                    colors: ['#F44336', '#E91E63', '#9C27B0']
                }
            },
            series: [{
                name: ' مقدار ',
                data :[] ,
                // data: [300000, 400000, 450000, 500000, 490000, 600000, 700000, 910000, 600000, 700000, 910000, 300000],


                style: {
                    colors: ['red', 'blue'],
                    fontSize: '10px'
                }
            }
            ]


        }
        // this.weatherHandler()

    }
    componentWillMount(){

    }


    componentDidMount =async() => {

      await  this._getDataChart();
      await  this._getUserInformation();
      await  this.getCalenderDayeMonth();
      await this.weatherHandler();

        

        // if is admin must show that -------------------->
       if(this.state.userType === "admin")
       {
          // console.log("ths user is admin!")
           this.getAllSellers(); // namayesh amelin forosh ---->
       }
       else{
           console.log('the user is normal!')
       }
       
    }


    _getUserInformation =async() => {
       await this.fetchingUserINfo('agency/profile');

    }
  
    fetchingUserINfo(key) {

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
               // console.log(responsJson.data)
              //  console.log(responsJson.data.type)
                this.setState({
                    userType:responsJson.data.type
                })
            })
    }

    //
    // Data Charting for report ------------------------->
    //
    _getDataChart =async() => {
        await this.fetchingDataChart('agency/report/chart');
    }

    fetchingDataChart(key) {

        // this.setState({
        //     agentLoading: true
        // })

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
            .then(responsJson =>     {
               // console.log(responsJson.data)
              //  console.log(responsJson.data.month)
                this.setState({
                    options : {
                        xaxis: {
                            categories: responsJson.data.month,
                        }
                    },
                    series: [{
                        data:responsJson.data.price ,
                    }]

                })

               
            })

           
    }




    getState = () =>{
        // console.log(this.state.dataChart);
      
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
                //  console.log(responsJson.data)
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

        window.location.pathname = '/addsellers'

    }



    getCalenderDayeMonth = async() => {

        try{
                    // jalali day month
         let currentMonthJalali = document.querySelector('#calendar .header > span').innerHTML.slice(4)
         let currentDayJalali = document.querySelector('.day.today').innerHTML

        // chris day month
        let monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        let currentMonthChris = monthNames[(new Date()).getMonth()]
        let currentDayChris = (new Date()).getDate()


       await this.setState({
            currentDayJalali: currentDayJalali,
            currentMonthJalali: currentMonthJalali,
            currentDayChris: currentDayChris,
            currentMonthChris: currentMonthChris
        })
        }
        catch(e) {
            console.log(e)
        }
    }


    weatherHandler = async () => {

       try{
        var APPID = "7d1b757c28035a0d3f9608ee7c54278a"
        var temp, loc, icon, humidity, wind, direction;

        var url = "https://api.openweathermap.org/data/2.5/weather?" +
            "q=Kish,IR" +
            "&APPID=" + APPID;
        await fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({ data: data })
               // console.log(data)
            });

        var data = this.state.data
        var weather = {};

        temp = document.getElementById('temperature')
        loc = document.getElementById('location')
        icon = document.getElementById('icon')
        humidity = document.getElementById('humidity')
        wind = document.getElementById('wind')
        direction = document.getElementById('direction')


        wind.innerHTML = data.weather[0].id;
        direction.innerHTML = Math.round(data.wind.deg);
        humidity.innerHTML = data.main.humidity;
        // loc.innerHTML = weather.loc;
        temp.innerHTML = Math.round(data.main.temp / 10)

        // wind.innerHTML = '20';
        // direction.innerHTML = '230';
        // humidity.innerHTML = '60';
        // // loc.innerHTML = weather.loc;
        // temp.innerHTML = '30'


        if (weather.temp < 5) {
            icon.src = rain
        } else if (weather.temp > 5 && weather.temp < 10) {
            icon.src = cloud
        } else if (weather.temp < 20 && weather.temp > 10) {
            icon.src = suncloud
        } else {
            icon.src = sun
        }


       }
       catch (e) {
           console.log(e)
       }

    }





    handler = () => {

    }

    render() {

        const WeatherApp = (
            <div className="dashboard-weather-app">
                <div className="dashboard-weather-right" >
                    <div className="dashboard-weather-top" >
                        <img id="icon" width="75px" alt="آب و هوا" />
                    </div>
                    <div className="dashboard-weather-bottom" >
                        <div className="dashboard-weather-humidity" >
                            <img id="icon" height="16px" src={humidity} alt="رطوبت" />
                            <p>
                                <span id="humidity">رطوبت</span>
                                <span>%</span>
                            </p>
                        </div>
                        <div className="dashboard-weather-wind" >
                            <p>
                                <span>km/h</span>
                                <span id="wind" >سرعت باد</span>
                            </p>
                        </div>
                        <div className="dashboard-weather-dir" >
                            <p>
                                <span>N</span>
                                <span id="direction" >جهت باد</span>
                            </p>
                        </div>



                    </div>
                </div>

                <div className="dashboard-weather-left">
                    <div className="dashboard-weather-temperature">
                        <span id="temperature">
                            دما
                        </span>
                        <span className="dashboard-weather-temperature-sign" >°</span>
                    </div>
                    <div className="dashboard-weather-location">
                        <span id="location">
                            کیش
                        </span>
                    </div>
                </div>
            </div>
        )

        const allAgents = (
            // render all agents and pass props name , avatar , level ------->
            this.state.agentLoading === false ? this.state.agents.map((item, index) =>
                <Seller key={index}
                    id={item.id}
                    name={item.name}
                    editAgent={() => this.editSellerModalOpen(item.id)}
                    avatar={item.image}
                    level={item.type === 'normal' ? 'کانترمن' : 'مدیر'} />
            ) : <div className="loader"></div>

        )

        return (
            <div className="dashboard">
                <div className="dashboard1">
                    <div className="calender-weather-box" >
                        <div className="dashboard-weather" id="dashboardweather" >
                            {WeatherApp}
                        </div>
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

                    </div>
                    <div className="sale-statistics" >
                        <div className="statistics-actions" >
                            <div className="sale-title" onClick={() => this.getState()} >
                                <h3>فروش<img src={questionmark} alt="فروش" /></h3>
                                <span>آمار کل فروش در سامانه </span>
                            </div>
                            <div className="dashboard-dates" >
                                <ul>
                                    <li className="time-active">هفته</li>
                                        {/* <li>ماه</li>
                                        <li>سال</li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="dashboard-chart" >

                            <Chart options={this.state.options} series={this.state.series} type="bar" width={'100%'} height={500} />

                            <svg className="green" width="100" height="50" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#30afff" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#e900ed" stopOpacity="1" />
                                </linearGradient>
                            </svg>

                        </div>
                    </div>

                </div>
                <div className="dashboard2">

      


                    <Link to="/reports">
                        <div className="dashboard-report" >
                            <img src={report} alt="گزارش مالی" />
                            <span>گزارش فروش ومالی</span>
                        </div>
                    </Link>
                    <div className="dashboard-support">
                        <h1><img src={support} alt="پشتیبانی" /> پشتیبانی</h1>
                        <div className="dashboard-support-text" >
                            <h2>پشتیبانی فنی</h2>
                            <p className="dashboard-support-phone"> 
                                ‍‍      <span>09032408202</span>
                                <img src={call} alt="تلفن" />
                            </p>
                            <p className="dashboard-support-mail">
                                ‍‍     <span>support@justkish.com</span>
                                <img src={mail} alt="ایمیل" />
                            </p>
                        </div>
                        <div className="dashboard-support-text" >
                            <h2>پشتیبانی فروش در جزیره کیش</h2>
                            <p className="dashboard-support-phone">
                                {/* ‍‍      <span>076-44495698 -- 076-44495698</span> */}
                                ‍‍      <span>09347689322</span>
                                <img src={call} alt="تلفن" />
                            </p>
                            <p className="dashboard-support-mail" >
                                ‍‍     <span>snappkish@gmail.com</span>
                                <img src={mail} alt="ایمیل" />
                            </p>
                        </div>
                    </div>


                    {this.state.userType ==="admin" ? ( 
                    <div className="dashbord-sellers">
                        <p className="dashbord-sellers-title" > کانترمن ها<img src={questionmark} alt="فروش" /></p>
                        <ul className="dashbord-manage-sellers" >
                            {allAgents}
                        </ul>

                        <Link to="/addsellers" className="checkout-request" >
                            مدیریت کانترمن ها
                        </Link>
                    </div>
                ) : ''}
             


             
                </div>
            </div>
        );
    }
}

export default Dashboard;