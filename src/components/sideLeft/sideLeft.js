import React, {Component} from 'react';
import './sideLeft.css';

import { Link } from 'react-router';

import base from '../../api/baseURL';
import Token from '../../api/token';


//
//
//
import operator_edit from './../../../assets/icons/operator_edit.svg'
import change_password from './../../../assets/icons/change_password.svg'
import edit_profile from './../../../assets/icons/edit_profile.svg'
import logput from './../../../assets/icons/logput.svg'
import report from './../../../assets/icons/report.svg'
import loading from '../../../assets/icons/loading.gif'


class SideLeft extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userInfo:{},
            userType:'',
            isLoading:false,
            userAvatar: loading
         }
    }

    componentWillMount(){

        console.log("fetching")
        this.setState({
            isLoading:true
        })
       this.fetchingData(base.baseURL + 'agency');
    
    }
    
    
    fetchingData(url){
        fetch(url, {
            method: "GET", 
            cache: "no-cache",  
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "agent" : "web",
                "Authorization": Token
            },
            redirect: "follow", 
            referrer: "no-referrer"  
        })
        .then(response => response.json())
        .then(responseJson => {
            this.setState({
                userInfo: responseJson.data,
                userType: responseJson.data.agent.type,
                userName: responseJson.data.agent.name,
                walletPrice: responseJson.data.wallet.wallet_price,
                userAvatar: responseJson.data.agent.image,

                isLoading:false
                
            })
            console.log(responseJson.data)
        })
    }


    render() { 
        return ( 
            <div>
                    <div className="checkout" >

                        <div className="checkout-profile" >
                            <img className="checkout-profile-img" src={this.state.userAvatar} alt="profile" />
                            <div className="checkout-profile-desc" >
                                <span className="checkout-profile-name" >{this.state.userName}</span>
                                <span className="checkout-profile-level" >{this.state.userType === 'admin' ? 'مدیر' : 'عامل فروش'}</span>
                            </div>
                        </div>
                        <div className="increas-credit" >
                            <Link to="/wallet"><span className="increas-credit-text" >افزایش اعتبار</span></Link>
                            <div className="credit-show" >
                                <p className="credit-show-number" >{this.state.walletPrice}</p>
                                <span className="credit-show-unit" >تومان</span>
                            </div>
                        </div>

                        </div>
                        <button className="checkout-request" >
                        درخواست تصویه حساب
                        </button>
                        <div className="report" >
                        <img src={report} alt="گزارش مالی" />
                        <span>گزارش فروش ومالی</span>
                        </div>
                        <div className="account" >
                        <p>حساب کاربری شما</p>
                        <ul className="manage-account" >
                            <li className="sub-manage-profile" ><Link to="/addsellers"><img className="manage-profile-icon" src={operator_edit} alt="داشبورد" />مدیریت عاملین فروش</Link></li>
                            <li className="sub-manage-profile" ><Link to="/change-password"><img className="manage-profile-icon" src={change_password} alt="تغییر رمز عبور" />تغییر رمز عبور</Link></li>
                            <li className="sub-manage-profile" ><Link to="/profile"><img className="manage-profile-icon" src={edit_profile} alt="ویرایش حساب کاربری" />ویرایش حساب کاربری</Link></li>
                            <li className="sub-manage-profile" ><img className="manage-profile-icon" src={logput} alt="خروج" />خروج از حساب کاربری</li>
                        </ul>

                    </div>
            </div>
         );
    }
}
 
export default SideLeft;