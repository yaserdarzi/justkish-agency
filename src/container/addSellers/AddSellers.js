import React, { Component } from 'react';

//
// external component ---------------------->
//
import Input from './../../components/input/Input';
import Seller from './../../components/seller/Seller';

//
// icons and imeages ----------------------->
//
import profile from './../../../assets/images/profile.jpg';
import operator_edit from './../../../assets/icons/operator_edit.svg';
import change_password from './../../../assets/icons/change_password.svg';
import edit_profile from './../../../assets/icons/edit_profile.svg';
import logput from './../../../assets/icons/logput.svg';
import report from './../../../assets/icons/report.svg';

//
// css class ------------------------------>
//

import './AddSellers.css'
import './../home/Home.css'
import SideLeft from '../../components/sideLeft/sideLeft';


class AddSellers extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="add-sellers container" >
                <div className="part1" >
                 <SideLeft />
                </div>
                <div className="part2" >
                    <div className="add-sellers-title" >
                        <h1>مدیریت عاملین فروش</h1>
                        <p>حذف و اضافه کردم و تغییر سطح دسترسی عامیلن فروش با امکان زیر صورت پذیر است</p>
                    </div>

                    <div className="add-sellers-form" >
                        <div className="add-sellers-fields">
                            <div className="add-sellers-field" >
                                <p>نام عامل فروش</p>
                                <input name="name" placeHolder="یاسر درزی" />
                            </div>
                            <div className="add-sellers-field" >
                                <p>ایمیل</p>
                                <input name="name" placeHolder="example@gmail.com" />
                            </div>
                            <div className="add-sellers-field" >
                                <p>گذرواژه</p>
                                <input name="name" placeHolder="طول کاراکتر باید تا ۸ کاراکتر باشد" />
                            </div>
                            <div className="add-sellers-field" >
                                <p>درصد کمیسیون فروش</p>
                                <input name="name" placeHolder="برای مثال ۸٪" />
                            </div>
                        </div>

                        <button className="add-sellers-btn" >افزودن</button>
                    </div>
                    <div className="add-sellers-list" >
                        <Seller name="مجتبی" level="عامل فروش" />
                        <Seller name="رضا" level="عامل فروش" />
                        <Seller name="یاسر" level="عامل فروش" />
                        <Seller name="آراس" level="عامل فروش" />
                        <Seller name="حامد" level="عامل فروش" />
                    </div>
                </div>

            </div>
        );
    }
}

export default AddSellers;