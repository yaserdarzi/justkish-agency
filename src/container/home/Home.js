import React, { Component } from 'react';
import { Link } from 'react-router';

//
// external compoent ---------------------------->
//
import SaleBox from '../../components/saleBox/SaleBox'

//
// icons and images --------------------------------->
//
import profile from './../../../assets/images/profile.jpg'
import operator_edit from './../../../assets/icons/operator_edit.svg'
import change_password from './../../../assets/icons/change_password.svg'
import edit_profile from './../../../assets/icons/edit_profile.svg'
import logput from './../../../assets/icons/logput.svg'
import report from './../../../assets/icons/report.svg'
import search from './../../../assets/icons/search.svg'
import arrowdown2 from './../../../assets/icons/arrow-down2.svg'
import user from './../../../assets/icons/user.svg'
import gridview from './../../../assets/icons/grid_view.svg'
import cardview from './../../../assets/icons/card_view.svg'
import pdf from './../../../assets/icons/pdf.svg'
import excel from './../../../assets/icons/excel.svg'


import './Home.css';


class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="home-box container" >

                    <div className="part1" >
                        <div className="checkout" >

                            <div className="checkout-profile" >
                                <img className="checkout-profile-img" src={profile} alt="profile" />
                                <div className="checkout-profile-desc" >
                                    <span className="checkout-profile-name" >Maryam Azizi</span>
                                    <span className="checkout-profile-level" >مدیر</span>
                                </div>
                            </div>
                            <div className="increas-credit" >
                                <span className="increas-credit-text" >افزایش اعتبار</span>
                                <div className="credit-show" >
                                    <p className="credit-show-number" >5,667,666</p>
                                    <span className="credit-show-unit" >تومان</span>
                                </div>
                            </div>

                        </div>
                        <button className="checkout-request" >
                            درخواست تصویه حساب
                        </button>
                        <div className="report" >
                            <img src={report} alt="گزارش مالی" />
                            <span>گزارش فروش ومالی</span>
                        </div>
                        <div className="account" >
                            <p>حساب کاربری شما</p>
                            <ul className="manage-account" >
                                <li className="sub-manage-profile" ><Link to="/addsellers"><img className="manage-profile-icon" src={operator_edit} alt="داشبورد" />مدیریت عاملین فروش</Link></li>
                                <li className="sub-manage-profile" ><img className="manage-profile-icon" src={change_password} alt="تغییر رمز عبور" />تغییر رمز عبور</li>
                                <li className="sub-manage-profile" ><img className="manage-profile-icon" src={edit_profile} alt="ویرایش حساب کاربری" />ویرایش حساب کاربری</li>
                                <li className="sub-manage-profile" ><img className="manage-profile-icon" src={logput} alt="خروج" />خروج از حساب کاربری</li>
                            </ul>

                        </div>
                    </div>
                    <div className="part2" >
                        <div className="filter" >
                            <div className="date" >
                                <div className="from" >از</div>
                                <div className="to" >تا</div>
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
