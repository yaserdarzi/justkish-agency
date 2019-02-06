import React, { Component } from 'react';

import Input from './../../../components/input/Input'

import logo from './../../../../assets/images/logo.png'

import './index.css'



class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="index" >

                <div className="login-signup" >
                    <div className="login-signup-logo" >
                        <img src={logo} alt="جاست کیش" />
                        <div className="login-signup-box">


                            <div className="login" >
                                <h1>ورود به سامانه </h1>
                                <p>برای ورود ایمیل و رمز عبور را وارد نمایید</p>
                                <Input placeHolder="ایمیل" name="email" />
                                <Input placeHolder="رمز عبور" name="password" />
                                <p className="forget-pass" >
                                    <span>رمز خود را فراموش کرده ام </span>
                                </p>
                                <button className="login-btn" >ورود</button>
                            </div>

                            <div className="ls-seprator" ></div>

                            <div className="signup" >
                                <h1>درخواست ساین </h1>
                                <p>فرم درخواست ثبت نام مخصوص آژانس ها</p>
                                <Input placeHolder="نام آژانس" name="agentname" />
                                <Input placeHolder="شهر" name="city" />
                                <Input placeHolder="آدرس ایمیل" name="emailadrress" />
                                <Input placeHolder="شماره همراه " name="phonenumber" />
                                <button className="login-btn" >ثبت نام</button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default Index;