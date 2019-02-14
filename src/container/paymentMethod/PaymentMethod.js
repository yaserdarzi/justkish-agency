import React, { Component } from 'react';
import { Link } from 'react-router';

//
// components ------------->
//
import Button from './../../components/common/Button/Button'


//
// components ------------->
//

import sample from './../../../assets/images/sample.jpg'




import './PaymentMethod.css';


class PaymentMethod extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }


    payMent = () => {

    }
    render() {

        return (
            <div className="payment-method">
                <div className="payment-method-box container" >
                    <div className="payment-method-title" >
                        <div className="payment-method-title-text" >
                            <h3>نحوه ی پرداخت </h3>
                            <p>با یکی از روش های زیر پرداخت کنید</p>
                        </div>
                        <h1>1,684,000 تومان</h1>
                    </div>
                    <div className="payment-method-context" >
                        <div className="payment-method-context-box payment-method-right" >
                            <div className="payment-method-up">
                                <div className="payment-method-up-1" >
                                    <h3>پرداخت مستقیم شتاب</h3>
                                    <p>شما میتوانید با انتخاب درگاه مورد نظر پرداخت خود را به صورت مستقیم انجام دهید</p>
                                </div>
                                <div className="payment-method-up-2" >

                                    <div className="payment-method-up-child" >
                                        <h3>مبلغ مورد نظر</h3>
                                        <h3> 1,684,000</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="payment-method-down">
                                <div className="payment-method-brands" >
                                    <img src={sample} alt="برندها" />
                                    <img src={sample} alt="برندها" />
                                    <img src={sample} alt="برندها" />
                                    <img src={sample} alt="برندها" />
                                </div>
                                <div className="payment-method-btn" >

                                    <Button
                                        isLoading={this.state.isLoading}
                                        title={'پرداخت مستقیم'}
                                        bgcolor={'#0080FF'}
                                        hoverbgcolor={'#1fc056cc'}
                                        click={this.payMent} />
                                </div>
                            </div>
                        </div>
                        <div className="payment-method-context-box payment-method-left" >
                            <div className="payment-method-up">
                                <div className="payment-method-up-1" >
                                    <h3>پرداخت مستقیم شتاب</h3>
                                    <p>شما میتوانید با انتخاب درگاه مورد نظر پرداخت خود را به صورت مستقیم انجام دهید</p>
                                </div>
                                <div className="payment-method-up-2" >


                                    <div className="payment-method-up-child" >
                                        <h3>مبلغ مورد نظر</h3>
                                        <h3>1,684,000</h3>
                                    </div>
                                    <div className="payment-method-up-child" >
                                        <h3>اعتبار کیف پول</h3>
                                        <h3>684,000</h3>
                                    </div>
                                    <div className="payment-method-up-child" >
                                        <h3>قابل پرداخت</h3>
                                        <h3>1,000,000</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="payment-method-down">
                                <div className="payment-method-brands" >
                                    <img src={sample} alt="برندها" />
                                    <img src={sample} alt="برندها" />
                                    <img src={sample} alt="برندها" />
                                    <img src={sample} alt="برندها" />
                                </div>
                                <div className="payment-method-btn" >

                                    <Button
                                        isLoading={this.state.isLoading}
                                        title={' کسر از کیف پول و پرداخت '}
                                        bgcolor={'#0080FF'}
                                        hoverbgcolor={'#1fc056cc'}
                                        click={this.payMent} />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default PaymentMethod;
