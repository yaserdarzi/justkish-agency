import React, { Component } from 'react';

import search from './../../../assets/icons/search.svg';
import arrowdown2 from './../../../assets/icons/arrow-down2.svg';
import positive from './../../../assets/icons/positive.svg';
import ngative from './../../../assets/icons/ngative.svg';
import deletee from './../../../assets/icons/delete.svg';
import wallet from './../../../assets/icons/wallet.svg';
import pluscircle from './../../../assets/icons/pluscircle.svg';
import co from './../../../assets/icons/co.svg';
import arrow from './../../../assets/icons/arrow.svg';

import SmallOrder from './../../components/smallOrder/SmallOrder';
import Input from './../../components/input/Input';

import './CreateTicket.css';


class CreateTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="create-ticket" >
                <div className="create-ticket-box container" >
                    <div className="part1" >
                        <div className="create-ticket-your-credit">
                            <p className="create-ticket-your-credit-title" ><img src={wallet} alt="wallet" /> اعتبار شما</p>
                            <p className="create-ticket-increase-credit-text">افزایش اعتبار</p>
                            <p className="create-ticket-increase-credit" >6,526,200<img src={pluscircle} alt="افزایش اعتبار" /></p>
                        </div>
                        <div className="create-ticket-bascket-boxes" >
                            <div className="create-ticket-your-bascket" >
                                <p className="create-ticket-your-bascket-row1" >
                                    <span className="create-ticket-your-bascket-row1-span1">سبد خرید</span>
                                    <span className="create-ticket-your-bascket-row1-span2"><img src={deletee} alt="حذف" />خالی کردن سبد</span>
                                </p>
                                <p className="create-ticket-your-bascket-row2" >
                                    <span>مبلغ کل</span>
                                    <span>1,630,000 ت</span>
                                </p>
                                <p className="create-ticket-your-bascket-row2" >
                                    <span>تعداد سفارشات</span>
                                    <span>3</span>
                                </p>
                            </div>

                            <div className="create-ticket-your-orders" >
                                <SmallOrder title="جت اسکی"
                                    orderNumber="5"
                                    date="شنبه 1397/12/10 سانس 17:45تا 19:45"
                                    price="600,000 ت" />
                                <SmallOrder title="پاراسل"
                                    orderNumber="5"
                                    date="شنبه 1397/12/10 سانس 17:45تا 19:45"
                                    price="600,000 ت" />
                                <SmallOrder title="قایق تندرو "
                                    orderNumber="5"
                                    date="شنبه 1397/12/10 سانس 17:45تا 19:45"
                                    price="600,000 ت" />
                                <SmallOrder title="گشت جزیره "
                                    orderNumber="5"
                                    date="شنبه 1397/12/10 سانس 17:45تا 19:45"
                                    price="600,000 ت" />
                                <SmallOrder title="عکاسی "
                                    orderNumber="5"
                                    date="شنبه 1397/12/10 سانس 17:45تا 19:45"
                                    price="600,000 ت" />

                            </div>

                            <div className="create-ticket-your-bascket-3" >
                                <div className="create-ticket-customer-factors">
                                    <div className="create-ticket-customer-factor" >
                                        <p className="create-ticket-customer-factor-row">
                                            <span>فاکتور مشتری</span>
                                            <span style={{ color: '#FF3131' }}>1,900,000 ت</span>
                                        </p>
                                        <p className="create-ticket-customer-factor-row">
                                            <span >درآمد مجموعه از این فاکتور</span>
                                            <span style={{ color: '#00BF66' }}>300,000 ت</span>
                                        </p>
                                        <p className="create-ticket-customer-factor-row">
                                            <span>درآمد شما از این فاکتور</span>
                                            <span style={{ color: '#00BF66' }}>300,000 ت</span>
                                        </p>
                                    </div>
                                    <div className="create-ticket-customer-factor-total">
                                        <span>مبلغ قابل پرداخت شما</span>
                                        <span style={{ color: '#00BF66' }}>1,630,000 ت</span>
                                    </div>
                                </div>
                                <div className="create-ticket-transaction" >
                                    <Input name="buyerName" placeHolder="نام خریدار" />
                                    <Input name="buyerNumber" placeHolder="شماره خریدار " />
                                    <div className="create-ticket-pay" >
                                        <div className="create-ticket-imgs">
                                            <img src={co} alt="فلش" />
                                            <img src={arrow} alt="فلش" />
                                        </div>
                                        <div className="create-ticket-text">
                                            پرداخت و صدور بلیت
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="part2" >
                        <div className="create-ticket-filter" >
                            <div className="create-ticket-date" >
                                <div className="create-ticket-from" >از</div>
                                <div className="create-ticket-to" >تا</div>
                            </div>
                            <div className="create-ticket-search">

                                <div className="create-ticket-places" >
                                    <span className="create-ticket-places-right" >
                                        <i className="fas fa-map-marker-alt create-ticket-places-marker "></i>
                                        <span>در جزیره کیش </span>
                                    <img src={arrowdown2} alt="فلش" />
                                    </span>
                                    <ul className="create-ticket-places-lists" >

                                        <p className="create-ticket-places-all" >همه مکانها</p>

                                        <li className="create-ticket-places-list" >
                                            کیش
                                        </li>
                                        <li className="create-ticket-places-list" >
                                            کیش
                                        </li>
                                        <li className="create-ticket-places-list" >
                                            کیش
                                        </li>

                                    </ul>

                                </div>

                                <div className="create-ticket-features" >
                                    <span className="create-ticket-features-right" >
                                        <span>همه </span>
                                    </span>
                                    <img src={arrowdown2} alt="فلش" />
                                    <ul className="create-ticket-features-lists" >
                                        <li className="create-ticket-features-list" >
                                        <ul className="create-ticket-features-col" >
                                            <li> پارسل</li>
                                            <li> جت اسکی</li>
                                            <li> فلای برد</li>
                                            <li> قایق تندرو</li>
                                            <li> غواصی </li>
                                            <li> شاتل</li>
                                            <li> بنانا</li>
                                            <li> اسکی روی آب</li>
                                            <li> اسب سواری</li>
                                        </ul>
                                        <ul className="create-ticket-features-col" >
                                            <li> استند آپ کمدی</li>
                                            <li> اسکوتر زیر دریایی</li>
                                            <li> باگی</li>
                                            <li> بیگ بال</li>
                                            <li> پلاژ</li>
                                            <li> پارک آبی اوشن</li>
                                            <li> دلفیناریوم</li>
                                            <li> سافاری</li>
                                            <li> پینت بال</li>
                                        </ul>
                                        <ul className="create-ticket-features-col" >
                                            <li> کشتی کروز</li>
                                            <li> قلعه وحشت</li>
                                            <li> شهرزیرزمینی کاریز</li>
                                            <li> شترسواری</li>
                                            <li> کیبل</li>
                                            <li> ماساژ</li>
                                            <li> ماهیگیری</li>
                                            <li> جابرو کوپتر</li>
                                            <li> پینت بال</li>
                                        </ul>
                                            
                                        
                                        </li>
                                    </ul></div>
                                <button className="create-ticket-btn" >
                                    <img src={search} alt="جستجو" ></img>
                                </button>
                            </div>

                        </div>
                        <div className="create-ticket-search-result table-desktop" >
                            <h1>نتایج جستجو</h1>
                            <div className="create-ticket-search-lists " >
                                <div className="create-ticket-search-list-titles" >
                                    <p className="create-ticket-search-play-title" >تفریح </p>
                                    <p>تاریخ </p>
                                    <p>سانس ها</p>
                                    <p>تعداد </p>
                                    <p>قیمت مشتری</p>
                                    <p>قیمت همکار</p>
                                    <p></p>
                                </div>
                                <div className="create-ticket-search-list">
                                    <div className="create-ticket-search-play">کشتی اوستا</div>
                                    <div className="create-ticket-dates">
                                        <p>1397/10/12</p>
                                        <p className="create-ticket-days">شنبه</p>
                                    </div>
                                    <div>
                                        <p className="create-ticket-clock">
                                            <span>17:45</span>
                                            <img src={arrowdown2} alt="فلش" />
                                        </p>
                                    </div>
                                    <div className="create-ticket-numbers">
                                        <img src={positive} alt="مثبت" />
                                        <span>1</span>
                                        <img src={ngative} alt="منفی" />
                                        <p className="create-ticket-number" >
                                            <span>20</span>
                                            <span>موجودی</span>
                                        </p>
                                    </div>
                                    <div>250,000 ت </div>
                                    <div>250,000 ت </div>
                                    <div className="create-ticket-add-to-bascket" >اضافه به سبد </div>
                                </div>
                                <div className="create-ticket-search-list">
                                    <div className="create-ticket-search-play">کشتی اوستا</div>
                                    <div className="create-ticket-dates">
                                        <p>1397/10/12</p>
                                        <p className="create-ticket-days">شنبه</p>
                                    </div>
                                    <div>
                                        <p className="create-ticket-clock">
                                            <span>17:45</span>
                                            <img src={arrowdown2} alt="فلش" />
                                        </p>
                                    </div>
                                    <div className="create-ticket-numbers">
                                        <img src={positive} alt="مثبت" />
                                        <span>1</span>
                                        <img src={ngative} alt="منفی" />
                                        <p className="create-ticket-number" >
                                            <span>20</span>
                                            <span>موجودی</span>
                                        </p>
                                    </div>
                                    <div>250,000 ت </div>
                                    <div>250,000 ت </div>
                                    <div className="create-ticket-add-to-bascket" >اضافه به سبد </div>
                                </div>
                            </div>
                        </div>

                        <div className="create-ticket-search-result table-tablet" >
                            <h1>نتایج جستجو</h1>
                            <div className="create-ticket-search-lists " >
                                <div className="create-ticket-search-list-tablet" >
                                    <div className="create-ticket-search-list-cells" >
                                        <p className="create-ticket-search-play-title" >تفریح </p>
                                        <div className="create-ticket-search-play">کشتی اوستا</div>
                                    </div>
                                    <div className="create-ticket-search-list-cells">
                                        <p>تاریخ </p>
                                        <div className="create-ticket-dates">
                                            <p>1397/10/12</p>
                                            <p className="create-ticket-days">شنبه</p>
                                        </div>
                                    </div>
                                    <div className="create-ticket-search-list-cells">
                                        <p>سانس ها</p>
                                        <div>
                                            <p className="create-ticket-clock">
                                                <span>17:45</span>
                                                <img src={arrowdown2} alt="فلش" />
                                            </p>
                                        </div>
                                    </div>
                                    <div className="create-ticket-search-list-cells">
                                        <p>تعداد </p>
                                        <div className="create-ticket-numbers">
                                            <img src={positive} alt="مثبت" />
                                            <span>1</span>
                                            <img src={ngative} alt="منفی" />
                                            <p className="create-ticket-number" >
                                                <span>20</span>
                                                <span>موجودی</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="create-ticket-search-list-cells">
                                        <p>قیمت مشتری</p>
                                        <div>250,000 ت </div>
                                    </div>
                                    <div className="create-ticket-search-list-cells">
                                        <p>قیمت همکار</p>
                                        <div>250,000 ت </div>
                                    </div>
                                    <div className="create-ticket-search-list-cells">
                                        <div className="create-ticket-add-to-bascket" >اضافه به سبد </div>
                                    </div>
                                </div>
                                <div className="create-ticket-search-list-tablet" >
                                    <div className="create-ticket-search-list-cells" >
                                        <p className="create-ticket-search-play-title" >تفریح </p>
                                        <div className="create-ticket-search-play">کشتی اوستا</div>
                                    </div>
                                    <div className="create-ticket-search-list-cells">
                                        <p>تاریخ </p>
                                        <div className="create-ticket-dates">
                                            <p>1397/10/12</p>
                                            <p className="create-ticket-days">شنبه</p>
                                        </div>
                                    </div>
                                    <div className="create-ticket-search-list-cells">
                                        <p>سانس ها</p>
                                        <div>
                                            <p className="create-ticket-clock">
                                                <span>17:45</span>
                                                <img src={arrowdown2} alt="فلش" />
                                            </p>
                                        </div>
                                    </div>
                                    <div className="create-ticket-search-list-cells">
                                        <p>تعداد </p>
                                        <div className="create-ticket-numbers">
                                            <img src={positive} alt="مثبت" />
                                            <span>1</span>
                                            <img src={ngative} alt="منفی" />
                                            <p className="create-ticket-number" >
                                                <span>20</span>
                                                <span>موجودی</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="create-ticket-search-list-cells">
                                        <p>قیمت مشتری</p>
                                        <div>250,000 ت </div>
                                    </div>
                                    <div className="create-ticket-search-list-cells">
                                        <p>قیمت همکار</p>
                                        <div>250,000 ت </div>
                                    </div>
                                    <div className="create-ticket-search-list-cells">
                                        <div className="create-ticket-add-to-bascket" >اضافه به سبد </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateTicket;