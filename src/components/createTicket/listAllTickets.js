import React, { Component } from 'react';

 import Button from '../common/Button/Button';
 import MinusPlus from '../common/MinusPlus/MinusPlus';
import PriceDigit from '../priceDigit/priceDigit';

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

    render() {

        const renderPrice = (
            // render all agents and pass props name , avatar , level ------->
            this.state.agentLoading === false ? this.props.data.prices.map((item, index) =>
                <p key={index}><span className="create-ticket-price-span">{item.title}</span> <span>{PriceDigit(item.price,'price')}</span></p>
            ) : <div className="loader"></div>

        )
        return (
            <div className="create-ticket-search-result table-desktop" >
            {this.props.data.title}

            <div className="create-ticket-search-lists " >
                    <div className="create-ticket-search-list">
                        <div className="create-ticket-search-list-first-cell" >
                            <div className="create-ticket-search-play">{this.props.data.title}</div>
                            <div className="create-ticket-dates">
                                <p>شنبه 1397/10/12 </p>

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
                                                    <li className="create-ticket-tourist-change-li">
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
                                                    </li>

                                                </ul>

                                            </div>

                                            :
                                            ''

                                    }
                                </div>
                            </div>
                        </div>
                        {/* <div className="create-ticket-price-box" >
                            <p className="create-ticket-price-span">قیمت مشتری</p>
                            <p><span className="create-ticket-price-span">بزرگسال</span> <span>250,000 ت</span></p>
                            <p><span className="create-ticket-price-span">کودک</span><span>125,000 ت</span></p>
                            <p><span className="create-ticket-price-span">نوزاد رایگان</span></p>
                        </div> */}
                        <div className="create-ticket-price-box">
                            <p className="create-ticket-price-span">قیمت (تومان) </p>
                            {/* <p><span className="create-ticket-price-span">بزرگسال</span> <span>190,000 ت</span></p>
                            <p><span className="create-ticket-price-span">کودک</span><span> 100,000 ت</span></p>
                            <p><span className="create-ticket-price-span">نوزاد رایگان</span></p> */}
                            {renderPrice}
                        </div>

                        <div className="create-ticket-add-to-bascket" >
                            <Button
                                isLoading={this.state.isLoading}
                                title={'اضافه به سبد '}
                                bgcolor={'#0080FF'}
                                hoverbgcolor={'#1fc056cc'}
                                click={this.callSubmit} />
                        </div>
                    </div>

                </div>

                
            </div>
        );
    }
}

export default Seller;
