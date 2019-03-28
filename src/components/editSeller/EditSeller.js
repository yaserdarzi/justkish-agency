import React, { Component } from 'react';

import base from '../../api/baseURL';
import Token from '../../api/token';
import Button from '../common/Button/Button';


//
//
//

import cancel from '../../assets/icons/cancel.svg'
import loadingAvatar from '../../assets/icons/loading.gif'

import './EditSeller.css'

class EditSeller extends Component {

    constructor(props) {
        super(props);
        this.state = {
           
           
        }
    }

 
   


    callEditSeller = () =>{
        
            // provider data for API --------->
            // const data = {
            //     "name": this.state.name,
            //     "phone": this.state.email,
            //     "tell": this.state.password,
            //     "email": this.state.password,
            //     "percent": this.state.percent,
            //     "agent_id": this.state.agentId
            // }


    }


    // postData = (data, key) => {
    //     // console.log("fetching...")

    //     this.setState({
    //         isLoadingAddAgent: true
    //     })

    //     const url = base.baseURL + key;

    //     return fetch(url, {
    //         method: "POST",
    //         cache: "no-cache",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json",
    //             "agent": "web",
    //             "Authorization": Token
    //         },
    //         redirect: "follow",
    //         referrer: "no-referrer",
    //         body: JSON.stringify(data),
    //     })
    //         .then(response => {
    //             const statusCode = response.status
    //             const data = response.json()
    //             return Promise.all([statusCode, data])
    //         })
    //         .then(([res, data]) => {
    //             //console.log(res, data)
    //             this.setState({ isLoadingAddAgent: false })
    //             // after add refresh render all agent and show new record in list ....
    //             if (res === 200)
    //                 this.getAllSellers()
    //             return ({ 'status': res, 'data': data.data })
    //         })


    // }

    sellerInputChage =(event) => {
     
        // this.setState({
        //     [event.target.name] : event.target.value
        // })

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
                    {this.props.deactiveSeller === null ? <button className="edit-seller-deactive" onClick={this.props.deactiveSeller} >غیر فعال کردن عامل فروش</button> : <button className="edit-seller-active" onClick={this.props.deactiveSeller} > فعال کردن عامل فروش</button>}
                        <div className="edit-seller-details" >
                            <div className="edit-seller-titles" >
                                <h3>{this.props.sellerNameValue}</h3>
                                <h4>{this.props.sellerLevel === 'normal' ? 'عامل فروش' : 'مدیر'}</h4>
                            </div>
                            <img src={this.props.sellerImg ? this.props.sellerImg : loadingAvatar} alt="عامل فروش" />
                        </div>
                    </div>
                    
                    <div className="edit-seller-row2">
                   
                        <div className="edit-seller-input-box" >
                            <p>نام عامل فروش</p>
                            <input name="sellerName"  
                                   value={this.props.sellerNameValue || ''}   
                                   onChange={this.sellerInputChage}
                                   />
                        </div>
                        <div className="edit-seller-input-box" >
                            <p>ایمیل</p>
                            <input name="email" 
                                   value={this.props.sellerMailValue || ''}  
                                   onChange={this.sellerInputChage} />
                        </div>
                        <div className="edit-seller-input-box" >
                            <p>تلفن</p>
                            <input name="tell" 
                                   value={this.props.sellerTellValue || ''}  
                                   onChange={this.sellerInputChage} />
                        </div>
                        <div className="edit-seller-input-box" >
                            <p>موبایل</p>
                            <input name="mobile"
                                   value={this.props.sellerMobileValue || ''}  
                                   onChange={this.sellerInputChage} />
                        </div>
                        <div className="edit-seller-input-box" >
                            <p>درصد کمیسیون فروش</p>
                            <input name="percent"
                                   value={this.props.sellerPrecentValue || ''}  
                                   onChange={this.sellerInputChage} />
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
