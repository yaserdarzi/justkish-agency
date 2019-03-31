import React, { Component } from 'react';
import base from '../../api/baseURL';
import Token from '../../api/token';


//
// icons and images ------------->
//
import profile from '../../assets/images/profile.jpg'
import place_holder from '../../assets/icons/place_holder.svg'
import loading from '../../assets/icons/loading.gif'

//
// components ------------->
//


import './Profile.css';
import SideLeft from '../../components/sideLeft/sideLeft';


class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            transaction: true,
            username:'',
            userNameandFamily:'',
            userPhone:'',
            userTell:'',
            userEmail:'',
            userImage:loading,
            getuserinfoLoading:true
        }
    }

    natCardPicture = React.createRef()

    changeNatCardPicture =(e)=>{
        console.log(e)
        
    }

    componentWillMount(){
        this._getUserInformation();
    }



    _getUserInformation =async() => {
        await this.fetchingUserINfo('agency/profile');
 
     }
 
     fetchingUserINfo(key) {
 
         this.setState({
             agentLoading: true
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
                 console.log(responsJson.data.type)
                 this.setState({
                     userType:responsJson.data.type,
                     userEmail:responsJson.data.email,
                     userNameandFamily:responsJson.data.name,
                     userTell:responsJson.data.tell,
                     userPhone:responsJson.data.phone,
                     userImage: responsJson.data.image,
                     getuserinfoLoading: false
                 })
             })
     }
 
 

    render() {

        return (
            <div className="profilee">
                <div className="profile-box container" >
                    <div className="part1" >
                        <SideLeft />
                    </div>
                    <div className="part2" >
                        <div className="user-box" >
                            <div className="user-box-title" >
                                <h1>اطلاعات کاربری</h1>
                                <p>اطلاعات کاربری خود در این بخش ویرایش کنید</p>
                            </div>
                            <div className="user-box-form" >
                                <div className="user-box-img-input" >
                                    {!this.state.getuserinfoLoading ? (
                                                              <div className="user-box-inputs" >
                                                              <div className="profile-field" >
                                                                  <p>نام کاربری</p>
                                                                  <input className="profile-input" name="userName" placeholder="" value={this.state.userEmail}/>
                                                              </div>
                                                              <div className="profile-field" >
                                                                  <p>شماره همراه </p>
                                                                  <input className="profile-input" name="mobile" placeholder="" value={this.state.userPhone} />
                                                              </div>
                                                              <div className="profile-field" >
                                                                  <p>شماره ثابت</p>
                                                                  <input className="profile-input" name="phoneNumber" placeholder="" value={this.state.userTell} />
                                                              </div>
                      
                                                          </div>

                                    ) :  <div className="loader"></div>}
                                    <div className="user-box-img" >
                                        <img src={this.state.userImage} alt="پروفایل" />
                                        <button className="profile-mini-btn" >تغییر نمایه کاربری</button>
                                    </div>
                                </div>
                                <button className="profile-btn" >تغییر اطلاعات</button>

                            </div>
                        </div>

                        <div className="user-box" >
                            <div className="user-box-title" >
                                <h1>اطلاعات آزانس</h1>
                                <p>اطلاعات کاربری خود در این بخش ویرایش کنید</p>
                            </div>
                            <div className="user-box-form" >
                                <div className="user-box-img-input" >
                                    <div className="user-box-inputs" >
                                        <div className="profile-field" >
                                            <p>نام کاربری</p>
                                            <input className="profile-input" name="userName" placeholder="" value={this.state.userEmail} />
                                        </div>
                                        <div className="profile-field" >
                                            <p>شماره همراه </p>
                                            <input className="profile-input" name="mobile" placeholder="" value={this.state.userPhone} />
                                        </div>
                                        <div className="profile-field" >
                                            <p>شماره ثابت</p>
                                            <input className="profile-input" name="phoneNumber" placeholder="" value={this.state.userTell} />
                                        </div>
                                        <div className="profile-field" >
                                            <p>وب سایت</p>
                                            <input className="profile-input" name="website" placeholder="" />
                                        </div>
                                        <div className="profile-field big" >
                                            <p> نشانی</p>
                                            <input className="profile-input" name="address" placeholder="" />
                                        </div>

                                    </div>
                                    <div className="user-box-img" >
                                        <img src={place_holder} alt="پروفایل" />
                                        <button className="profile-mini-btn" >تغییر آرم آژانس </button>
                                    </div>
                                </div>
                                <button className="profile-btn" >تغییر اطلاعات</button>

                            </div>
                        </div>

                        {/* <div className="user-box" >
                            <div className="user-box-title" >
                                <h1>اطلاعات بانکی</h1>
                                <p>برای درخواست تسویه حساب و واریز درآمد ها اطلاعات زیر تکمیل کنید</p>
                            </div>
                            <div className="user-box-form" >
                                <div className="user-box-img-input" >
                                    <div className="user-box-inputs bank-data" >
                                        <div className="profile-field" >
                                            <p>شماره شبا </p>
                                            <input className="profile-input" name="shabaNumber" placeholder=" IR65465131654646545465465" />
                                        </div>
                                        <div className="profile-field" >
                                            <p>شماره کارت </p>
                                            <input className="profile-input" name="cardNumber" placeholder="6104-3378-7662-5995" />
                                        </div>
                                        <div className="profile-field" >
                                            <p>نام صاحب حساب </p>
                                            <input className="profile-input" name="ownerName" placeholder="مریم عزیزی  " />
                                        </div>
                                        <div className="profile-field" >
                                            <p>بانک  </p>
                                            <input className="profile-input" name="bankName" placeholder=" پاسارگاد" />
                                        </div>
                                        <div className="profile-field" >
                                            <p>شعبه  </p>
                                            <input className="profile-input" name="branchName" placeholder=" میدان هدایت" />
                                        </div>
                                        <div className="profile-field" >
                                            <p>تصویر کارت ملی  </p>
                                            <div className="profile-input-file-box">
                                                <span>تصویر را انتخاب کنید</span>
                                                <input className="profile-input-file" 
                                                       onClick={this.changeNatCardPicture}
                                                       ref={this.natCardPicture}
                                                       type="file" 
                                                       name="shabaNumber" />
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <button className="profile-btn" >تغییر اطلاعات</button>

                            </div>
                        </div> */}

                        


                    </div>
                </div>

            </div>
        );
    }
}

export default Profile;
