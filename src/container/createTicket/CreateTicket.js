import React, { Component } from 'react';
import {Link } from 'react-router';
import base from '../../api/baseURL';
import Token from '../../api/token';



//
// icons and images ------------->
//

import search from './../../../assets/icons/search.svg';
import arrowdown2 from './../../../assets/icons/arrow-down2.svg';
import positive from './../../../assets/icons/positive.svg';
import ngative from './../../../assets/icons/ngative.svg';
import deletee from './../../../assets/icons/delete.svg';
import wallet from './../../../assets/icons/wallet.svg';
import pluscircle from './../../../assets/icons/pluscircle.svg';
import co from './../../../assets/icons/co.svg';
import arrow from './../../../assets/icons/arrow.svg';


//
// external componetn ------------------>
//
import SmallOrder from './../../components/smallOrder/SmallOrder';
import Input from './../../components/input/Input';
import Button from './../../components/common/Button/Button'
import MinusPlus from './../../components/common/MinusPlus/MinusPlus';
import Tickets from '../../components/createTicket/listAllTickets'; 


import './CreateTicket.css';


class CreateTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectTourist: false,
            allTickets:[],
            person:0
        }
    }

    componentDidMount = async () => {
        window.addEventListener('scroll', this.handleScroll);
        this.getAllTicket();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    selectTouristNumberHandler = (event) => {
        event.preventDefault();
        this.setState((prev) => {
            return {
                selectTourist: !prev.selectTourist
            }
        },
            () => {
                document.addEventListener('click', this.closeMenu);
            }
        )
        console.log('1111')


    }



    closeMenu = (e) => {
        if (e.target.matches('.notCloseMenuLand') ||
            e.target.matches('.create-ticket-numbers') ||
            e.target.matches('.create-ticket-number') ||
            e.target.matches('.create-ticket-tourist-numbers') ||
            e.target.matches('.create-ticket-tourist-change') ||
            e.target.matches('.create-ticket-tourist-change-ul') ||
            e.target.matches('.create-ticket-tourist-change-li') ||
            e.target.matches('.MinusPlus')
        ) {
            this.setState(() => {
                document.addEventListener('click', this.closeMenu);
            });
        } else {
            this.setState({
                selectTourist: false
            })
            this.setState(() => {
                document.removeEventListener('click', this.closeMenu);
            });
        }

    }
    handleFilterUpdate = (newValue) => {
        this.setState({
            person: newValue
        });
    }

    //
    //  Get all issus ticket ------------------->
    //

    getAllTicket =() =>{
        console.log("fetching all data from issus ticket.....")
        this.getData('agency/ticket?start_date=1550061287&end_date=1550579687&categories_id=0')
    }


    getData(key) {

        this.setState({
            agentLoading: true
        })

        const url = base.baseURL + key;

        return fetch(url, {
            method: "GET",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "agent": "web",
                "Authorization": Token
            },
            redirect: "follow",
            referrer: "no-referrer"
        })
            .then(response => response.json())
            .then(responsJson => {
                console.log(responsJson.data.total)
                this.setState({
                    allTickets: responsJson.data.total,
                    agentLoading: false
                })
            })
    }

  

    render() {

        const renderAllTickets = (
            // render all agents and pass props name , avatar , level ------->
            this.state.agentLoading === false ? this.state.allTickets.map((item, index) =>
                <Tickets key={index}
                    id={item.id}
                    title={item.title}  
                    data={item} />
            ) : <div className="loader"></div>

        )


        return (
            <div className="create-ticket" >
                <div className="create-ticket-box container" >
                    <div className="part1" >
                        {/* <div className="create-ticket-your-credit">
                            <p className="create-ticket-your-credit-title" ><img src={wallet} alt="wallet" /> اعتبار شما</p>
                            <p className="create-ticket-increase-credit-text">افزایش اعتبار</p>
                            <p className="create-ticket-increase-credit" >6,526,200<img src={pluscircle} alt="افزایش اعتبار" /></p>
                        </div> */}
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
                                    <Input name="buyerName" placeholder="نام خریدار" />
                                    <Input name="buyerNumber" placeholder="شماره خریدار " />
                                    <Link to="/payment-method" className="create-ticket-pay" >
                                        <div className="create-ticket-imgs">
                                            <img src={co} alt="فلش" />
                                            <img src={arrow} alt="فلش" />
                                        </div>
                                        <div className="create-ticket-text">
                                            پرداخت و صدور بلیت
                                        </div>
                                    </Link>
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
                       {/* -------------------------- */}
                        {renderAllTickets}
{/* 
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
                                        <p>تعداد</p>
                                        <div className="create-ticket-numbers">
                                            <p onClick={this.selectTouristNumberHandler} className="create-ticket-btn-fullscreen"></p>
                                            <p className="create-ticket-number" >
                                                <span className="notCloseMenuLand">20</span>
                                                <span className="notCloseMenuLand">موجودی</span>
                                            </p>
                                            <div className="create-ticket-tourist-numbers" >تعدا گردشگر
                                                <div className="notCloseMenuLand">1</div>
                                                {
                                                    this.state.selectTourist
                                                        ?
                                                        <div className="create-ticket-tourist-change" >
                                                            <ul className="create-ticket-tourist-change-ul">
                                                                <li className="create-ticket-tourist-change-li">
                                                                    <div className="notCloseMenuLand">
                                                                        <h6 className="notCloseMenuLand" >بزرگسال</h6>
                                                                        <span className="notCloseMenuLand">(12 سال به بالا)</span>
                                                                    </div>
                                                                    <div className="MinusPlus" >
                                                                    
                                                                    <MinusPlus change={this.handleFilterUpdate} counter={this.state.person} name={this.state.person}  />
                                                                    </div>
                                                                </li>
                                                                <li className="create-ticket-tourist-change-li">
                                                                    <div className="notCloseMenuLand">
                                                                        <h6 className="notCloseMenuLand">کودک</h6>
                                                                        <span className="notCloseMenuLand">(2 تا 12 سال)</span>
                                                                    </div>
                                                                    <div className="MinusPlus" >
                                                                        <MinusPlus change={this.handleFilterUpdate} counter={this.state.person} name={this.state.person} />
                                                                    </div>
                                                                </li>
                                                                <li className="create-ticket-tourist-change-li">
                                                                    <div className="notCloseMenuLand">
                                                                        <h6 className="notCloseMenuLand">نوزاد</h6>
                                                                        <span className="notCloseMenuLand">(10 روز تا 2 سال)</span>
                                                                    </div>
                                                                    <div className="MinusPlus" >
                                                                        <MinusPlus change={this.handleFilterUpdate} counter={this.state.person} name={this.state.person} />
                                                                    </div>
                                                                </li>

                                                            </ul>

                                                        </div>

                                                        :
                                                        ''

                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="create-ticket-search-list-cells">
                                        <p>قیمت مشتری</p>
                                        <div className="customer-coworker" >
                                            <p><span className="create-ticket-price-span">بزرگسال</span> <span>250,000 ت</span></p>
                                            <p><span className="create-ticket-price-span">کودک</span><span>125,000 ت</span></p>
                                            <p><span className="create-ticket-price-span">نوزاد رایگان</span></p>
                                        </div>
                                    </div>
                                    <div className="create-ticket-search-list-cells">
                                        <p>قیمت همکار</p>
                                        <div className="customer-coworker">
                                            <p><span className="create-ticket-price-span">بزرگسال</span> <span>190,000 ت</span></p>
                                            <p><span className="create-ticket-price-span">کودک</span><span> 100,000 ت</span></p>
                                            <p><span className="create-ticket-price-span">نوزاد رایگان</span></p>
                                        </div>
                                    </div>
                                    <div className="create-ticket-search-list-cells">
                                    <div className="create-ticket-add-to-bascket" >
                                        <Button
                                            isLoading={this.state.isLoading}
                                            title={'اضافه به سبد '}
                                            bgcolor={'#0080FF'}
                                            hoverbgcolor={'#1fc056cc'}
                                            click={this.callSubmit} />
                                    </div>
                                    </div>
                                </div>

                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateTicket;