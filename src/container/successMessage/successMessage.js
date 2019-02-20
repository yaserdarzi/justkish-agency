import React , {Component} from 'react'
import './successMessage.css';
import Button from '../../components/common/Button/Button';





class SuuccessMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="success-message-payment">
               <div className="message-box bounceIn">
                    <h1>پرداخت موفق</h1>
                    <p>پرداخت شما با موفقیت از اعتبار بستانکاری شما انجام شد و در سامانه ثبت گردید</p>

                    <Button                                                                  
                        isLoading={this.state.isLoading}                                    
                        title={'مشاهده تراکنش ها'}                                                      
                        bgcolor={'#0080FF'}                                                 
                        hoverbgcolor={'#1fc056cc'}                                          
                        click={this.callSubmit}
                    />  
               </div>
            </div>
         );
    }
}
 
export default SuuccessMessage;