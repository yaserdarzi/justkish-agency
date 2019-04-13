import React, { Component } from 'react';
 

import base from '../../api/baseURL';
import Token from '../../api/token';
import Button from '../../components/common/Button/Button';


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
            getuserinfoLoading:true,
            file: '',
            imagePreviewUrl: '',
            agancyInfo:[],
            agancyName:'',
            agancyMobile: '',
            agancyPhone: '',
            agancyLogo: loading,
            editableAgancy: false
        }
    }

    natCardPicture = React.createRef()

    changeNatCardPicture =(e)=>{
        console.log(e)
        
    }

    componentWillMount(){
        this._getUserInformation();
    }

    // componentDidMount(){
    //     this.setState({
    //                 agancyName:this.state.agancyInfo.name,
    //                 agancyMobile: this.state.agancyInfo.phone,
    //                 agancyPhone: this.state.agancyInfo.tell, 
    //                 agancyLogo: this.state.agancyInfo.image, 
    //     })
    // }



    _getUserInformation =async() => {
        await this.fetchingUserINfo('agency/profile');
        await this._getAgancyInfo('agency')
 
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




     _handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
          this.setState({
            file: file,
            imagePreviewUrl: reader.result,
            userImage: reader.result

          });
        }
        reader.readAsDataURL(file)

        console.log(this.state.userImage)

 
    }


    //
    // change image logo for agancy ------------------------------?
    //

    _handleImageChangeAgancy = (e) => {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
        // console.log(file)
        // this.setState({
        //     file: e.target.files[0]
        // })
        reader.onloadend = () => {
           
          this.setState({
            editableAgancy:true,
            file: file,
            imagePreviewUrl: reader.result,
             agancyLogo: reader.result 

          });
        }
       reader.readAsDataURL(file)

       

 
    }


    changedHandler = (e) => {
        //console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value,
            editableAgancy:true
        });
    }

    changedHandlerUser  = (e) => {
        //console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value, 
        });
    }


    //
    // agancy information           --------------------------------->
    //
 

    _changeAgancyInfo =async() => {
        this.setState({
            isLoadingUploadAgancy: true
        })
        console.log("agancy init!")

        // const dataProw = new FormData();
        // dataProw.append('image', this.state.file, this.state.file.name)

            // provider data for API --------->
    //   const dataProw = {
    //     "name":this.state.agancyName,
    //     "tell":this.state.agancyPhone,
    //     "phone":this.state.agancyMobile,
    //     "image": this.state.file
    // } 
    // console.log(this.state.file)

    let dataProw = new FormData();
    dataProw.append('name', this.state.agancyName);
    dataProw.append('tell', this.state.agancyPhone);
    dataProw.append('phone',this.state.agancyMobile);
    if (this.state.file)
        dataProw.append('image',this.state.file,this.state.file.name); 
 
   
    
    // for (var pair of db.entries())
    // {
    //  console.log(pair[0]+ ', '+ pair[1]); 
    // }

    const res = await this.postData(dataProw,'agency/update');
    console.log(res)
    this.setState({
        isLoadingUploadAgancy: false,
        editableAgancy:false
    })
    }


    postData(data,key) {
        console.log(data)
        console.log(key)

       

         const url =  base.baseURL + key;

          return fetch(url, {
              method: "POST", 
              cache: "no-cache",  
              headers: {
                //   "Content-Type": "application/json",
               // "content-type": "multipart/form-data",
                  "Accept": "application/json",
                  "agent" : "web",
                  "Authorization": Token,
                  
              },
            //   body: JSON.stringify(data), 
              body: data, 
          })
          .then(response => {
            const statusCode = response.status
            const data = response.json()
            console.log(response)
            return Promise.all([statusCode, data])
          })
          .then(([res, data]) => {
            //console.log(res, data)
            this.setState({isLoading: false})
            return ({'status':res, 'data':data.data})
          })
      }
 

    // 
    // fetch agancy information api --------------------------------->
    //

    _getAgancyInfo(key){
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
                    agancyInfo:responsJson.data,
                    agancyName:responsJson.data.name,
                    agancyMobile:responsJson.data.phone,
                    agancyPhone:responsJson.data.tell, 
                    agancyLogo:responsJson.data.image, 
                    getuserinfoLoading: false
                })
            })
    }

    render() {

        // refrence :https://codepen.io/hartzis/pen/VvNGZP

        // let {imagePreviewUrl} = this.state;
        // let $imagePreview = null;
        // if (imagePreviewUrl) {
        //   $imagePreview = (<img src={imagePreviewUrl} />);
        // } else {
        //   $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        // }

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
                                                                  <input className="profile-input" name="userEmail" placeholder="" value={this.state.userEmail} onChange={this.changedHandlerUser}/>
                                                              </div>
                                                              <div className="profile-field" >
                                                                  <p>شماره همراه </p>
                                                                  <input className="profile-input" name="userPhone" placeholder="" value={this.state.userPhone} />
                                                              </div>
                                                              <div className="profile-field" >
                                                                  <p>شماره ثابت</p>
                                                                  <input className="profile-input" name="userTell" placeholder="" value={this.state.userTell} />
                                                              </div>
                      
                                                          </div>

                                    ) :  <div className="loader"></div>}


                                    <div className="user-box-img" >
                                        {/* image prive for avatar --------------------> */}
                                        <img src={this.state.userImage} alt="پروفایل" />
                                        {/* make lable to call hiden input for upload file  called upload-photo from id */}
                                        <label className="profile-mini-btn" htmlFor="upload-photo">تغییر نمایه کاربری</label>
                                        {/* hiden input uploader  */}
                                        <input  
                                            type="file" 
                                            id="upload-photo"
                                            onChange={(e)=>this._handleImageChange(e)} 
                                        />
                                    </div>

                                </div>
                                <button className="profile-btn" >ذخیره اطلاعات</button>

                            </div>
                        </div>


                    {/* agance information  */}

                        <div className="user-box" >
                            <div className="user-box-title" >
                                <h1>اطلاعات آژانس</h1>
                                <p>اطلاعات کاربری خود در این بخش ویرایش کنید</p>
                            </div>
                            <div className="user-box-form" >
                                <div className="user-box-img-input" >
                                    <div className="user-box-inputs" >
                                        <div className="profile-field" >
                                            <p>نام آژانس</p>
                                            <input className="profile-input" name="agancyName" placeholder="" onChange={this.changedHandler} value={this.state.agancyName} />
                                        </div>
                                        <div className="profile-field" >
                                            <p>شماره همراه </p>
                                            <input className="profile-input" name="agancyMobile" placeholder="" onChange={this.changedHandler} value={this.state.agancyMobile} />
                                        </div>
                                        <div className="profile-field" >
                                            <p>شماره ثابت</p>
                                            <input className="profile-input" name="agancyPhone" placeholder="" onChange={this.changedHandler} value={this.state.agancyPhone} />
                                        </div>
                                        <div className="profile-field" >
                                            <p>وب سایت</p>
                                            <input className="profile-input" name="website" placeholder="" onChange={this.changedHandler}/>
                                        </div>
                                        <div className="profile-field big" >
                                            <p> نشانی</p>
                                            <input className="profile-input" name="address" placeholder="" onChange={this.changedHandler}/>
                                        </div>

                                    </div>
                                    {/* <div className="user-box-img" >
                                        <img src={this.state.agancyLogo || place_holder} alt="پروفایل" />
                                        <button className="profile-mini-btn" >تغییر آرم آژانس </button>
                                    </div> */}

                                    <div className="user-box-img" >
                                        {/* image prive for avatar --------------------> */}
                                        <img src={this.state.agancyLogo || place_holder} alt="پروفایل" />
                                        {/* make lable to call hiden input for upload file  called upload-photo from id */}
                                        <label className="profile-mini-btn" htmlFor="upload-photo-agancy">تغییر نمایه آژانس</label>
                                        {/* hiden input uploader  */}
                                        <input  
                                            type="file" 
                                            id="upload-photo-agancy"
                                            onChange={(e)=>this._handleImageChangeAgancy(e)} 
                                        />
                                    </div>

                                </div>
                                                                                                                  
                                    {this.state.editableAgancy ? 
                                       <Button                                                                  
                                       isLoading={this.state.isLoadingUploadAgancy}                                    
                                       title={'ذخیره اطلاعات'}                                                      
                                       bgcolor={'#0080FF'}                                                 
                                       hoverbgcolor={'#0080FF'}                                          
                                       click={this._changeAgancyInfo}/>  
                                    : ''}

                                {/* <button className="profile-btn" onClick={this._changeAgancyInfo} >تغییر اطلاعات</button> */}

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
