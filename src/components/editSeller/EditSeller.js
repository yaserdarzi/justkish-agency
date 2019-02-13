import React, { Component } from 'react';

import base from '../../api/baseURL';
import Token from '../../api/token';
import Button from '../common/Button/Button';


//
//
//

import cancel from './../../../assets/icons/cancel.svg'
import loadingAvatar from '../../../assets/icons/loading.gif'

import './EditSeller.css'

class EditSeller extends Component {

    constructor(props) {
        super(props);
        this.state = {

           
        }
    }

    componentWillMount(){
        console.log("fettttching")
        // this.getSeller('agency/agent/2')
    }



    callEditSeller = () =>{
        alert("hi")
    }



    render() {
        return (
            <div className="edit-seller" >
            
                
                <div className="edit-seller-blur" onClick={this.props.closeEditSeller} ></div>
                <div className="edit-seller-box" >
                    <img className="edit-seller-close" onClick={this.props.closeEditSeller} src={cancel} alt="انصراف" />
                    <div className="edit-seller-row1">
                    {/* 
                    active and deactive user :

                        if is null == user active
                        if have date == user was deactive
                    
                    */}
                    {!this.props.deactiveSeller === null ? <button className="edit-seller-deactive" onClick={this.props.deactiveSeller} >غیر فعال کردن عامل فروش</button> : <button className="edit-seller-active" onClick={this.props.deactiveSeller} > فعال کردن عامل فروش</button>}
                        <div className="edit-seller-details" >
                            <div className="edit-seller-titles" >
                                <h3>{this.props.sellerName}</h3>
                                <h4>{this.props.sellerLevel}</h4>
                            </div>
                            <img src={this.props.sellerImg ? this.props.sellerImg : loadingAvatar} alt="عامل فروش" />
                        </div>
                    </div>
                    
                    <div className="edit-seller-row2">
                   
                        <div className="edit-seller-input-box" >
                            <p>نام عامل فروش</p>
                            <input name="name" 
                                   value={this.props.sellerNameValue}   
                                   onChange={this.props.sellerInputChage} />
                        </div>
                        <div className="edit-seller-input-box" >
                            <p>ایمیل</p>
                            <input name="email" 
                                   value={this.props.sellerMailValue}  
                                   onChange={this.props.sellerInputChage} />
                        </div>
                        <div className="edit-seller-input-box" >
                            <p>تلفن</p>
                            <input name="tell" 
                                   value={this.props.sellerTellValue}  
                                   onChange={this.props.sellerInputChage} />
                        </div>
                        <div className="edit-seller-input-box" >
                            <p>موبایل</p>
                            <input name="mobile"
                                   value={this.props.sellerMobileValue}  
                                   onChange={this.props.sellerInputChage} />
                        </div>
                        <div className="edit-seller-input-box" >
                            <p>درصد کمیسیون فروش</p>
                            <input name="percent"
                                   value={this.props.sellerPrecentValue}  
                                   onChange={this.props.sellerInputChage} />
                        </div>
                    </div>
                    
                    <Button                                                                  
                        isLoading={this.state.isLoading}                                    
                        title={'ذخیره'}                                                      
                        bgcolor={'#0080FF'}                                                 
                        hoverbgcolor={'#0080FF'}                                          
                        click={this.callEditSeller}/>  
                </div>
            </div>
        );
    }
}

export default EditSeller;
