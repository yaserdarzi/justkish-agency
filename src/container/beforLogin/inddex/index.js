import React, { Component } from 'react';

import Input from './../../../components/input/Input'

import logo from './../../../../assets/images/logo.png'

import './index.css'



class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginEmail:'',
            loginPassword:'',
            loginEmailError:'error',
            loginPasswordError:'pass werror'
        }
    }


    onLogin  (){
        
        console.log(`
       email: ${this.state.loginEmail}
       password: ${this.state.loginPassword}
        `)
    }

    changedHandler= (event) => {
        console.log( event.target.value)

        this.setState({
            [event.target.name] : event.target.value
        })
    }


    render() {
        return (
            <div className="index" >

                <div className="login-signup" >
                    <div className="login-signup-logo" >
                    {/* <div className="myblur" ></div> */}
                        <img className="register-img" src={logo} alt="جاست کیش" />
                        <div className="login-signup-box">


                            <div className="login" >
                                <h1 className="login-title" >ورود به سامانه </h1>
                                <p className="login-text">برای ورود ایمیل و رمز عبور را وارد نمایید</p>
                                <Input 
                                    placeHolder="ایمیل" 
                                    name="loginEmail"
                                    type={'text'}  
                                    changed={this.changedHandler}
                                    error={this.state.loginEmailError}
                                />
                                <Input 
                                    placeHolder="رمز عبور" 
                                    name="loginPassword"
                                    type={'password'}  
                                    changed={this.changedHandler}
                                    error={this.state.loginPasswordError}
                                />
                                <p className="forget-pass" >
                                    <span>رمز خود را فراموش کرده ام </span>
                                </p>
                                <button className="login-btn" onClick={this.onLogin.bind(this)} >ورود</button>
                            </div>

                            <div className="ls-seprator" ></div>

                            <div className="signup" >
                                <h1 className="signup-title">درخواست ساین </h1>
                                <p className="signup-text">فرم درخواست ثبت نام مخصوص آژانس ها</p>
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