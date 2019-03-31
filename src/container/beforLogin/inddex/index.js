import React, { Component } from 'react';
import {Link } from 'react-router';


//
//
//
import Input from './../../../components/input/Input';
import logo from '../../../assets/images/logo.png';
import base from '../../../api/baseURL';
import Token from '../../../api/token';
import Button from '../../../components/common/Button/Button';
import './index.css';



class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginEmail:'',
            loginPassword:'',
            loginEmailError:'',
            loginPasswordError:'',
            signinError:'',
            agentname:'',
            emailadrress:'',
            city:'',
            phonenumber:'',
            regSuccess:''

        }


 

    }


    componentWillMount(){
        if(Token !== null)
            window.location.pathname = '/dashboard'
    }

    onLogin  (){
        // clear all error validation
        this.clearValidation();

        // set fetching for login
        this.loginFetch();
    }

    changedHandler = (e) => {
        //console.log(e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        });
    }


    loginFetch = async() => {
      
      //  event.preventDefault();
        const { loginEmail, loginPassword } = this.state;
        let checking = true;
        this.setState({
            isLoading:true
        })

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
       

        this.setState({
            isLoading:false
        })
    }

    // clear all state for error validation ---------------------->
    clearValidation(){
        this.setState({
        
            loginEmailError:'',
            loginPasswordError:'',
            signinError:'',
            agentnameError:'',
            emailadrressError:'',
            cityError:'',
            phonenumberError:'',
            regSuccess:'',
            isLoadingRegister:false
        })
    }

    regForm = React.createRef()
    registerFetch = async(event) =>{
        event.preventDefault();
        this.setState({
            isLoadingRegister:true
        })
       // alert("regiter")
        let checking = true;

        // clear all error validation
        this.clearValidation();

        // check validation of all inputs ---------------->
        if(this.state.agentname === '')
        {
            this.setState({
                agentnameError:'لطفا نام خود را وارد کنید.'
            })
            checking = false
        }
        if(this.state.city === '')
        {
            this.setState({
                cityError:'لطفا نام شهر خود را وارد کنید.'
            })
            checking = false
        }
        if(this.state.emailadrress === '')
        {
            this.setState({
                emailadrressError:'لطفا آدرس ایمیل خود را وارد کنید.'
            })
            checking = false
        }
        if(this.state.phonenumber === '' || this.state.phonenumber.length <11)
        {
            this.setState({
                phonenumberError:'لطفا تلفن تماس خود را وارد کنید.'
            })
            checking = false
        }


        // provider data for API --------->
        const data = {
            "name":this.state.agentname,
            "phone":this.state.phonenumber,
            "city":this.state.city,
            "email": this.state.emailadrress
        } 



        if(checking === true){
          
            console.log("registering. . .")

            const res = await this.postData(data,'agency/request');

            if(res.status === 200)
            {
                
               console.log(`Agent is registerd!`) // TODO: Delete Later 
               this.setState({
                   regSuccess:'درخواست شما با موفقیت ارسال شد.',
                  
                   
               })

               this.regForm.current.reset()
              
               //window.location.pathname = '/dashboard'
            }

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
                         <div className="myblur" ></div>
                             <img className="register-img" src={logo} alt="جاست کیش" />
                             <div className="login-signup-box">
     
                                 <div className="login" >
                                     <h1 className="login-title" >ورود به سامانه </h1>
                                     <p className="login-text">برای ورود ایمیل و رمز عبور را وارد نمایید</p>
                                     <p className="signinError shake">{this.state.signinError}</p>
                                     <Input 
                                         placeholder="ایمیل" 
                                         name="loginEmail"
                                         type={'text'}  
                                         changed={this.changedHandler}
                                         error={this.state.loginEmailError}
                                     />
                                     <Input 
                                         placeholder="رمز عبور" 
                                         name="loginPassword"
                                         type={'password'}  
                                         changed={this.changedHandler}
                                         error={this.state.loginPasswordError}
                                     />
                                     <Link to="/forgetpassword">
                                        <p className="forget-pass" >
                                            <span>رمز خود را فراموش کرده ام </span>
                                        </p>
                                     </Link>
                                     {/* <button className="login-btn" onClick={this.onLogin.bind(this)} >ورود</button> */}
                                     <Button                                                                  
                                        isLoading={this.state.isLoading}                                    
                                        title={'ورود'}                                                      
                                        bgcolor={'#0080FF'}                                                 
                                        hoverbgcolor={'#0080FF'}                                          
                                        click={this.onLogin.bind(this)}/>   
                                 </div>
     
                                 <div className="ls-seprator" ></div>
     
                                 <form className="signup" onSubmit={this.registerFetch} ref={this.regForm} >
                                     <h1 className="signup-title">درخواست ساین </h1>
                                     <p className="signup-text">فرم درخواست ثبت نام مخصوص آژانس ها</p>
                                     <p className="regSuccess zoomIn">{this.state.regSuccess}</p>
                                     <Input 
                                     
                                        placeholder="نام آژانس" 
                                        name="agentname"ب
                                        type={'text'}  
                                        changed={this.changedHandler}
                                        error={this.state.agentnameError}
                                        max="40" />
                                     <Input 
                                        placeholder="شهر" 
                                        name="city"
                                        type={'text'}  
                                        changed={this.changedHandler}
                                        error={this.state.cityError}
                                        max="30"  />
                                     <Input 
                                        placeholder="آدرس ایمیل" 
                                        name="emailadrress"
                                        type={'email'}  
                                        changed={this.changedHandler}
                                        error={this.state.emailadrressError}
                                        max="60"  />
                                     <Input 
                                        placeholder="شماره همراه " 
                                        name="phonenumber"
                                        type={'text'}  
                                        changed={this.changedHandler}
                                        error={this.state.phonenumberError}
                                        max="11"  />

                                     <button className="login-btn" type="submit" value="Submit"  >{this.state.isLoadingRegister ? <div className="loading-button"></div>  : 'ثبت نام'}</button>
                                 </form>
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