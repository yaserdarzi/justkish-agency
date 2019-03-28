import React, { Component } from 'react';

//
// external componetn ------------------>
//
import Button from '../../components/common/Button/Button';
import Input from '../../components/input/Input';
import base from '../../api/baseURL';
import Token from '../../api/token';
import PriceDigit from '../../components/priceDigit/priceDigit';


//
// icons and images ------------->
//
import arrowdown2 from '../../assets/icons/arrow-down2.svg'
import search from '../../assets/icons/search.svg'

import './Wallet.css'; 


class Wallet extends Component {

    constructor(props) {
        super(props)
        this.state = {
            transaction: false,
            transactions:[],
            transactionLoading:false,
            errorOnlinePrice:'',
            priceOnline:'',
            isOnlinePayment:false,
            errorHandler:''
        }
    }

    componentDidMount(){
        this.getAllTransaction()
    }

    //
    // Get All transaction------------------------------------------------
    //
    getAllTransaction()
    {
        // get all seler and show in sellers part -------->
        this.getData('agency/wallet')
 
    }

    getData(key) {
 
        this.setState({
            transactionLoading: true
        })

         const url =  base.baseURL + key;

          return fetch(url, {
              method: "GET", 
              cache: "no-cache",  
              headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json",
                  "agent" : "web" ,
                  "Authorization": Token
              },
              redirect: "follow", 
              referrer: "no-referrer" 
          })
          .then(response =>  response.json())
          .then( responsJson => {
              console.log(responsJson.data.invoiceAgencyWalletCreditInfo)
              this.setState({
                transactions: responsJson.data.invoiceAgencyWalletCreditInfo,
                transactionLoading: false
              })
          })
    }

    //
    // Input Handler -------------------------------------->
    //

    changedHandler = (event) => {
        console.log(event.target.name)
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state.priceOnline)
    }

    //
    // Online payment Submit -------------------------------->
    //

    callOnlinePayment = async() =>{
        console.log("onile paymetn")
        this.setState({
            errorOnlinePrice:'',
            errorHandler:''
            
        })
        let checking = false;

        if(this.state.priceOnline === '' ){
            checking=true;
           return this.setState({
                errorOnlinePrice:'لطفا مبلغ را وارد کنید'
            })
        }
        if(this.state.priceOnline.length < 5){
            checking=true;
            return this.setState({
                errorOnlinePrice:'مبلغ وارد شده می بایست بیش از پنج رقم باشد.'
            })
        }

        // provider data for API --------->
        const data = {
            "price" : PriceDigit( this.state.priceOnline,'digit'),
        } 


        if(checking === false){
            console.log("price fetching")
            const res = await  this.postData(data,'agency/wallet/pay');

        }
    }

    postData =  (data,key) => {
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
              referrer: "no-referrer", 
              body: JSON.stringify(data), 
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
                 console.log("payment success")
                 console.log(data.data.url)
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


    increaseCreditTabHandler = () => {
        this.setState({ transaction: false })
    }

    transactionTabHandler = () => {
        this.setState({ transaction: true })

    }

    render() {
        let iCredit = []
        let tActoin = []

        if (this.state.transaction) {
            tActoin = ['wallet-active-tab']
            iCredit = []
        } else {
            iCredit = ['wallet-active-tab']
            tActoin = []
        }


        const allTransections = ( 
            // render all
          this.state.transactionLoading === false ?    this.state.transactions.map((item, index) =>  
             
            <tr key={index}>
                <td>{item.id}</td>
                <td style={{ fontSize: '13px' }}>{item.payment_token}</td>
                <td style={{ color: '#8B0734' }}>{item.type}</td>
                <td>{item.created_at}</td>
                <td>{item.wallet_price} </td>
                <td>{item.type}</td>
                <td>{item.type_price}</td>
                <td>{item.status}</td>
            </tr>
                ) :  <div className="container-loader">
                        <div className="loader"></div>
                    </div> 

           

 
        )

        return (





            <div className="Wallet">
                <div className="Wallet-box container" >
                    <div className="wallet-tab">
                        <p className={iCredit.join('')} onClick={this.increaseCreditTabHandler}>افزایش اعتبار </p>
                        <p className={tActoin.join('')} onClick={this.transactionTabHandler} > تراکنش ها </p>
                    </div>
                    {
                        this.state.transaction
                            ?
                            <div className="transaction-boxes" >
                                <div className="transaction-box" >
                                    <div className="transaction-type" >
                                        <ul className="ts-type-ul">
                                            <li className="ts-type-li">
                                                نوع تراکنش<img className="ts-type-img" src={arrowdown2} alt="فلش" />
                                                <ul className="sub-ts-type-ul">
                                                    <li className="sub-ts-type-li" >نوع ۱</li>
                                                    <li className="sub-ts-type-li" >نوع ۲</li>
                                                    <li className="sub-ts-type-li" >نوع ۳</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="transaction-dates" >
                                        <div className="ts-dates-from" >از ۱۳۹۷/۱۱/۱۶</div>
                                        <div className="ts-dates-to" >تا ۱۳۹۷/۱۱/۱۶</div>
                                    </div>
                                    <div className="transaction-price" >
                                        <div className="transaction-price-input-box">
                                            <input className="transaction-price-input" placeholder="از مبلغ " />
                                        </div>
                                        <div className="transaction-price-input-box">
                                            <input className="transaction-price-input" placeholder="تا مبلغ " />
                                        </div>
                                    </div>
                                    <div className="transaction-sellers" >
                                        <ul className="ts-sellers-ul">
                                            <li className="ts-sellers-li">
                                                عامل فروش<img className="ts-sellers-img" src={arrowdown2} alt="فلش" />
                                                <ul className="sub-ts-sellers-ul">
                                                    <li className="sub-ts-sellers-li" >عامل فروش ۱</li>
                                                    <li className="sub-ts-sellers-li" >عامل فروش ۲</li>
                                                    <li className="sub-ts-sellers-li" >عامل فروش ۳</li>
                                                </ul>
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="transaction-search" >
                                        <img src={search} alt="جستجو" />
                                    </div>
                                </div>

                                <div className="transaction-search-result" >
                                    <div className="ts-search-list table-desktop" >
                                        <table>
                                            <tbody>
                                                <tr className="search-list-title" >
                                                    <th>شماره </th>
                                                    <th>شماره پیگیری</th>
                                                    <th>تراکنش</th>
                                                    <th>ناریخ</th>
                                                    <th>مبلغ</th>
                                                    <th>نوع</th>
                                                    <th>افزایش/کاهش</th>
                                                    <th>وضعیت</th>
                                                </tr>
                                            
                                                {allTransections}

                                            </tbody>

                                        </table>
                                    </div>
                                    <div className="ts-search-list table-tablet" >
                                        <table>
                                            <tbody>
                                                <tr className="search-list-title" >
                                                    <th>شماره </th>
                                                    <td>1</td>
                                                </tr>
                                                <tr className="search-list-title" >
                                                    <th>شماره پیگیری</th>
                                                    <td style={{ fontSize: '13px' }}>1265</td>
                                                </tr>
                                                <tr className="search-list-title" >
                                                    <th>تراکنش</th>
                                                    <td style={{ color: '#8B0734' }}>پرداخت آنلاین به شماره 2389</td>
                                                </tr>
                                                <tr className="search-list-title" >
                                                    <th>ناریخ</th>
                                                    <td>12 بهمن 97 </td>
                                                </tr>
                                                <tr className="search-list-title" >
                                                    <th>عامل</th>
                                                    <td>فتحیان </td>
                                                </tr>
                                                <tr className="search-list-title" >
                                                    <th>بدهکار</th>
                                                    <td>250,000 ت </td>
                                                </tr>
                                                <tr className="search-list-title" >
                                                    <th>بستانکار</th>
                                                    <td>250,000 ت </td>
                                                </tr>
                                                <tr className="search-list-title" >
                                                    <th>مانده</th>
                                                    <td>250,000 ت </td>
                                                </tr>
                                                <div className="space-table" ></div>
                                                <tr className="search-list-title" >
                                                    <th>شماره </th>
                                                    <td>1</td>
                                                </tr>
                                                <tr className="search-list-title" >
                                                    <th>شماره پیگیری</th>
                                                    <td style={{ fontSize: '13px' }}>1265</td>
                                                </tr>
                                                <tr className="search-list-title" >
                                                    <th>تراکنش</th>
                                                    <td style={{ color: '#2FD86D' }}>پرداخت آنلاین به شماره 2389</td>
                                                </tr>
                                                <tr className="search-list-title" >
                                                    <th>ناریخ</th>
                                                    <td>12 بهمن 97 </td>
                                                </tr>
                                                <tr className="search-list-title" >
                                                    <th>عامل</th>
                                                    <td>فتحیان </td>
                                                </tr>
                                                <tr className="search-list-title" >
                                                    <th>بدهکار</th>
                                                    <td>250,000 ت </td>
                                                </tr>
                                                <tr className="search-list-title" >
                                                    <th>بستانکار</th>
                                                    <td>250,000 ت </td>
                                                </tr>
                                                <tr className="search-list-title" >
                                                    <th>مانده</th>
                                                    <td>250,000 ت </td>
                                                </tr>
                                              
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                
                              
                            </div>
                            :
                            <div className="credit-boxes" >
                            <div className="error-message shake">
                                <p>{this.state.errorHandler}</p>
                            </div>
                          
                                {/* <div className="credit-box" >
                                    <div className="credit-title" >
                                        <h1 className="credit-title-h1">افزایش اعتبار</h1>
                                        <p className="credit-title-p">با یکی از روش های زیر اعتبار خود را افزایش دهید</p>
                                    </div>
                                    <div className="now-credit" >
                                        <h1>اعتبار فعلی</h1>
                                        <p>27,000</p>
                                    </div>
                                </div> */}



                                {/* <div className="credit-box" >
                                    <div className="credit-title" >
                                        <h1 className="credit-title-h1">پرداخت از طریق شماره حساب</h1>
                                        <p className="credit-title-p">به شماره حساب 127.55.906.45698 واریز کنید و شماره فیش را در کادر روبرو وارد کنید</p>
                                    </div>
                                    <div className="pay-credit" >
                                        <div>
                                            <input className="credit-input" name="record" placeholder="200,000" />
                                            <button className="credit-btn"  >ثبت</button>
                                        <span className="credit-title-span">مبلغ به تومان </span>
                                        </div>
                                    </div>
                                </div> */}

                                <div className="credit-box" >
                                    <div className="credit-title" >
                                        <h1 className="credit-title-h1">پرداخت آنلاین </h1>
                                        <p className="credit-title-p">مقدار مورد نیاز برای افزایش اعتبار را به <b>تومان</b> وارد نمایید</p>
                                    </div>
                                    <div className="pay-credit" >
                                        <div className="container-flex">
                                            {/* <input className="credit-input" name="onlinePay" placeholder="شماره فیش پرداخت" /> */}
                                            <Input 
                                                type={'text'} 
                                                name={'priceOnline'}
                                                placeholder={'مبلغ'}
                                                changed={this.changedHandler}
                                                val={PriceDigit(this.state.priceOnline,'price')}
                                                error={this.state.errorOnlinePrice}
                                            /> 
                                            <Button                                                                  
                                                isLoading={this.state.isOnlinePayment}                                    
                                                title={'پرداخت'}                                                      
                                                bgcolor={'#0080FF'}                                                 
                                                hoverbgcolor={'#0080FF'}                                          
                                                click={this.callOnlinePayment}/>  
                                        </div>
                                    </div>
                                </div>

                                 



                                {/* <div className="credit-box" >
                                    <div className="credit-title" >
                                        <h1 className="credit-title-h1">پرداخت از درآمد</h1>
                                        <p className="credit-title-p">در این حالت از میزان بستانکاری شما کسر و به اعتبار شما افزوده میشود</p>
                                        <p className="credit-title-p">میزان بستانکاری: <span className="credit-title-span" > 2,567,000  تومان</span></p>

                                    </div>
                                    <div className="pay-credit" >
                                        <div>
                                            <input className="credit-input" name="payFromIncome" placeholder="2,567,000" />
                                            <button className="credit-btn"  >پرداخت از درآمد</button>
                                        <span className="credit-title-span">مبلغ به تومان </span>
                                        </div>
                                    </div>
                                </div> */}

                                {/* <div className="credit-box" >
                                    <div className="credit-title" >
                                        <h1 className="credit-title-h1">درخواست اعتبار</h1>
                                        <p className="credit-title-p">درصورتی که کد توافق مبلغ اعتبار را از سامانه دارید وارد نمایید</p>
                                    </div>
                                    <div className="pay-credit" >
                                        <div>
                                            <input className="credit-input" name="codeRecord" placeholder="کد درخواست اعتبار" />
                                            <button className="credit-btn"  >ثبت کد</button>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                    }

                </div>
            </div>
        );
    }
}

export default Wallet;
