import React , {Component} from 'react'
import './successMessage.css';
import Button from '../../components/common/Button/Button';
import { Link } from 'react-router';





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

    _getTicket =() => {
        // window.location.pathname = "/view-ticket?id=" + this.state.ticketId;
        window.location.pathname = "/ticket-issued";
    }


    render() { 
        return ( 
            <div className="success-message-payment">
               <div className="message-box bounceIn">
                    <h1>پرداخت موفق</h1>
                    <h2>{this.state.tokenMessage}</h2>
                    <p>پرداخت شما با موفقیت از اعتبار بستانکاری شما انجام شد و در سامانه ثبت گردید</p>

                    <div className="button-countainer-success-message">
                    <Link to={this.state.ticketId} >
                    <Button                                                                  
                        isLoading={this.state.isLoading}                                    
                        title={'دریافت بلیط'}                                                      
                        bgcolor={'#0080FF'}                                                 
                        hoverbgcolor={'#0080FF'}                                          
                        // click={this._getTicket}
                    />  
                    </Link>

                <Button                                                                  
                        isLoading={this.state.isLoading}                                    
                        title={'مشاهده تراکنش ها'}                                                      
                        bgcolor={'#0080FF'}                                                 
                        hoverbgcolor={'#0080FF'}                                          
                        click={this.callGoToReports}
                    /> 
                    </div> 
               </div>
            </div>
         );
    }
}
 
export default SuuccessMessage;