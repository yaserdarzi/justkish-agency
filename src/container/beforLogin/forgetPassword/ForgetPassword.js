import React, { Component } from 'react';

import logo from './../../../../assets/images/logo.png'

import Input from '../../../components/input/Input'

import './ForgetPassword.css';



class ForgetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="forget-password">
                <div className="forget-box" >
                    <div className="forget-child" >
                        <img src={logo} alt="لوگو" />
                        <h1>بازنشانی رمز عبور</h1>
                        <p>رمز عبور جدید خود را وارد نمایید</p>
                        <Input name="newPassword" placeHolder="رمز عبور جدید" />
                        <Input name="reNewPassword" placeHolder="تکرار رمز عبور  " />
                        <button className="new-pass-btn" >بازنشانی رمز عبور</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default ForgetPassword;