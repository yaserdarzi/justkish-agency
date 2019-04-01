import React, { Component } from 'react';
import { Link } from 'react-router';

//
// external compoennt ----------------->
//
import Input from '../../../components/input/Input';
import Token from '../../../api/token';
import base from '../../../api/baseURL';
import Button from '../../../components/common/Button/Button';


//
// icons and images ----------------->
//
import logo from '../../../assets/images/logo.png'

import './ForgetPassword.css';



class ForgetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:''
        }
    }

    componentWillMount(){
        if(Token !== null)
            window.location.pathname = '/dashboard'
    }

    _changedHandler = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        });
    }

 
    _callForgetPassword = () => {
        console.log("call forget password!");
        let check = false;

        if(this.state.email === '')
        {
            this.setState({
                emailError:'لطفا پست الکترونیک خود را وارد کنید.'
            })
            check = true;

        }


        // provider data for API --------->
        const data = {
            "email": this.state.email
        }

        if(check === false)
            this.fetchForgetpassword(data,'agency/auth/email/resetPassword')
    }


    fetchForgetpassword = (data,key) => {
        console.log("fetching...")
        console.log(data)

        // this.setState({
        //     isLoading:true,
        //     errorHandleing:'',
        //     successMessage:''
        // })

         const url =  base.baseURL + key;

          return fetch(url, {
              method: "POST", 
              cache: "no-cache",  
              headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json",
                  "agent" : "web" 
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
            this.setState({isLoading: false})
            return ({'status':res, 'data':data.data})
          })
    }

    render() {
        return (
            <div className="forget-password">
                <div className="forget-box" >
              

                    <div className="forget-child" >
                    <div className="myblur-forget-pass" ></div>
                        <div style={{zIndex:'99999'}}>
                            <Link to="/index">
                                <img src={logo} alt="لوگو" />
                            </Link>
                        </div>
                        
                        <h1>بازنشانی رمز عبور</h1>
                        <p>جهت بازیابی کلمه عبور ، لطفا پست الکترونیک خود را وارد نمایید.</p>
                        <Input 
                            name="email" 
                            placeholder="پست الکترونیک"
                            type={'text'}  
                            changed={this._changedHandler}
                            error={this.state.emailError}
                         />

                        <div style={{zIndex:'9999', padding:'2rem 0'}}>
                                <Button                                                                  
                                isLoading={this.state.isLoading}                                    
                                title={'بازنشانی رمز عبور'}                                                      
                                bgcolor={'#0080FF'}                                                 
                                hoverbgcolor={'#0080FF'}                                          
                                click={this._callForgetPassword}
                            />  
                        </div>
                   
                       
                  
                    </div>

                </div>
            </div>
        );
    }
}

export default ForgetPassword;