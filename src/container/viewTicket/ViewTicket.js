import React, { Component } from 'react';
import base from '../../api/baseURL';
import Token from '../../api/token';
import PriceDigit from '../../components/priceDigit/priceDigit';
import TimeSpan from '../../components/times/timespanToDate';
import MiladyToJalaly from '../../components/times/dateMiladiToShamsi';



//
// icons and images --------------------------------->
//
import brand from '../../assets/images/logo.png'
import brand2 from '../../assets/images/brand2.png'
import iconLogo from '../../assets/images/iconLogo.png'
import icon2 from '../../assets/icons/icon2.svg'
import icon3 from '../../assets/icons/icon3.png'
import icon4 from '../../assets/icons/icon4.svg'
import barcode from '../../assets/images/barcode.png'
import barcode1 from '../../assets/images/barcode1.png'
// import pic from '../../assets/images/pic.jpg'
// import icon1 from '../../assets/icons/icon1.svg'

import './ViewTicket.css';


class ViewTicket extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {},
            userType: '',
            isLoading: false,
            userAvatar: 'https://www.drupal.org/files/issues/default-avatar.png',
            ticket:[],
            isLoadingTicket: false,
            isNotDisplay: false
        }
    }

    componentWillMount =() => {
       // console.log(this.getParms('id'));
         this.getData('agency/factor/' + this.getParms('id'));


    }

    //
    // get ticket info and fetching from API ------------------------------------->
    //
    getData = (key) => {

        this.setState({
            isLoadingTicket: true,
            isNotDisplay: false
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
                console.log(responsJson.data)
                 this.setState({
                    ticket: responsJson.data || [],
                    isLoadingTicket: false,
                })
                // if dont find anything must disile ticket palce
                if(responsJson.data === null)
                this.setState({isNotDisplay : true })
            })
    }

    // 
    //  get params from url-------------------------->
    //
    getParms(value) {

        let url_string = window.location.href
        let url = new URL(url_string);

        const val = url.searchParams.get(value);
       // console.log(val)
        if (val !== null)
            return val;
        return 0
    }

    render() {

        const rulesAndCondition = (
           this.state.ticket.products ?  this.state.ticket.map((item,index) => 
           <li><span>{index + 1}</span>{item.products.rule}</li>
           ) : <li><span>1</span>درحال حاضر قوانینی برای این بلیط ثبت نگردید</li>
        );

        const recoveryTicket = (
            this.state.ticket.products ?  this.state.ticket.map((item,index) => 
          
                <tr>
                    <td>{item.products.recovery}</td>
                </tr>

            ) : <li>درحال حاضر شرایط جریمه استرداد برای این بلیط ثبت نگردید</li>
         );


        const Ruls = (

            <div className="the-rules" >
            <div className="rules-box" >
                <div className="rules-box-chid1">
                    <h3>شرایط جریمه استرداد بلیط کیش ایر با شناسه نرخی --</h3>
                    <p>در صورت استرداد بلیط، با توجه به موارد زیر، شما جریمه شده و از مبلغ بازگشتی به شما کاسته می شود.</p>

                    <table>
                        <thead>
                            <tr>
                                <th>شرایط هنگام استرداد و میزان جریمه</th> 
                            </tr>
                        </thead>
                        <tbody>
                      {recoveryTicket}
                         
                        
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="rules-box" >
                <div className="rules-box-child2">
                    <h3>قوانین و مقررات</h3>
                    <ul className="rules-list">
                        {/* <li><span>1</span>پرواز داخلی هواپیمایی کیش ایر از ترمینال - فرودگاه انجام می شود</li>
                        <li><span>2</span>برای سوار شدن به هواپیما، ارائه کارت شناسایی عکس دار ضروری است</li>
                        <li><span>3</span>برای استرداد بلیط ارائه کارت شناسایی عکس دار ضروری است</li>
                        <li><span>4</span>دوربین، موبایل، نوت بوک، اشیا گران بها و مدارک مهم را در بسته های تحویلی به هواپیما قرار ندهید. بر اساس قوانین، هواپیمایی جمهوری اسلامی ایران در خصوص مفقود شدن این موارد، هیچ مسئولیتی ندارد</li>
                        <li><span>5</span>حضور مسافر حداقل یک ساعت قبل از زمان پرواز در فرودگاه الزامی است.</li> */}

                        
                       {rulesAndCondition}

                    </ul>
                </div>
            </div>
            
           
        </div>
    
        )

        const renderTicket = (
            
             
                // console.log(this.state.ticket)
                this.state.ticket.map((item,index) => 
                <div className="fit-a4">
                    <div className="ticket-picture" key={index} >
                    {console.log( item)}
                  <div className="ticket-right" >
                      <div className="ticket-triple" >
                          <div className="ticket-triple-box">
                              <img src={brand} alt="برند" />
                              <div className="ticket-triple-box-titles" >
                                  <p>نام خریدار</p>
                                  <h2>{item.customer.name}</h2>
                                  <h2>{item.customer.phone}</h2>
                              </div>
                          </div>

                          

                          <div className="ticket-triple-box">
                              <div className="ticket-triple-box-titles" >
                                  <h2> </h2>
                                  <p>تاریخ صدور بلیط</p>
                                  <p><b>{item ? MiladyToJalaly(TimeSpan(item.created_at_timestamp)) : '****/**/**'}</b></p>
                              </div>
                          </div>
                      </div>
                     
                     <div className="title-ticket-view">
                        <p>{item.products ? item.products.title : item.tours.title}</p>
                     </div>
                      <div className="ticket-dates" >
                          <div className="ticket-dates-box" >
                              <img src={icon2} alt="آیکن" />
                              <span>روز : </span>
                              <span>{item.products_episode ? MiladyToJalaly(TimeSpan(item.products_episode.start_date)) : '****/**/**'}</span>
                          </div>
                          <div className="ticket-dates-box" >
                              <img src={icon3} alt="آیکن" />
                              <span>سانس : </span>
                              <span>{item.products_episode ? item.products_episode.start_hours : '-'} تا {item.products_episode ? item.products_episode.end_hours : '-'}</span>
                          </div>
                          <div className="ticket-dates-box" >
                              <img src={icon4} alt="آیکن" />
                              <span> تعداد: </span>
                              <span> برای {item.count} نفر </span>
         
                          </div>
                      </div>
                      <div className="ticket-barcode-price" >
                          <div className="ticket-barcode-right" >
                              <img src={barcode1} alt="بارکد" />
                              <div>
         
                                  <h1 className="ticket-barcode-text" >شماره بلیت</h1>
                                  <p className="ticket-barcode-number" >{item.ticket_number || '---'}</p>
                              </div>
                          </div>
                          <h1 className="ticket-barcode-price-number">
                          {PriceDigit(item.total_price,'price')}
                              <span>تومان</span>
                          </h1>
         
                      </div>
                  </div>
                  <div className="ticket-left" >
                      <div className="ticket-left-box" >
                          <img src={brand2} alt="برند" />
                          <h1 className="ticket-barcode-text">شماره بلیت</h1>
                          <p className="ticket-barcode-number">{item.ticket_number || '---'}</p>
                          <img src={barcode} alt="بارکد" />
         
                      </div>
                  </div>
              </div>
                    <div className="powered-by">
                        <p> Powered by SnappKish </p>
                        <img src={iconLogo} alt="" />
                    </div>

              {Ruls}
              </div>
                )
           
        )


        return (
            <div className="viw-ticket" >
                <div className="viw-ticket-box">
                   {/* {this.state.isNotDisplay === false ? 
                   renderTicket
                :
                <div className="notfound-ticket">
                    <p>متاسفانه بلیطی با این شماره پیدا نشده است</p>
                </div>} */}

                   {renderTicket}

                 
                </div>

              
            </div>
        );
    }
}

export default ViewTicket;
