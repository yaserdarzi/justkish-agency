import React, { Component } from 'react';

import logo from './../../../../assets/images/logo.png'

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
                    <div>
                    <img src={logo} alt="لوگو" />

                    </div>

                </div>
            </div>
        );
    }
}

export default ForgetPassword;