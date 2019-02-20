import React, { Component } from 'react';



//
// icons and images --------------------------------->
//
import brand from './../../../assets/images/brand.png'
import brand2 from './../../../assets/images/brand2.png'
import icon1 from './../../../assets/icons/icon1.svg'
import icon2 from './../../../assets/icons/icon2.svg'
import icon3 from './../../../assets/icons/icon3.png'
import icon4 from './../../../assets/icons/icon4.svg'
import barcode from './../../../assets/images/barcode.png'
import barcode1 from './../../../assets/images/barcode1.png'
import pic from './../../../assets/images/pic.jpg'

import './ViewTicket.css';


class ViewTicket extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {},
            userType: '',
            isLoading: false,
            userAvatar: 'https://www.drupal.org/files/issues/default-avatar.png'
        }
    }

    render() {

        return (
            <div className="viw-ticket">
                <div className="viw-ticket-box">
                    <div className="ticket-picture" >
                        <div className="ticket-right" >
                            <div className="ticket-triple" >
                                <div className="ticket-triple-box">
                                    <img src={brand} alt="برند" />
                                    <div className="ticket-triple-box-titles" >
                                        <h2>نام خریدار</h2>
                                        <p>محمدرضا رحمانی</p>
                                        <p>0912-569-6696</p>
                                    </div>
                                </div>
                                <div className="ticket-triple-box">
                                    <img src={pic} alt="برند" />
                                    <div className="ticket-triple-box-titles" >
                                        <h2>نام خریدار</h2>
                                        <p>محمدرضا رحمانی</p>
                                        <p>0912-569-6696</p>
                                    </div>
                                </div>
                                <div className="ticket-triple-box">
                                    <img src={pic} alt="برند" />
                                    <div className="ticket-triple-box-titles" >
                                        <h2>نام خریدار</h2>
                                        <p>محمدرضا رحمانی</p>
                                        <p>0912-569-6696</p>
                                    </div>
                                </div>
                            </div>
                            <div className="ticket-dates" >
                                <div className="ticket-dates-box" >
                                    <img src={icon1} alt="آیکن" />
                                    <span>تاریخ بلیت: </span>
                                    <span>1397/12/10</span>
                                </div>
                                <div className="ticket-dates-box" >
                                    <img src={icon2} alt="آیکن" />
                                    <span>روز : </span>
                                    <span>1397/12/10</span>
                                </div>
                                <div className="ticket-dates-box" >
                                    <img src={icon3} alt="آیکن" />
                                    <span>سانس : </span>
                                    <span>1397/12/10</span>
                                </div>
                                <div className="ticket-dates-box" >
                                    <img src={icon4} alt="آیکن" />
                                    <span> برای 3 نفر </span>

                                </div>
                            </div>
                            <div className="ticket-barcode-price" >
                                <div className="ticket-barcode-right" >
                                    <img src={barcode1} alt="بارکد" />
                                    <div>

                                        <h1 className="ticket-barcode-text" >شماره بلیت</h1>
                                        <p className="ticket-barcode-number" >JK12321654846</p>
                                    </div>
                                </div>
                                <h1 className="ticket-barcode-price-number">
                                    360,000
                                    <span>تومان</span>
                                </h1>

                            </div>
                        </div>
                        <div className="ticket-left" >
                            <div className="ticket-left-box" >
                                <img src={brand2} alt="برند" />
                                <h1 className="ticket-barcode-text">شماره بلیت</h1>
                                <p className="ticket-barcode-number">JK12321654846</p>
                                <img src={barcode} alt="بارکد" />

                            </div>
                        </div>
                    </div>

                    <div className="the-rules" >
                        <div className="rules-box" >
                            <div className="rules-box-chid1">
                                <h3>شرایط جریمه استرداد بلیط کیش ایر با شناسه نرخی --</h3>
                                <p>در صورت استرداد بلیط، با توجه به موارد زیر، شما جریمه شده و از مبلغ بازگشتی به شما کاسته می شود.</p>

                                <table>
                                    <thead>
                                        <tr>
                                            <th>شرایط هنگام استرداد</th>
                                            <th>میزان جریمه</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>تا 11:30 ظهر 5 روز قبل از حرکت</td>
                                            <td>35%</td>
                                        </tr>
                                        <tr>
                                            <td>تا 11:30 ظهر 4 روز قبل از حرکت</td>
                                            <td>40%</td>
                                        </tr>
                                        <tr>
                                            <td>تا 11:30 ظهر 3 روز قبل از حرکت</td>
                                            <td>45%</td>
                                        </tr>
                                        <tr>
                                            <td>تا 11:30 ظهر 2 روز قبل از حرکت</td>
                                            <td>55%</td>
                                        </tr>
                                        <tr>
                                            <td>تا 11:30 ظهر 1 روز قبل از حرکت</td>
                                            <td>70%</td>
                                        </tr>
                                        <tr>
                                            <td>از 11:30 ظهر 1 روز قبل از حرکت به بعد - تماس تلفنی</td>
                                            <td>100%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="rules-box" >
                            <div className="rules-box-child2">
                                <h3>قوانین و مقررات</h3>
                                <ul className="rules-list">
                                    <li><span>1</span>پرواز داخلی هواپیمایی کیش ایر از ترمینال - فرودگاه انجام می شود</li>
                                    <li><span>2</span>برای سوار شدن به هواپیما، ارائه کارت شناسایی عکس دار ضروری است</li>
                                    <li><span>3</span>برای استرداد بلیط ارائه کارت شناسایی عکس دار ضروری است</li>
                                    <li><span>4</span>دوربین، موبایل، نوت بوک، اشیا گران بها و مدارک مهم را در بسته های تحویلی به هواپیما قرار ندهید. بر اساس قوانین، هواپیمایی جمهوری اسلامی ایران در خصوص مفقود شدن این موارد، هیچ مسئولیتی ندارد</li>
                                    <li><span>5</span>حضور مسافر حداقل یک ساعت قبل از زمان پرواز در فرودگاه الزامی است.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewTicket;
