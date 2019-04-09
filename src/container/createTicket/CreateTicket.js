import React, { Component } from 'react';
import {  browserHistory } from 'react-router';
import { DateRangePicker, DatePicker } from "react-advance-jalaali-datepicker";
/*

https://www.npmjs.com/package/react-advance-jalaali-datepicker

*/

import base from '../../api/baseURL';
import Token from '../../api/token';
// import DateToShamsi from '../../components/times/dateMiladiToShamsi';
// import jalaali from 'jalaali-js';
// import DateJalaly from '../../components/times/dateShamsiToMiladi';
import dateMilady from '../../components/times/dateMiladiToShamsi';
import PriceDigit from '../../components/priceDigit/priceDigit';
import GetToday from '../../components/times/getToday';




//
// icons and images ------------->
//

import search from '../../assets/icons/search.svg';
import arrowdown2 from '../../assets/icons/arrow-down2.svg';
// import positive from '../../assets/icons/positive.svg';
// import ngative from '../../assets/icons/ngative.svg';
// import wallet from '../../assets/icons/wallet.svg';
// import pluscircle from '../../assets/icons/pluscircle.svg';
import deletee from '../../assets/icons/delete.svg';
import co from '../../assets/icons/co.svg';
import arrow from '../../assets/icons/arrow.svg';


//
// external componetn ------------------>
//
import SmallOrder from './../../components/smallOrder/SmallOrder';
import Input from './../../components/input/Input';
import Button from './../../components/common/Button/Button'
import MinusPlus from './../../components/common/MinusPlus/MinusPlus';
import Tickets from '../../components/createTicket/listAllTickets';


import './CreateTicket.css';
import timeStamp from '../../components/times/timespanToDate';
import DateJalaly from '../../components/times/dateMiladiToShamsi';


class CreateTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectTourist: false,
            allTickets: [],
            shopingBag: [],
            categories: [],
            categorie: this.getParms('categories') || 0,
            person: 0,
            getShoping: true,
            customerName:'',
            customerPhone:'',
            customerNameError:'',
            customerPhoneError:'',
            isLoadingPayment:false,
            currentDate: ''
        }
    }

    componentDidMount = async () => {
        window.addEventListener('scroll', this.handleScroll);
        // fetch data from api ----------------------------->
        this.getAllTicket();      // get all tickets
        this.getAllShopingBag(); // get all shoping bag
        await this.getCategories();   //  get all categories
        await this.setState({
            currentDate :  GetToday('shamsi')
        })
        this.insertParam('start_date', GetToday('shamsi'))
        this.insertParam('end_date', GetToday('shamsi'))
 
       console.log(this.state.categories)

    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    getCurrentDate(){
        let d = new Date();
        let fullDate = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate()
        //  console.log(fullDate)
        //  console.log(dateMilady(fullDate))
         return dateMilady(fullDate)
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

    getAllTicket = () => {

        
        let start_date = this.getParms('start_date') !== 0 ? this.getParms('start_date') : this.getCurrentDate();
        let end_date = this.getParms('end') !== 0 ? this.getParms('end') : this.getCurrentDate();

        //console.log('agency/ticket?categories_id=' + this.getParms('categories') + '&start_date=' + start_date   + '&end_date=' + end_date )

        this.getData('agency/ticket?categories_title=' + this.getParms('categories') + '&start_date=' + start_date   + '&end_date=' + end_date )
    }

    getData(key) {

        console.log(key)
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
                    agentLoading: false,
                   
                })
            })
    }

    //
    // Get all shoping bag || sabad kharid---------------------->
    //

    getAllShopingBag = async () => {
        await this.getDataShoping('agency/shopping');

    }

    getDataShoping = async (key) => {

        this.setState({
            getShoping: true
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
              //  console.log(responsJson.data)

                this.setState({
                    shopingBag: responsJson.data,
                    getShoping: false,
                    customerName:  responsJson.data.customer ? responsJson.data.customer.name : '',
                    customerPhone: responsJson.data.customer ? responsJson.data.customer.phone : ''
                })

            })
            .catch(err => console.log(err))
    }


    //
    // clear shop bag ----------------------------->
    //

    clearShopBag = () => {

        this.ClearShopBagData('agency/shopping/clear')
    }

    ClearShopBagData(key) {

        this.setState({
            getShoping: true
        })

        const url = base.baseURL + key;

        return fetch(url, {
            method: "POST",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": Token
            },
            redirect: "follow",
            referrer: "no-referrer"
        })
            .then(response => response.json())
            .then(responsJson => {
                console.log(responsJson.data)
                this.getAllShopingBag(); // call for refresh shoping bag
                this.setState({
                    getShoping: false
                })


            })
    }

    //
    // get All categories ------------------------------>
    //

    getCategories = async()=> { 
        await  this.fetchCategories('agency/categories')


    }


    fetchCategories =async(key) => {
        const url = base.baseURL + key;

        fetch(url, {
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
            .then( responseJson => {
                this.setState({
                    categories: responseJson.data

                })
               // console.log(responseJson.data)
            })
    }


    _selectCategorie = async (item) => {
        await this.setState({
            categorie: item.title
        })

        console.log(`selectedt ${item.id}`)
        this.insertParam('categories', item.title);

    }

    //
    // insert and get params from url --------------------------------------------------------->
    //

    insertParam = async (key, value) => {
        // push params in url location query
        await browserHistory.push({
            pathname: this.props.location.pathname,
            query: Object.assign({}, this.props.location.query, { [key]: value })
        });

        console.log(browserHistory.getCurrentLocation())
    }


    getParms(value) {

        let url_string = window.location.href
        let url = new URL(url_string);

        const val = url.searchParams.get(value);
       // console.log(val)
        if (val !== null)
            return val;
        return 0
    }


    //
    // search button -------------------->
    //

    _searchButonTickets() {
        //console.log("search.....");
        this.getAllTicket();
    }



    // date select 
    change = (unix, formatted) => {
        console.log(unix)
        console.log(formatted)
        // console.log("start date ");
        this.insertParam('start_date',formatted);
    }

    changeTimeDate = (unix, formatted) => {
        console.log(unix)
        console.log(formatted)
        // console.log("end date ")
        this.insertParam('end_date',formatted)

    }

    DatePickerInput(props) {
       //  console.log(props)
        return <input className="popo" {...props} ></input>;
    }


    changedHandler = (e) => {
        //console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    //
    // paymnet to shop ------------------->
    //

    _paymentToShop =async() => {
        // console.log("payment call")

        let chechking = false;

        if(this.state.customerName === '' || this.state.customerName === null){
            chechking = true;
            this.setState({
                customerNameError:'لطفا نام مشتری را وارد نمایید'
            })
        }

        if(this.state.customerPhone === '' || this.state.customerPhone === null){
            chechking = true;
            this.setState({
                customerPhoneError:'لطفا شماره مشتری را وارد نمایید'
            })
        }


           // provider data for API --------->
           const data = {
            "name": this.state.customerName,
            "phone": this.state.customerPhone
           
        }


        if(chechking === false){
            console.log('data success cheking');
            const res = await this.postPayment(data, 'agency/shopping');

            console.log(res)
            if (res.status === 200) {
            browserHistory.push({pathname:'/payment-method',state: res.data })
            }
            else{
                console.log(res)
            }
        }
    }

    postPayment = (data, key) => {
        // console.log("fetching...")

        this.setState({
            isLoadingPayment: true
        })

        const url = base.baseURL + key;

        return fetch(url, {
            method: "POST",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "agent": "web",
                "Authorization": Token
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify(data),
        })
            .then(response => {
                const statusCode = response.status
                const data = response.json()
                return Promise.all([statusCode, data])
            })
            .then(([res, data]) => {
                //console.log(res, data)
                this.setState({ isLoadingPayment: false })
                // after add refresh render all agent and show new record in list ....
                if (res === 200) 
                {
                    console.log(data)
                }
                return ({ 'status': res, 'data': data.data })
            })
            .catch(err => console.log(err))


    }

    //
    //
    //

    _changedate = async(type) => {
        console.log(this.state.currentDate)
        let date = this.state.currentDate.split('/')
        let day = date[2]
        console.log(date[2])

        if(type === 'min'){

            if(day > 1)
            {
                day --;
                console.log(day)
            }

        } 
        else {
            if(day < 30)
            {
                day ++;
                console.log(day)
            }
        }


       await this.setState({
            currentDate: date[0] + '/' + date[1] + '/' + day
        })

        this.insertParam('start_date', this.state.currentDate)
        this.insertParam('end_date', this.state.currentDate)
        this.getAllTicket();      // get all tickets
        console.log(this.state.currentDate)
    }



    render() {

        const renderAllTickets = (
            // render all agents and pass props name , avatar , level ------->
            
            this.state.agentLoading === false ? this.state.allTickets.map((item, index) =>
                
                <Tickets key={index}
                    id={item.id}
                    title={item.title}
                    data={item}
                    action={() => this.getAllShopingBag()} /> 

            ) : <div className="loader"></div>

        )


        const renderShopingBag = (
            // render all agents and pass props name , avatar , level ------->
            this.state.getShoping === false ? this.state.shopingBag !== null ? this.state.shopingBag.shoppingBags.map((item, index) =>
                
                <SmallOrder key={index}
                    title={item.type === 'product' ? item.products.title : item.tours.title }
                    orderNumber={item.type === 'product' ? item.products.title : item.tours.title}
                    // date="شنبه 1397/12/10 سانس 17:45تا 19:45"
                    date={DateJalaly(timeStamp(item.products_episode.start_date)) +  ' سانس ' + item.products_episode.start_hours + '-' + item.products_episode.end_hours}
                    prices={item}
                    action={() => this.getAllShopingBag()}/>  ): <p>No Data for show!</p>
                

                :
                <div className="loader"></div>

        )


        const renderCategory = (
            this.state.categories !== null ? this.state.categories.map((item, index) =>
                <li key={item.id} onClick={() => this._selectCategorie(item)}> {item.title}</li>
            ) : ''

        )

        const notFound = (
            <div className="create-ticket-filter notfound">
                <p>متاسفانه ، موردی برای نمایش در تاریخ امروز موجود نیست</p>
            </div>
        )


        return (
            <div className="create-ticket" >
                <div className="create-ticket-box container" >
                    <div className="part1 fadeInUp" >
                        {/* <div className="create-ticket-your-credit">
                            <p className="create-ticket-your-credit-title" ><img src={wallet} alt="wallet" /> اعتبار شما</p>
                            <p className="create-ticket-increase-credit-text">افزایش اعتبار</p>
                            <p className="create-ticket-increase-credit" >6,526,200<img src={pluscircle} alt="افزایش اعتبار" /></p>
                        </div> */}
                        <div className="create-ticket-bascket-boxes" >
                            <div className="create-ticket-your-bascket" >
                                <p className="create-ticket-your-bascket-row1" >
                                    <span className="create-ticket-your-bascket-row1-span1">سبد خرید</span>
                                    <span onClick={this.clearShopBag} className="create-ticket-your-bascket-row1-span2"><img src={deletee} alt="حذف" />خالی کردن سبد</span>
                                </p>
                                <p className="create-ticket-your-bascket-row2" >
                                    <span>مبلغ کل</span>
                                    <span>{PriceDigit(this.state.shopingBag.total_price,'price')}</span>
                                </p>
                                <p className="create-ticket-your-bascket-row2" >
                                    <span>تعداد سفارشات</span>
                                    <span>{this.state.shopingBag.total_count}</span>

                                </p>
                            </div>

                            <div className="create-ticket-your-orders" >

                                {renderShopingBag}



                            </div>

                            <div className="create-ticket-your-bascket-3" >
                                <div className="create-ticket-customer-factors">
                                    <div className="create-ticket-customer-factor" >
                                        <p className="create-ticket-customer-factor-row">
                                            <span>فاکتور مشتری</span>
                                            <span style={{ color: '#FF3131' }}>{PriceDigit(this.state.shopingBag.total_price,'price')} تومان</span>
                                        </p>
                                        <p className="create-ticket-customer-factor-row">
                                            <span >درآمد مجموعه از این فاکتور</span>
                                            <span style={{ color: '#00BF66' }}>{PriceDigit(this.state.shopingBag.agencyProfitTotal ,'price')} تومان</span>
                                        </p>
                                        <p className="create-ticket-customer-factor-row">
                                            <span>درآمد شما از این فاکتور</span>
                                            <span style={{ color: '#00BF66' }}>{PriceDigit(this.state.shopingBag.agencyAgentProfitTotal,'price')} تومان</span>
                                        </p>
                                    </div>
                                    <div className="create-ticket-customer-factor-total">
                                        <span>مبلغ قابل پرداخت شما</span>
                                        <span style={{ color: '#00BF66' }}>{PriceDigit(this.state.shopingBag.total_price,'price')} تومان</span>
                                    </div>
                                </div>
                                <div className="create-ticket-transaction" >
                                    <Input 
                                        name="customerName"
                                        val={this.state.customerName || ''} 
                                        placeholder="نام خریدار"
                                        changed={this.changedHandler}
                                        error={this.state.customerNameError}
                                     />
                                    <Input 
                                        name="customerPhone" 
                                        type="number"
                                        placeholder="شماره تماس خریدار "
                                        val={this.state.customerPhone}
                                        changed={this.changedHandler}
                                        error={this.state.customerPhoneError} 
                                    />
                                    <div onClick={() => this._paymentToShop()} className="create-ticket-pay" >
                                        <div className="create-ticket-imgs">
                                            <img src={co} alt="فلش" />
                                            <img src={arrow} alt="فلش" />
                                        </div>
                                        <div className="create-ticket-text">
                                            <span>پرداخت و صدور بلیت</span> {this.state.isLoadingPayment ? <div className="loader-button"></div> : ''}
                                        </div>
                                        
                                        
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="part2" >

                        {/* <div className="create-ticket-filter " >
                            <div className="create-ticket-date" >
                                <div className="datePicker">
                                    <DateRangePicker
                                        placeholderStart="تاریخ شروع"
                                        placeholderEnd="تاریخ پایان"
                                        format="jYYYY/jMM/jDD"
                                        onChangeStart={this.change}
                                        onChangeEnd={this.changeTimeDate}
                                        idStart="rangePickerStart"
                                        idEnd="rangePickerEnd"
                                    />
                                </div>
                            </div>
                            <div className="create-ticket-search">
                                <div className="create-ticket-features" >
                                     <span className="create-ticket-features-right" >
                                        <span>{this.state.categorie || 'همه'} </span>
                                    </span>
                                    <img src={arrowdown2} alt="فلش" />
                                    <ul className="create-ticket-features-lists" >
                                        <li className="create-ticket-features-list" >
                                            <ul className="create-ticket-features-col" >
                                                {renderCategory}
                                            </ul>
                                        </li>
                                    </ul></div>
                                <button className="create-ticket-btn" onClick={() => this._searchButonTickets()} >
                                    <img src={search} alt="جستجو" ></img>
                                </button>
                            </div>

                        </div> */}

                        <div className="create-ticket-filter " >
                            <div className="create-ticket-date" >
                                <div className="datePicker">
                                    <div className="date-change-day-right" onClick={() => this._changedate('min')}>
                                        <span>روز قبل</span>
                                    </div>
                                    <div className="date-select-create-ticket">
                                        <DatePicker
                                            format="jYYYY/jMM/jDD"
                                            onChangeStart={this.change}  
                                            inputComponent={this.DatePickerInput}
                                            placeholder={this.state.currentDate}
                                            id="rangePickerStart"
                                            preSelected={this.state.currentDate}
                                        />
                                    </div>

                                    <div className="date-change-day-left" onClick={() => this._changedate('max')} >
                                        <span>روز بعد</span>
                                    </div>

                                </div>
                            </div>
                            <div className="create-ticket-search">
                                <div className="create-ticket-features" >
                                     <span className="create-ticket-features-right" >
                                        <span>{this.state.categorie || 'همه'} </span>
                                    </span>
                                    <img src={arrowdown2} alt="فلش" />
                                    <ul className="create-ticket-features-lists" >
                                        <li className="create-ticket-features-list" >
                                            <ul className="create-ticket-features-col" >
                                                {renderCategory}
                                            </ul>
                                        </li>
                                    </ul></div>
                                <button className="create-ticket-btn" onClick={() => this._searchButonTickets()} >
                                    <img src={search} alt="جستجو" ></img>
                                </button>
                            </div>

                        </div>



                        {/* --------------------------------------------------------------- */}
                       
                        {renderAllTickets } 
                        
                        {/* {this.state.allTickets.length === 0 ? notFound : renderAllTickets}
                        {console.log(this.state.allTickets.length )}
                        {console.log(this.state.allTickets ? 'notFound' : 'renderAllTickets')} */}

                    </div>
                </div>
            </div>
        );
    }
}

export default CreateTicket;