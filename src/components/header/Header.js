import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

//
// icons and images ------------------------>
//
import logo from './../../../assets/images/logo.png';
import dashboard from './../../../assets/icons/dashboard.svg';
import management from './../../../assets/icons/management.svg';
import support2 from './../../../assets/icons/support2.svg';
import ticket2 from './../../../assets/icons/ticket2.svg';
import wallet from './../../../assets/icons/wallet.svg';
import ticket from './../../../assets/icons/ticket.svg';
import shopping_card from './../../../assets/icons/shopping_card.svg';
import pluscircle from './../../../assets/icons/pluscircle.svg';
import profile from './../../../assets/images/profile.jpg';
import arrow_down from './../../../assets/icons/arrow_down.svg';
import operator_edit from './../../../assets/icons/operator_edit.svg';
import change_password from './../../../assets/icons/change_password.svg';
import edit_profile from './../../../assets/icons/edit_profile.svg';
import logput from './../../../assets/icons/logput.svg';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-box container" >

                    <div className="logo-menu" >
                        <div className="logo-box" >
                            <img className="logo" src={logo} alt="logo" />
                        </div>
                        <ul className="menu" >
                            <li className="sub-menu" ><Link to="/dashboard"><img className="menu-icon" src={dashboard} alt="داشبورد" /> داشبورد</Link></li>
                            <li className="sub-menu" ><Link to="/create-ticket"><img className="menu-icon" src={ticket2} alt="بلیت" /> صدور بلیت </Link></li>
                            <li className="sub-menu" ><Link to="/management"><img className="menu-icon" src={management} alt="مدیریت" /> مدیریت</Link></li>
                            <li className="sub-menu" ><Link to="/support"><img className="menu-icon" src={support2} alt="پشتیبانی" /> پشتیبانی</Link></li>
                        </ul>
                    </div>
                    <div className="user-section" >
                        <div className="profile" >
                            <img className="profile-img" src={profile} alt="profile" />
                            <div className="profile-desc" >
                                <span className="profile-name" >Maryam Azizi</span>
                                <span className="profile-level" >مدیر</span>
                            </div>
                            <img className="my-arrow-down" src={arrow_down} alt="فلش" />
                            <ul className="manage-profile" >
                                <li className="sub-manage-profile" ><Link to="/addsellers"><img className="manage-profile-icon" src={operator_edit} alt="داشبورد" />مدیریت اپراتورها</Link></li>
                                <li className="sub-manage-profile" ><img className="manage-profile-icon" src={change_password} alt="تغییر رمز عبور" />تغییر رمز عبور</li>
                                <li className="sub-manage-profile" ><img className="manage-profile-icon" src={edit_profile} alt="ویرایش حساب کاربری" />ویرایش حساب کاربری</li>
                                <li className="sub-manage-profile" ><img className="manage-profile-icon" src={logput} alt="خروج" />خروج از حساب کاربری</li>
                            </ul>
                        </div>
                        <div className="shopping-box" >

                            <div className="wallet">
                                <img className="shoppings-icon border-left" src={wallet} alt="wallet" />
                                <span className="wallet-remain" >6,333,443 ت</span>
                                <img className="shoppings-icon border-right" src={pluscircle} alt="pluscircle" />
                            </div>
                            <div className="ticket" >
                                <img className="shoppings-icon border-left" src={ticket} alt="ticket" />
                                <span className="wallet-remain">دانلود بلیت</span>
                            </div>
                            <div className="shopping-card" >
                                <img className="shoppings-icon border-left" src={shopping_card} alt="shopping_card" />
                                <span className="wallet-remain">سبد خرید</span>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
