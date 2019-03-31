import React, { Component } from 'react';
import { DateRangePicker } from "react-advance-jalaali-datepicker";
import { Link } from 'react-router';

//
// external compoent ---------------------------->
//
import SaleBox from '../../components/saleBox/SaleBox'
import Token from '../../api/token';
import base from '../../api/baseURL';
import SideLeft from '../../components/sideLeft/sideLeft';
import priceDigit from '../../components/priceDigit/priceDigit';



//
// icons and images --------------------------------->
//
import profile from '../../assets/images/profile.jpg'

import search from '../../assets/icons/search.svg'
import arrowdown2 from '../../assets/icons/arrow-down2.svg'
import user from '../../assets/icons/user.svg'
import gridview from '../../assets/icons/grid_view.svg'
import cardview from '../../assets/icons/card_view.svg'
import pdf from '../../assets/icons/pdf.svg'
import excel from '../../assets/icons/excel.svg'


import './Home.css';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {},
            userType: '',
            isLoading: false,
            userAvatar: 'https://www.drupal.org/files/issues/default-avatar.png',
            totalPrice: ' .  .  .',
            allReport:[]

        }
    }
    componentWillMount(){

        this.getAllReport();
        this._getAllAgents();

    }



    // date select 
    change(unix, formatted) {
        console.log(unix)
        console.log(formatted)
    }

    changeTimeDate(unix, formatted) {
        console.log(unix)
        console.log(formatted)
    }

    DatePickerInput(props) {
        console.log(this.props)
        return <input className="popo" {...props} ></input>;
    }



    getAllReport =() => {
        this.getData('agency/report/sales?page=0&type=mali');
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
                    allReport: responsJson.data.factorProduct,
                    totalPrice: responsJson.data.totalPrice,
                    countAll: responsJson.data.countAll,
                    isLoadingAllReport: false ,
          
                })
            })
    }


     // 
     // Get All Agents --------->
     //
 
     _getAllAgents =async() => {
        await this.fetchAgents('agency/agent');
 
     }
 
     fetchAgents(key) {
 
         this.setState({
            isLoadingAllAgents: true
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
                     AllAgents:responsJson.data,
                     isLoadingAllAgents : false
                 })
             })
     }



    render() {

        const renderAllReport = (
            this.state.isLoadingAllReport === false ? 
                this.state.allReport.map((item,index) =>
              
                 
                      <SaleBox 
                        key={index} 
                        data={item} 
                        tours={item.products != null ? item.products : item.tours} 
                      />
               
                            
                    )     :
                <div className="loader"></div>
            );

            const renderAllAgents = (
                this.state.isLoadingAllAgents === false ?
                     this.state.AllAgents.map((item,index) => 
                     <li className="seller-list" key={index}>
                         <img className="seller-img" src={item.image} alt="عاملین" />
                         <span className="seller-box" >
                             <span className="seller-name" >{item.name}</span>
                             <span className="seller-level" >{item.type === 'normal' ? 'عامل فروش' : 'مدیر'}</span>
                         </span>
                     </li>
                     ) :
                 ''
             )



        return (
            <div className="home">
                {this.state.isLoading === true ? <div className="LoadingPattern"><div className="loader"></div></div> : ''}
                <div className="home-box container" >

                    <div className="part1" >
                        <SideLeft />
                    </div>
                    <div className="part2" >
                        <div className="filter" >
                            <div className="date" >
                                <div className="datePicker">

                                    <DateRangePicker
                                        placeholderStart="تاریخ شروع"
                                        placeholderEnd="تاریخ پایان"
                                        format="jYYYY/jMM/jDD"
                                        onChangeStart={this.change}
                                        onChangeEnd={this.changeTimeDate}
                                        idStart="rangePickerStart"
                                        idEnd="rangePickerEnd"
                                    />

                                </div>
                            </div>
                            <div className="search-sellers">

                                <div className="sellers" >
                                    <span className="selers-right" >
                                        <img src={user} alt="کاربر" />
                                        <span>کانتر من ها </span>
                                    </span>
                                    <img src={arrowdown2} alt="فلش" />
                                    <ul className="sellers-list" >

                                        <p className="all-sellers" >همه  کانترمن ها</p>

                                        {renderAllAgents}
                                
                                    </ul>

                                </div>

                                <div className="sell-report" >
                                    <span className="sell-report-right" >
                                        <img src={user} alt="کاربر" />
                                        <span>گزارش مالی</span>
                                    </span>
                                    <img src={arrowdown2} alt="فلش" />
                                    <ul className="report-lists" >
                                        <li className="report-list" >
                                            <Link to ='/reports'>
                                                <span>گزارش فروش</span>
                                            </Link>
                                        </li>
                                        <li className="report-list" >
                                            <Link to='/management'>
                                                <span>گزارش مالی</span>
                                            </Link>
                                        </li>
                                    </ul></div>
                                <button className="search-btn" >
                                    <img src={search} alt="جستجو" ></img>
                                </button>
                            </div>

                        </div>
                        <div className="all-income" >
                            <div className="all-income-sale" >
                                <p className="income-text" >
                                    <span>مجموع درآمد</span> 
                                    <span> {priceDigit(this.state.totalPrice,'price')}</span>
                                    <span> تومان </span>
                                </p>
                                <p className="sale-text" >
                                    <span>تعداد فروش </span>
                                    <span>{this.state.countAll}</span>
                                </p>
                            </div>
                            <div className="pdf-grid" >
                                <div>
                                    <img src={pdf} alt="پی دی اف" />
                                    <img src={excel} alt="اکسل" />
                                </div>
                                <div>
                                    <img src={gridview} alt="grid" />
                                    <img src={cardview} alt="card" />
                                </div>
                            </div>
                        </div>
                        <div className="products" >
                            {/* <SaleBox /> */}

                            {/* {this.state.allReport.length > 0 ?  renderAllReport : <div className="no-data-for-showing-grid"><p>اطلاعاتی برای نمایش ثبت نشده است.</p></div>} */}
                            {renderAllReport}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
