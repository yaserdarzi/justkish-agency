import React, { Component } from 'react';

import Button from '../common/Button/Button';
import MinusPlus from './createTicketMinusPlus';
import PriceDigit from '../priceDigit/priceDigit';
import TimeStamp from '../times/timespanToDate';
import base from '../../api/baseURL';
import Token from '../../api/token';



import arrowdown2 from '../../../assets/icons/arrow-down2.svg';
 
 

class Seller extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectTourist: false,
            allTickets:[],
            person:0,
            agentLoading:false
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

    actionDec(){
        alert("HI decriment")
    }


    //
    // add in shop bag --------------------------->
    //

    actionInc = async(data,id) =>{
     // console.log(data) 
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
    console.log(res.status)
    

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
                    <p className="notCloseMenuLand">({item.min} تا {item.max} سال)</p> 
                 
                </div>
                <div className="MinusPlus" >
                    <MinusPlus actionDec={this.actionDec} actionInc={() => this.actionInc(this.props.data,item.id)} change={this.handleFilterUpdate} counter={this.state.person} name={item.id} />
                </div>
            </li>
            ) : <div className="loader"></div>

        )
        return (
            <div className="create-ticket-search-result table-desktop" >
            {this.props.data.start_date}

            <div className="create-ticket-search-lists " >
                    <div className="create-ticket-search-list">
                        <div className="create-ticket-search-list-first-cell" >
                            <div className="create-ticket-search-play">{this.props.data.title}</div>
                            <div className="create-ticket-dates">
                                <p>{TimeStamp(this.props.data.start_date)}</p>

                            </div>
                        </div>
                        <div className="clock-numbers">
                            <p className="create-ticket-clock ">
                                {/* <img src={arrowdown2} alt="فلش" /> */}
                                <span>زمان شروع:</span><span>{this.props.data.start_hours}</span>
                            </p>
                            <p className="create-ticket-clock ">
                                {/* <img src={arrowdown2} alt="فلش" /> */}
                                <span>زمان پایان:</span><span>{this.props.data.end_hours}</span>
                            </p>
                            <div className="create-ticket-numbers">
                                <p onClick={this.selectTouristNumberHandler} className="create-ticket-btn-fullscreen"></p>
                                <p className="create-ticket-number" >
                                    <span className="notCloseMenuLand">{this.props.data.capacity}</span>
                                    <span className="notCloseMenuLand">موجودی</span>
                                </p>
                                <div className="create-ticket-tourist-numbers" >تعدا گردشگر
                                    <div className="notCloseMenuLand">1</div>
                                    {
                                        this.state.selectTourist
                                            ?
                                            <div className="create-ticket-tourist-change" >
                                                <ul className="create-ticket-tourist-change-ul">
                                                    {/* <li className="create-ticket-tourist-change-li">
                                                        <div className="notCloseMenuLand">
                                                            <h6 className="notCloseMenuLand" >بزرگسال</h6>
                                                            <span className="notCloseMenuLand">(12 سال به بالا)</span>
                                                        </div>
                                                        <div className="MinusPlus" >
                                                            <MinusPlus change={this.handleFilterUpdate} counter={this.state.person} name={this.state.person} />
                                                        </div>
                                                    </li>
                                                    <li className="create-ticket-tourist-change-li">
                                                        <div className="notCloseMenuLand">
                                                            <h6 className="notCloseMenuLand">کودک</h6>
                                                            <span className="notCloseMenuLand">(2 تا 12 سال)</span>
                                                        </div>
                                                        <div className="MinusPlus" >
                                                            <MinusPlus change={this.handleFilterUpdate} counter={this.state.person} name={this.state.person} />
                                                        </div>
                                                    </li>
                                                    <li className="create-ticket-tourist-change-li">
                                                        <div className="notCloseMenuLand">
                                                            <h6 className="notCloseMenuLand">نوزاد</h6>
                                                            <span className="notCloseMenuLand">(10 روز تا 2 سال)</span>
                                                        </div>
                                                        <div className="MinusPlus" >
                                                            <MinusPlus change={this.handleFilterUpdate} counter={this.state.person} name={this.state.person} />
                                                        </div>
                                                    </li> */}
                                                    {renderPriceAction}
                                                </ul>

                                            </div>

                                            :
                                            ''

                                    }
                                </div>
                            </div>
                        </div>
                        <div className="create-ticket-price-box" >
                            <p className="create-ticket-price-span">قیمت مشتری</p>
                            {renderPriceAction}
                        </div>
                        {/* <div className="create-ticket-price-box">
                            <p className="create-ticket-price-span">قیمت (تومان) </p>
                            
                            {renderPrice}
                        </div> */}

                        {/* <div className="create-ticket-add-to-bascket" >
                            <Button
                                isLoading={this.state.isLoading}
                                title={'اضافه به سبد '}
                                bgcolor={'#0080FF'}
                                hoverbgcolor={'#1fc056cc'}
                                click={this.callSubmit} />
                        </div> */}
                    </div>

                </div>

                
            </div>
        );
    }
}

export default Seller;