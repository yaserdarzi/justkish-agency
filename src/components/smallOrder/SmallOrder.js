/*
small order is left sid of sodor belit - list sabad kharid --->
*/

import React, { Component } from 'react';
import MinusPlus from './../common/MinusPlus/MinusPlus'
import PriceDigit from '../priceDigit/priceDigit';
import base from '../../api/baseURL';
import Token from '../../api/token';

//
// icons and images ----------------------->
//
import deletee from './../../../assets/icons/delete.svg';



import './SmallOrder.css';




class SmallOrder extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            person:0,
            agentLoading:false
        }
    }



        //minus plus 
        handleFilterUpdate = (newValue) => {
            this.setState({
                person: newValue
            });
        }
        actionDec = async(data,id) =>{

            console.log("dec")
            console.log(`
            data is -------------------
            type :${data.type}
            id :${data.products_id}
            price_age_range_id :${id}
            episode_id :${data.products_episode.id}
            `);

            // provider data for API --------->
            const dataProw = {
                "type":data.type,
                "id":data.products_id,
                "price_age_range_id":id,
                "episode_id": data.products_episode.id
            } 
            
           const res = await this.postData(dataProw,'agency/shopping/minus');
           console.log(res)
           console.log(res.status);
           this.props.action(); // refresh shoping bag
        
        }

        actionInc =async(data,id) => {
            console.log("pluse");
            
            console.log(`
            data is -------------------
            type :${data.type}
            id :${data.products_id}
            price_age_range_id :${id}
            episode_id :${data.products_episode.id}
            `);

            // provider data for API --------->
            const dataProw = {
                "type":data.type,
                "id":data.products_id,
                "price_age_range_id":id,
                "episode_id": data.products_episode.id
            } 
            
           const res = await this.postData(dataProw,'agency/shopping/add');
           console.log(res)
           console.log(res.status);
           this.props.action(); // refresh shoping bag
        
          


        }

        postData(data,key) {
            console.log(data)
    
            this.setState({
             
            })
    
             const url =  base.baseURL + key;
    
              return fetch(url, {
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
                //console.log(res, data)
                this.setState({isLoading: false})
                return ({'status':res, 'data':data.data})
              })
          }
    

    render() {

        const renderPrices = ( 
            this.props.prices !== undefined ?
            // <p>{this.props.prices.product_price_range.price}</p>

            <li key={this.props.prices.product_price_range.id} className="create-ticket-tourist-change-li">
            {console.log(this.props.prices)}
            <div className="notCloseMenuLand">
                <h6 className="notCloseMenuLand">{this.props.prices.product_price_range.title}</h6>
                <span>{PriceDigit(this.props.prices.product_price_range.price,'price')}</span> 
                <p className="notCloseMenuLand">({this.props.prices.product_price_range.min} تا {this.props.prices.product_price_range.max} سال)</p> 
             
            </div>
            <div className="MinusPlus" >
                <MinusPlus actionDec={() => this.actionDec(this.props.prices,this.props.prices.product_price_range.id)} actionInc={() => this.actionInc(this.props.prices,this.props.prices.product_price_range.id)} change={this.handleFilterUpdate} counter={this.props.prices.count}   />
            </div>
        </li>
             
            : ''
           

        )

        return (
            <div >
                <div className="create-ticket-your-order">
                    <div className="create-ticket-your-order-box1">
                        <p className="create-ticket-your-order-title" ><img src={deletee} alt="حذف" />{this.props.title}</p>
                        <div className="create-ticket-your-order-numbers">
                    
                        </div>
                    </div>
                    <div className="create-ticket-your-order-box2">
                        <span> {this.props.date}</span>  
                    </div>
                    <div className="MinusPlus" >
                            {renderPrices}
                            </div>
                </div>
            </div>
        );
    }
}

export default SmallOrder;
