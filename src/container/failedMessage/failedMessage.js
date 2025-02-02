import React, {Component} from 'react';
import Button from '../../components/common/Button/Button';

import './failedMessage.css'
class FailedMessage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tokenMessage:''
         }
    }



    componentWillMount(){
        this.setState({
          tokenMessage:  this.getParms('token')
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



    render() { 
        return ( 
            <div className="failed-message-payment">
            <div className="failed-message-box bounceIn">
                 <h1>پرداخت ناموفق</h1>
                 <h2>{this.state.tokenMessage}</h2>
                <p>درخواست پرداخت شما از میزان بستانکاری شما بیشتر است و افزایش اعتبار شما با شکست مواجه شد</p>

                 <Button                                                                  
                     isLoading={this.state.isLoading}                                    
                     title={'بررسی و پرداخت مجدد'}                                                      
                     bgcolor={'#0080FF'}                                                 
                     hoverbgcolor={'#1fc056cc'}                                          
                     click={this.callSubmit}
                 />  
            </div>
         </div>
         );
    }
}
 
export default FailedMessage;