import React, { Component } from 'react';

import profile from './../../../assets/images/profile.jpg'
import operator_edit from './../../../assets/icons/operator_edit.svg'
import change_password from './../../../assets/icons/change_password.svg'
import edit_profile from './../../../assets/icons/edit_profile.svg'
import logput from './../../../assets/icons/logput.svg'
import report from './../../../assets/icons/report.svg'

import Input from './../../components/input/Input'
import Seller from './../../components/seller/Seller'

import './AddSellers.css'
import './../home/Home.css'


class AddSellers extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="add-sellers" >
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
                            <li className="sub-manage-profile" ><img className="manage-profile-icon" src={operator_edit} alt="داشبورد" />مدیریت اپراتورها</li>
                            <li className="sub-manage-profile" ><img className="manage-profile-icon" src={change_password} alt="تغییر رمز عبور" />تغییر رمز عبور</li>
                            <li className="sub-manage-profile" ><img className="manage-profile-icon" src={edit_profile} alt="ویرایش حساب کاربری" />ویرایش حساب کاربری</li>
                            <li className="sub-manage-profile" ><img className="manage-profile-icon" src={logput} alt="خروج" />خروج از حساب کاربری</li>
                        </ul>

                    </div>
                </div>
                <div className="part2" >
                    <div className="add-sellers-title" >
                        <h1>مدیریت عاملین فروش</h1>
                        <p>حذف و اضافه کردم و تغییر سطح دسترسی عامیلن فروش با امکان زیر صورت پذیر است</p>
                    </div>

                    <div className="add-sellers-form" >
                        <div className="add-sellers-fields">
                            <div className="add-sellers-field" >
                                <span>نام عامل فروش</span>
                                <Input name="name" placeHolder="مجتبی درزی" />
                            </div>
                            <div className="add-sellers-field" >
                                <span>ایمیل</span>
                                <Input name="name" placeHolder="example@gmail.com" />
                            </div>
                            <div className="add-sellers-field" >
                                <span>گذرواژه</span>
                                <Input name="name" placeHolder="طول کاراکتر باید تا ۸ کاراکتر باشد" />
                            </div>
                            <div className="add-sellers-field" >
                                <span>درصد کمیسیون فروش</span>
                                <Input name="name" placeHolder="برای مثال ۸٪" />
                            </div>
                        </div>

                        <button className="add-sellers-btn" >افزودن</button>
                    </div>
                    <div className="add-sellers-list" >
                        <Seller name="مجتبی" level="عامل فروش" />
                        <Seller name="مجتبی" level="عامل فروش" />
                        <Seller name="مجتبی" level="عامل فروش" />
                        <Seller name="مجتبی" level="عامل فروش" />
                        <Seller name="مجتبی" level="عامل فروش" />
                    </div>
                </div>

            </div>
        );
    }
}

export default AddSellers;