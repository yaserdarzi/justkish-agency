import React, { Component } from 'react';

//
//
//
import Input from './../../../components/input/Input';
import logo from './../../../../assets/images/logo.png';
import base from '../../../api/baseURL';
import Token from '../../../api/token';
import './index.css';



class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginEmail:'',
            loginPassword:'',
            loginEmailError:'',
            loginPasswordError:'',
            signinError:''
        }
    }


    componentWillMount(){
        if(Token !== null)
            window.location.pathname = '/dashboard'
    }

    onLogin  (){
        
        console.log(`
       email: ${this.state.loginEmail}
       password: ${this.state.loginPassword}
        `);

        this.loginFetch();
    }

    changedHandler = (e) => {
        //console.log(e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        });
    }


    loginFetch = async() => {
        event.preventDefault();
        const { loginEmail, loginPassword } = this.state;
        let checking = true;

        if(loginEmail === '')
        {
            this.setState({
                loginEmailError:'لطفا ایمیل خود را وارد کنید'
            });
            checking = false;
        }
        if(loginPassword === '')
        {
            this.setState({
                loginPasswordError:'لطفا کلمه عبور خود را وارد کنید'
            });
            checking = false;
        }


        // provider data for API --------->
        const data = {
            "email":loginEmail,
            "password": loginPassword
        } 

        if(checking === true){
            const res = await this.postData(data,'agency/auth/email/login');

         console.log(res.status)

         if(res.status === 401)
         {
             this.setState({
                 signinError:'نام کاربری و یا کلمه عبور شما صحیح نمی باشد.'
             })
         }
         if(res.status === 200)
         {
            console.log(`user is success login and token is : ${res.data.token}`) // TODO Delete Later
            localStorage.setItem('authorization', res.data.token)
            window.location.pathname = '/dashboard'
         }
         console.log("fetch finish.!")
        }
    }



    postData(data,key) {
        console.log("fetching...")

        this.setState({
            isLoading:true,
            errorHandleing:'',
            successMessage:''
        })

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
            //console.log(res, data)
            this.setState({isLoading: false})
            return ({'status':res, 'data':data.data})
          })
      }




    render() {
        return (
            <div >

            { Token === null ? (
                 <div className="index" >
                         <div className="login-signup" >
                         <div className="login-signup-logo" >
                         {/* <div className="myblur" ></div> */}
                             <img className="register-img" src={logo} alt="جاست کیش" />
                             <div className="login-signup-box">
     
     
                                 <div className="login" >
                                     <h1 className="login-title" >ورود به سامانه </h1>
                                     <p className="login-text">برای ورود ایمیل و رمز عبور را وارد نمایید</p>
                                     <p>{this.state.signinError}</p>
                                     <Input 
                                         placeHolder="ایمیل" 
                                         name="loginEmail"
                                         type={'text'}  
                                         changed={this.changedHandler}
                                         error={this.state.loginEmailError}
                                     />
                                     <Input 
                                         placeHolder="رمز عبور" 
                                         name="loginPassword"
                                         type={'password'}  
                                         changed={this.changedHandler}
                                         error={this.state.loginPasswordError}
                                     />
                                     <p className="forget-pass" >
                                         <span>رمز خود را فراموش کرده ام </span>
                                     </p>
                                     <button className="login-btn" onClick={this.onLogin.bind(this)} >ورود</button>
                                 </div>
     
                                 <div className="ls-seprator" ></div>
     
                                 <div className="signup" >
                                     <h1 className="signup-title">درخواست ساین </h1>
                                     <p className="signup-text">فرم درخواست ثبت نام مخصوص آژانس ها</p>
                                     <Input placeHolder="نام آژانس" name="agentname" />
                                     <Input placeHolder="شهر" name="city" />
                                     <Input placeHolder="آدرس ایمیل" name="emailadrress" />
                                     <Input placeHolder="شماره همراه " name="phonenumber" />
                                     <button className="login-btn" >ثبت نام</button>
                                 </div>
                             </div>
     
                         </div>
     
                     </div>
                     </div>
            ) : ('')}

            </div>
        );
    }
}

export default Index;