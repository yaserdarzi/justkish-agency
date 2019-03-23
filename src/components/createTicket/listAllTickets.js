import React, { Component } from 'react';

import Button from '../common/Button/Button';
import MinusPlus from './createTicketMinusPlus';
import PriceDigit from '../priceDigit/priceDigit';
import TimeStamp from '../times/timespanToDate';
import base from '../../api/baseURL';
import Token from '../../api/token';
import DateJalaly from '../times/dateMiladiToShamsi';



import arrowdown2 from '../../../assets/icons/arrow-down2.svg';
 
 

class Seller extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectTourist: false,
            allTickets:[],
            person:0,
            agentLoading:false,
            isLoadingAdding:false
        }
    }

 
    componentDidMount = async () => {
        window.addEventListener('scroll', this.handleScroll);
        
        
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);

    }

    selectTouristNumberHandler = (event) => {
        event.preventDefault();
        this.setState((prev) => {
            return {
                selectTourist: !prev.selectTourist
            }
        },
            () => {
                document.addEventListener('click', this.closeMenu);
            }
        ) 


    }


    closeMenu = (e) => {
        if (e.target.matches('.notCloseMenuLand') ||
            e.target.matches('.create-ticket-numbers') ||
            e.target.matches('.create-ticket-number') ||
            e.target.matches('.create-ticket-tourist-numbers') ||
            e.target.matches('.create-ticket-tourist-change') ||
            e.target.matches('.create-ticket-tourist-change-ul') ||
            e.target.matches('.create-ticket-tourist-change-li') ||
            e.target.matches('.MinusPlus')
        ) {
            this.setState(() => {
                document.addEventListener('click', this.closeMenu);
            });
        } else {
            this.setState({
                selectTourist: false
            })
            this.setState(() => {
                document.removeEventListener('click', this.closeMenu);
            });
        }

    }

    actionDec = async(data,id) =>{
        console.log("click added") 
        console.log(id) 
  
  
        console.log(`
        data is -------------------
        type :${data.type}
        id :${data.id}
        price_age_range_id :${id}
        episode_id :${data.episode_id}
        `);
    }


    //
    // add or pluse in shop bag --------------------------->
    //

    actionInc = async(data,id) =>{
      console.log("click added") 
      console.log(id) 


      console.log(`
      data is -------------------
      type :${data.type}
      id :${data.id}
      price_age_range_id :${id}
      episode_id :${data.episode_id}
      `);

    // provider data for API --------->
    const dataProw = {
        "type":data.type,
        "id":data.id,
        "price_age_range_id":id,
        "episode_id": data.episode_id
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


      addToShopBag = async(data,id) =>{
        console.log(event.target.name)
        console.log("click") 
        console.log(id) 
        this.setState({
            isLoadingAdding:true
        })
  
        console.log(`
        data is -------------------
        type :${data.type}
        id :${data.id}
        price_age_range_id :${id}
        episode_id :${data.episode_id}
        `);
  
      // provider data for API --------->
      const dataProw = {
          "type":data.type,
          "id":data.id,
          "price_age_range_id":id,
          "episode_id": data.episode_id
      } 
  
      const res = await this.postData(dataProw,'agency/shopping/add');
      console.log(res)
      console.log(res.status);
      this.setState({
        isLoadingAdding:false
    })
      this.props.action(); // refresh shoping bag
      
      }


    handleFilterUpdate = (newValue) => {
        this.setState({
            person: newValue
        });
    }


    render() {

        const renderPrice = (
            // render all agents and pass props name , avatar , level ------->
            this.state.agentLoading === false ? this.props.data.prices.map((item, index) =>
                <p key={index}><span className="create-ticket-price-span">{item.title}</span> <span>{PriceDigit(item.price,'price')}</span></p>
            ) : <div className="loader"></div>

        )

        //
        // for drop list to incremnt and decremnt ticket.
        //
        const renderPriceAction = (
            // render all agents and pass props name , avatar , level ------->
            this.state.agentLoading === false ? this.props.data.prices.map((item, index) =>
                // <p ><span className="create-ticket-price-span">{item.title}</span> <span>{PriceDigit(item.price,'price')}</span></p>
                <li key={index} className="create-ticket-tourist-change-li">
                <div className="notCloseMenuLand">
                    <h6 className="notCloseMenuLand">{item.title}</h6>
                    <span>{PriceDigit(item.price,'price')}</span> 
                    <p className="notCloseMenuLand">( تا {item.max} سال)</p> 
                 
                </div>
                <div className="MinusPlus" >
                    <MinusPlus actionDec={() => this.actionDec(this.props.data,item.id)} actionInc={() => this.actionInc(this.props.data,item.id)} change={this.handleFilterUpdate} counter={this.state.person} name={item.id} />
                </div>
            </li>
            ) : <div className="loader"></div>

        )


                //
        // for drop list to incremnt and decremnt ticket.
        //
        const renderAddTicket = (
            // render all agents and pass props name , avatar , level ------->
            this.state.agentLoading === false ? this.props.data.prices.map((item, index) =>
             
                    <div key={index} className="create-ticket-price-level ">
                        <div className="create-ticket-price-level-text">
                            <span className="create-ticket-price-level-text1">{item.title}</span>
                            <span className="create-ticket-price-level-text2">({item.min} تا {item.max} سال)</span>
                        </div>
                        <h3>   {PriceDigit(item.price,'price')} <span>تومان</span> </h3>
                        <Button 
                            id={index}
                            name={index}  
                            key={index}                                                               
                            isLoading={ this.state.isLoadingAdding}                                    
                            title={' افزودن به سبد خرید'}                                                      
                            bgcolor={'#0080FF'}                                                 
                            hoverbgcolor={'#0080FF'}                                          
                            click={() => this.addToShopBag(this.props.data,item.id)}/> 
                    </div>
                
            ) : <div className="loader"></div>

        )



        return (
            <div className="create-ticket-search-result table-desktop " >  
                <div className="create-ticket-search-lists " >
                    <div className="create-ticket-search-list ">
                        <div className="create-ticket-search-list-first-cell" >
                            <div className="create-ticket-search-play">{this.props.data.title}</div>
                            <div className="create-ticket-dates">
                                <p>{DateJalaly(TimeStamp(this.props.data.start_date))}</p>
                            </div>
                        </div>
                        <div className="clock-numbers">
                            <p className="create-ticket-clock ">
                                {/* <img src={arrowdown2} alt="فلش" /> */}
                                <span>زمان شروع:</span><span>{this.props.data.start_hours || '-'}</span>
                            </p>
                            <p className="create-ticket-clock ">
                                {/* <img src={arrowdown2} alt="فلش" /> */}
                                <span>زمان پایان:</span><span>{this.props.data.end_hours || '-'}</span>
                            </p>
                            <p className="create-ticket-clock ">
                                {/* <img src={arrowdown2} alt="فلش" /> */}
                                <span>موجودی:</span><span>{this.props.data.capacity || '0'}</span>
                            </p>
                        </div>
                        <div className="create-ticket-price-box" >
                            <p className="create-ticket-price-span">قیمت</p>

                                   {renderAddTicket}
                        </div>
                    </div>

                </div>

                
            </div>
        );
    }
}

export default Seller;
