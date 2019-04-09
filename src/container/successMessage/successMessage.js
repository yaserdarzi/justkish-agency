import React , {Component} from 'react'
import './successMessage.css';
import Button from '../../components/common/Button/Button';
import { Link , browserHistory } from 'react-router';
import base from '../../api/baseURL';
import Token from '../../api/token';
import PriceDigit from '../../components/priceDigit/priceDigit';
import TimeStamp from '../../components/times/timespanToDate';
import MiladiToJalaly from '../../components/times/dateMiladiToShamsi';


//
// icons and images ------------------------------------------------->
//

import email from '../../assets/icons/email.svg'
import sms from '../../assets/icons/sms.svg'
import print from '../../assets/icons/print.svg'






class SuuccessMessage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tokenMessage:''
         }
    }

    componentWillMount(){
      this.setState({
        tokenMessage:  this.getParms('token'),
        // ticketId: 'view-ticket?id=' + this.getParms('ticket')
        ticketId: 'ticket-issued'
      }) 

      this.getData('agency/getFactor/' + this.getParms('factor_id'));

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

    callGoToReports =() => {
        window.location.pathname = '/wallet'
    }



    //
    // show ticket and get ticket Id ----------------------->
    //

    _showTicket =(id) => {
        // console.log(id);
        browserHistory.push({pathname:'/view-ticket',search: '?id=' + id, state: id })
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

       // console.log(browserHistory.getCurrentLocation())
    }


    //
    // get all ticket in factor -------------------------------------------->
    //

  


    getData(key) {

        this.setState({
            isLoadingAllTicket: true
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
                    allTicket: responsJson.data,
                    defultAllTicket: responsJson.data,
                    isLoadingAllTicket: false  // stop show loadig ------------------->!
                })
            })
    }




    render() { 



        const renderAllTickets = (
            this.state.isLoadingAllTicket === false ? 
                this.state.allTicket.map((item,index) =>

                <div className="ticket-issued-search-list" key={index}>
                    <p className="ticket-issued-search-list-cell-1">{item.id}</p>
                    <p className="ticket-issued-search-list-cell">{item.products.title ? item.products.title : item.tours.title}</p>
                    <div className="ticket-issued-search-list-cell">
                     <div style={{display:'flex', flexDirection:'column'}}>
                        {MiladiToJalaly(TimeStamp(item.products_episode.start_date))}
                        <p>{item.products_episode.start_hours} - {item.products_episode.end_hours}</p>
                     </div>
                    </div>
                    <p className="ticket-issued-search-list-cell">{item.name}</p>
                    <p className="ticket-issued-search-list-cell">{item.phone}</p>
                    <p className="ticket-issued-search-list-cell">{PriceDigit(item.price_all,'price')}</p>
                    <p className="ticket-issued-search-list-cell">{MiladiToJalaly(TimeStamp(item.created_at_timestamp))}</p>
                    <div className="ticket-issued-search-list-cell">
                        <Link to="/view-ticket"><img src={email} alt="ایمیل" /></Link>
                        <Link to="/view-ticket"><img src={sms} alt="پیام کوتاه" /></Link>
                        <div  onClick={() => this._showTicket(item.id)}><img src={print} alt="پرینت" /></div>
                    </div>
                </div>
                            
                            )
        :
        <div className="loader"></div>
        )
        



        return ( 
            <div className="success-message-payment">
               <div className="message-box bounceIn">
                    <h1>پرداخت موفق</h1>
                    <h2>{this.state.tokenMessage}</h2>
                    <p>پرداخت شما با موفقیت از اعتبار بستانکاری شما انجام شد و در سامانه ثبت گردید</p>

                    <div className="button-countainer-success-message">
                    <Link to={this.state.ticketId} >
                        {/* <Button                                                                  
                            isLoading={this.state.isLoading}                                    
                            title={'دریافت بلیط'}                                                      
                            bgcolor={'#0080FF'}                                                 
                            hoverbgcolor={'#0080FF'}                                          
                            // click={this._getTicket}
                        />   */}
                    </Link>

             
                    </div> 

                    <Button                                                                  
                        isLoading={this.state.isLoading}                                    
                        title={'مشاهده تراکنش ها'}                                                      
                        bgcolor={'#0080FF'}                                                 
                        hoverbgcolor={'#0080FF'}                                          
                        click={this.callGoToReports}
                    /> 


               </div>

               <div className="message-box bounceIn">
                    <h2>بلیط ها</h2>


                    <div className="ticket-issued-search-lists table-desktop" >
                            <div className="ticket-issued-search-list-titles" >
                                <p className="ticket-issued-search-list-title-1">شماره </p>
                                <p className="ticket-issued-search-list-title">نام محصول</p>
                                <p className="ticket-issued-search-list-title">سانس</p>
                                <p className="ticket-issued-search-list-title">نام خریدار</p>
                                <p className="ticket-issued-search-list-title">شماره تماس</p>
                                <p className="ticket-issued-search-list-title">مبلغ </p>
                                <p className="ticket-issued-search-list-title">تاریخ صدور </p>
                                <p className="ticket-issued-search-list-title">دریافت بلیت </p>
                            </div>
                      
                            {renderAllTickets}

                        </div>




                    </div>
            </div>
         );
    }
}
 
export default SuuccessMessage;