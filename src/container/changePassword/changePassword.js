import React, { Component } from 'react';
import { Link } from 'react-router';

//
// icons and images ------------->
//


//
// components ------------->
//


import './../profile/Profile.css';
import './changePassword.css';
import SideLeft from '../../components/sideLeft/sideLeft';


class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() {
        return (
            <div className="profilee">
                <div className="profile-box container" >
                    <div className="part1" >
                        <SideLeft />
                    </div>
                    <div className="part2" >
                        
                        <div className="user-box" >
                            <div className="user-box-title" >
                                <h1>تغییر گذرواژه</h1>
                                <p>میتوانید رمز عبور خود را تغییر دهید</p>
                            </div>
                            <div className="user-box-form" >
                                <div className="user-box-img-input change-pw" >
                                    <div className="user-box-inputs change-password" >
                                        <div className="profile-field" >
                                            <p>رمز عبور قبلی</p>
                                            <input className="profile-input" name="oldPassword" placeHolder="گذر واژه قبلی را وارد نمایید" />
                                        </div>
                                        <div className="profile-field" >
                                            <p>رمز عبور جدید  </p>
                                            <input className="profile-input" name="newPassword" placeHolder="طول پسورد باید تا 8 کارکتر باشد" />
                                        </div>
                                        <div className="profile-field" >
                                            <p>تکرار رمز عبور</p>
                                            <input className="profile-input" name="confirmPassword" placeHolder="طول پسورد باید تا 8 کارکتر باشد" />
                                        </div>

                                    </div>
                                    <div className="forget-password-text" >

                                        <Link to="/forgetpassword"><span>آیا گذرواژه خود را فراموش کرده اید</span></Link>
                                    </div>

                                </div>
                                <button className="profile-btn" >تغییر گذرواژه</button>

                            </div>
                        </div>


                    </div>
                </div>

            </div>
        );
    }
}

export default ChangePassword;