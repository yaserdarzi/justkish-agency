import React, { Component } from 'react';
import { Link } from 'react-router';

//
// icons and images ------------->
//
import profile from './../../../assets/images/profile.jpg'
import operator_edit from './../../../assets/icons/operator_edit.svg'
import change_password from './../../../assets/icons/change_password.svg'
import edit_profile from './../../../assets/icons/edit_profile.svg'
import logput from './../../../assets/icons/logput.svg'
import report from './../../../assets/icons/report.svg'
import place_holder from './../../../assets/icons/place_holder.svg'
import search from './../../../assets/icons/search.svg'
import arrowdown2 from './../../../assets/icons/arrow-down2.svg'
import user from './../../../assets/icons/user.svg'
import gridview from './../../../assets/icons/grid_view.svg'
import cardview from './../../../assets/icons/card_view.svg'
import pdf from './../../../assets/icons/pdf.svg'
import excel from './../../../assets/icons/excel.svg'

//
// components ------------->
//

import Input from './../../components/input/Input'

import './Profile.css';
import SideLeft from '../../components/sideLeft/sideLeft';


class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            transaction: true
        }
    }

    natCardPicture = React.createRef()

    changeNatCardPicture =(e)=>{
        console.log(e)
        
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
                                <h1>اطلاعات کاربری</h1>
                                <p>اطلاعات کاربری خود در این بخش ویرایش کنید</p>
                            </div>
                            <div className="user-box-form" >
                                <div className="user-box-img-input" >
                                    <div className="user-box-inputs" >
                                        <div className="profile-field" >
                                            <p>نام کاربری</p>
                                            <input className="profile-input" name="userName" placeHolder="Maryam Azizi" />
                                        </div>
                                        <div className="profile-field" >
                                            <p>شماره همراه </p>
                                            <input className="profile-input" name="mobile" placeHolder="0936 589 5569" />
                                        </div>
                                        <div className="profile-field" >
                                            <p>شماره ثابت</p>
                                            <input className="profile-input" name="phoneNumber" placeHolder=" 076 444 5698" />
                                        </div>

                                    </div>
                                    <div className="user-box-img" >
                                        <img src={profile} alt="پروفایل" />
                                        <button className="profile-mini-btn" >تغییر نمایه کاربری</button>
                                    </div>
                                </div>
                                <button className="profile-btn" >تغییر اطلاعات</button>

                            </div>
                        </div>

                        <div className="user-box" >
                            <div className="user-box-title" >
                                <h1>اطلاعات کاربری</h1>
                                <p>اطلاعات کاربری خود در این بخش ویرایش کنید</p>
                            </div>
                            <div className="user-box-form" >
                                <div className="user-box-img-input" >
                                    <div className="user-box-inputs" >
                                        <div className="profile-field" >
                                            <p>نام کاربری</p>
                                            <input className="profile-input" name="userName" placeHolder="Maryam Azizi" />
                                        </div>
                                        <div className="profile-field" >
                                            <p>شماره همراه </p>
                                            <input className="profile-input" name="mobile" placeHolder="0936 589 5569" />
                                        </div>
                                        <div className="profile-field" >
                                            <p>شماره ثابت</p>
                                            <input className="profile-input" name="phoneNumber" placeHolder=" 076 444 5698" />
                                        </div>
                                        <div className="profile-field" >
                                            <p>وب سایت</p>
                                            <input className="profile-input" name="website" placeHolder=" www.ghasrangasht.com" />
                                        </div>
                                        <div className="profile-field big" >
                                            <p>شماره ثابت</p>
                                            <input className="profile-input" name="address" placeHolder=" تهران، شریعتی،‌خیابان میرداماد قبل از میدان مادر پلاک 87" />
                                        </div>

                                    </div>
                                    <div className="user-box-img" >
                                        <img src={place_holder} alt="پروفایل" />
                                        <button className="profile-mini-btn" >تغییر آرم آژانس </button>
                                    </div>
                                </div>
                                <button className="profile-btn" >تغییر اطلاعات</button>

                            </div>
                        </div>

                        <div className="user-box" >
                            <div className="user-box-title" >
                                <h1>اطلاعات بانکی</h1>
                                <p>برای درخواست تسویه حساب و واریز درآمد ها اطلاعات زیر تکمیل کنید</p>
                            </div>
                            <div className="user-box-form" >
                                <div className="user-box-img-input" >
                                    <div className="user-box-inputs bank-data" >
                                        <div className="profile-field" >
                                            <p>شماره شبا </p>
                                            <input className="profile-input" name="shabaNumber" placeHolder=" IR65465131654646545465465" />
                                        </div>
                                        <div className="profile-field" >
                                            <p>شماره کارت </p>
                                            <input className="profile-input" name="cardNumber" placeHolder="6104-3378-7662-5995" />
                                        </div>
                                        <div className="profile-field" >
                                            <p>نام صاحب حساب </p>
                                            <input className="profile-input" name="ownerName" placeHolder="مریم عزیزی  " />
                                        </div>
                                        <div className="profile-field" >
                                            <p>بانک  </p>
                                            <input className="profile-input" name="bankName" placeHolder=" پاسارگاد" />
                                        </div>
                                        <div className="profile-field" >
                                            <p>شعبه  </p>
                                            <input className="profile-input" name="branchName" placeHolder=" میدان هدایت" />
                                        </div>
                                        <div className="profile-field" >
                                            <p>تصویر کارت ملی  </p>
                                            <div className="profile-input-file-box">
                                                <span>تصویر را انتخاب کنید</span>
                                                <input className="profile-input-file" 
                                                       onClick={this.changeNatCardPicture}
                                                       ref={this.natCardPicture}
                                                       type="file" 
                                                       name="shabaNumber" />
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <button className="profile-btn" >تغییر اطلاعات</button>

                            </div>
                        </div>

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

export default Profile;
