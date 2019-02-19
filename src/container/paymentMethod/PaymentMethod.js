import React, { Component } from 'react';
import { Link } from 'react-router';

//
// components ------------->
//
import Button from './../../components/common/Button/Button'
import sample from './../../../assets/images/sample.jpg'
import PriceDigit from '../../components/priceDigit/priceDigit';
import Token from '../../api/token';
import base from '../../api/baseURL';




import './PaymentMethod.css';


class PaymentMethod extends Component {

    constructor(props) {
        super(props)
        this.state = {
            wallet:[]
        }
    }

    componentWillMount =async() => {
        if(this.props.location.state.wallet){ 
            // console.log(this.props.location.state.wallet.wallet_price);
          await  this.setState({
                wallet: this.props.location.state
            })
            console.log(this.state.wallet.wallet.wallet_price)
        }
    }

    payMent = () => {

    }

    //
    // Payment Direct ----------------------------------------->
    //
    
    paymentDirect = async()=>{
        console.log("payment drirect");


        const res = await  this.postData('agency/shopping/portal');
         


    }

    postData =  (key) => {
        // console.log("fetching...")

        this.setState({
            isOnlinePayment:true,
           
        })

         const url =  base.baseURL + key;

          return   fetch(url, {
              method: "POST", 
              cache: "no-cache",  
              headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json",
                  "agent" : "web",
                  "Authorization": Token,
                  "market":"zarinpal"
              },
              redirect: "follow", 
              referrer: "no-referrer" 
          })
          .then(response => {
            const statusCode = response.status
            const data = response.json()
            return Promise.all([statusCode, data])
          })
          .then(([res, data]) => {
            console.log(res, data)
            console.log(data.error)
            this.setState({isOnlinePayment: false})
            // after add refresh render all agent and show new record in list ....
            if(res === 200)
            {
                //  console.log("payment success")
                //  console.log(data.data.url)
                 window.location = data.data.url
            } 
            else{
                // english error handler ----------->
                this.setState({
                    errorHandler: data.error
                })
            }
            return ({'status':res, 'data':data.data})
          })
          .catch(error => console.log(error) );

          
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
                        <h1>{PriceDigit(this.state.wallet.total_price,'price')} تومان</h1>
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
                                        <h3> {PriceDigit(this.state.wallet.total_price,'price')} تومان</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="payment-method-down">
                                {/* <div className="payment-method-brands" >
                                    <img src={sample} alt="برندها" />
                                    <img src={sample} alt="برندها" />
                                    <img src={sample} alt="برندها" />
                                    <img src={sample} alt="برندها" />
                                </div> */}
                                <div className="payment-method-btn" >

                                    <Button
                                        isLoading={this.state.isOnlinePayment}
                                        title={'پرداخت مستقیم'}
                                        bgcolor={'#0080FF'}
                                        hoverbgcolor={'#0080FF'}
                                        click={() => this.paymentDirect()} />
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
                                        <h3>{PriceDigit(this.state.wallet.total_price,'price')} تومان</h3>
                                    </div>
                                    <div className="payment-method-up-child" >
                                        <h3>اعتبار کیف پول</h3>
                                        <h3>{PriceDigit(this.state.wallet.wallet.wallet_price,'price')} تومان</h3>
                                    </div>
                                    <div className="payment-method-up-child" >
                                        <h3>قابل پرداخت</h3>
                                        <h3>{PriceDigit(this.state.wallet.payable,'price')} تومان</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="payment-method-down">
                                {/* <div className="payment-method-brands" >
                                    <img src={sample} alt="برندها" />
                                    <img src={sample} alt="برندها" />
                                    <img src={sample} alt="برندها" />
                                    <img src={sample} alt="برندها" />
                                </div> */}
                                <div className="payment-method-btn" >

                                    <Button
                                        isLoading={this.state.isLoading}
                                        title={' کسر از کیف پول و پرداخت '}
                                        bgcolor={'#0080FF'}
                                        hoverbgcolor={'#0080FF'}
                                        click={() => this.paymentDirect()} />
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
