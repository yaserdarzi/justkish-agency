import React, { Component } from 'react';

//
// external compoennt ----------------->
//
import Input from '../../../components/input/Input';
import Token from '../../../api/token';


//
// icons and images ----------------->
//
import logo from '../../../assets/images/logo.png'

import './ForgetPassword.css';



class RePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount(){
        if(Token !== null)
        window.location.pathname = '/dashboard'
    
    }


    render() {
        return (
            <div className="forget-password">
                <div className="forget-box" >
                    <div className="forget-child" >
                        <div className="myblur-forget-pass" ></div>

                            <img src={logo} alt="لوگو" />
                            <h1>بازنشانی رمز عبور</h1>
                            <p>رمز عبور جدید خود را وارد نمایید</p>
                            <Input name="newPassword" placeholder="رمز عبور جدید" />
                            <Input name="reNewPassword" placeholder="تکرار رمز عبور  " />
                            <button className="new-pass-btn" >بازنشانی رمز عبور</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default RePassword;