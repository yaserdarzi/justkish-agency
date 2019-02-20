import React, { Component } from 'react';
import { DateRangePicker } from "react-advance-jalaali-datepicker";

//
// external compoent ---------------------------->
//
import SaleBox from '../../components/saleBox/SaleBox'
import Token from '../../api/token';
import base from '../../api/baseURL';
import SideLeft from '../../components/sideLeft/sideLeft';



//
// icons and images --------------------------------->
//
import profile from './../../../assets/images/profile.jpg'

import search from './../../../assets/icons/search.svg'
import arrowdown2 from './../../../assets/icons/arrow-down2.svg'
import user from './../../../assets/icons/user.svg'
import gridview from './../../../assets/icons/grid_view.svg'
import cardview from './../../../assets/icons/card_view.svg'
import pdf from './../../../assets/icons/pdf.svg'
import excel from './../../../assets/icons/excel.svg'


import './Home.css';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {},
            userType: '',
            isLoading: false,
            userAvatar: 'https://www.drupal.org/files/issues/default-avatar.png'

        }
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
        console.log(prop)
        return <input className="popo" {...props} ></input>;
    }


    render() {





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
                                        <span>عامل فروش</span>
                                    </span>
                                    <img src={arrowdown2} alt="فلش" />
                                    <ul className="sellers-list" >

                                        <p className="all-sellers" >همه عاملین فروش</p>

                                        <li className="seller-list" >
                                            <img className="seller-img" src={profile} alt="عاملین" />
                                            <span className="seller-box" >
                                                <span className="seller-name" >ZAHRA AMIRI</span>
                                                <span className="seller-level" >عامل فروش ۱</span>
                                            </span>
                                        </li>
                                        <li className="seller-list" >
                                            <img className="seller-img" src={profile} alt="عاملین" />
                                            <span className="seller-box" >
                                                <span className="seller-name" >MONA VAFA</span>
                                                <span className="seller-level" >عامل فروش ۲</span>
                                            </span>
                                        </li>
                                        <li className="seller-list" >
                                            <img className="seller-img" src={profile} alt="عاملین" />
                                            <span className="seller-box" >
                                                <span className="seller-name" >LEYLA HATAMI</span>
                                                <span className="seller-level" >عامل فروش ۳</span>
                                            </span>
                                        </li>

                                    </ul>

                                </div>

                                <div className="sell-report" >
                                    <span className="sell-report-right" >
                                        <img src={user} alt="کاربر" />
                                        <span>گزارش فروش</span>
                                    </span>
                                    <img src={arrowdown2} alt="فلش" />
                                    <ul className="report-lists" >
                                        <li className="report-list" >
                                            <span>گزارش فروش</span>
                                        </li>
                                        <li className="report-list" >
                                            <span>گزارش مالی</span>
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
                                    <span> 16,000,000</span>
                                </p>
                                <p className="sale-text" >
                                    <span>تعداد فروش </span>
                                    <span>150</span>
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
                            <SaleBox />
                            <SaleBox />
                            <SaleBox />
                            <SaleBox />
                            <SaleBox />
                            <SaleBox />
                            <SaleBox />
                            <SaleBox />
                            <SaleBox />
                            <SaleBox />
                            <SaleBox />
                            <SaleBox />
                            <SaleBox />

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
