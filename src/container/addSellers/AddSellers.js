import React, { Component } from 'react';

//
// external component ---------------------->
//
import Input from './../../components/input/Input';
import Seller from './../../components/seller/Seller';
import SideLeft from '../../components/sideLeft/sideLeft';
import base from '../../api/baseURL';
import Token from '../../api/token';

//
// icons and imeages ----------------------->
//
import profile from './../../../assets/images/profile.jpg';
import operator_edit from './../../../assets/icons/operator_edit.svg';
import change_password from './../../../assets/icons/change_password.svg';
import edit_profile from './../../../assets/icons/edit_profile.svg';
import logput from './../../../assets/icons/logput.svg';
import report from './../../../assets/icons/report.svg';

//
// css class ------------------------------>
//

import './AddSellers.css'
import './../home/Home.css'



class AddSellers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            agentLoading: true,
            agents:[],
            name:'',
            email:'',
            password:'',
            percent:'',
            isLoadingAddAgent: false

        }
        this.addNewSeller = this.addNewSeller.bind(this)
    }


    componentDidMount(){
        this.getAllSellers();

    }

    changedHandler = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        });
    }


    getAllSellers()
    {
        console.log("fetching sellers is start......");
 
        this.getData('agency/agent')
 
    }


    getData(key) {
        console.log("fetching...")

        this.setState({
            // isLoading:true,
            // errorHandleing:'',
            // successMessage:''
        })

         const url =  base.baseURL + key;

          return fetch(url, {
              method: "GET", 
              cache: "no-cache",  
              headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json",
                  "agent" : "web" ,
                  "Authorization": Token
              },
              redirect: "follow", 
              referrer: "no-referrer" 
          })
          .then(response =>  response.json())
          .then( responsJson => {
              console.log(responsJson.data)
              this.setState({
                  agents: responsJson.data,
                  agentLoading: false
              })
          })
      }



      addNewSeller(event){

        event.preventDefault();
        console.log("seller added.")

              // provider data for API --------->
        const data = {
            "name" : this.state.name,
            "email" : this.state.email,
            "password" : this.state.password,
            "repassword" : this.state.password,
            "percent": this.state.percent,
            "phone": '',
            "tell": ''
        } 

        console.log(data);
        this.postData(data,'agency/agent');
       

      }

      postData =  (data,key) => {
        console.log("fetching...")

        this.setState({
            isLoadingAddAgent: true
        })

         const url =  base.baseURL + key;

          return   fetch(url, {
              method: "POST", 
              cache: "no-cache",  
              headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json",
                  "agent" : "web",
                  "Authorization": Token
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
            this.setState({isLoadingAddAgent: false})
            // after add refresh render all agent and show new record in list ....
            this.getAllSellers()
            return ({'status':res, 'data':data.data})
          })

          
      }





    render() {
     

        const allAgents = ( 
            // render all agents and pass props name , avatar , level ------->
          this.state.agentLoading === false ?    this.state.agents.map((item, index) =>  
            <Seller key={index}  
                    name={item.name} 
                    avatar={item.image} 
                    level={item.type === 'normal' ? 'عامل فروش' : 'مدیر'} /> 
                ) :  <div className="loader"></div> 

           


            // Object.keys(agents).map((item, i) => (
            //     console.log(item),
            //     <Seller   name={agents.name} level="admin" />
            //   ))

         
            //   <Seller  key={index}  name={item.name} level={item.type === 'normal' ? 'عامل فروش' : 'مدیر'} />
            // <Seller key= {i} name={agents.name} level="admin" />
        )

        return (
            <div className="add-sellers container" >
                <div className="part1" >
                 <SideLeft />
                </div>
                <div className="part2" >
                    <div className="add-sellers-title" >
                        <h1>مدیریت عاملین فروش</h1>
                        <p>حذف و اضافه کردم و تغییر سطح دسترسی عامیلن فروش با امکان زیر صورت پذیر است</p>
                    </div>

                    <form className="add-sellers-form" onSubmit={this.addNewSeller} >
                        <div className="add-sellers-fields">
                            <div className="add-sellers-field" >
                                <p>نام عامل فروش</p>
                                <input name="name" placeHolder="یاسر درزی" onChange={this.changedHandler}/>
                            </div>
                            <div className="add-sellers-field" >
                                <p>ایمیل</p>
                                <input name="email" placeHolder="example@gmail.com" onChange={this.changedHandler} />
                            </div>
                            <div className="add-sellers-field" >
                                <p>گذرواژه</p>
                                <input name="password" placeHolder="طول کاراکتر باید تا ۸ کاراکتر باشد" onChange={this.changedHandler} />
                            </div>
                            <div className="add-sellers-field" >
                                <p>درصد کمیسیون فروش</p>
                                <input name="percent" placeHolder="برای مثال ۸٪" onChange={this.changedHandler} />
                            </div>
                        </div>

                        <button className="add-sellers-btn" >{this.state.isLoadingAddAgent ? <div className="loading-button"></div>  : 'افزودن'}</button>
                    </form>
                    <div className="add-sellers-list" >
                       {allAgents}
                    </div>
                </div>

            </div>
        );
    }
}

export default AddSellers;