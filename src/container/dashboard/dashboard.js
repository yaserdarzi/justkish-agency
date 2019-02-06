import React,{Component} from 'react';

import './dashboard.css';



class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="dashboard">
                <div className="part-1">
           
                </div>
                <div className="part-2">
                    <div className="dashbord-sellers">
                        <p>حساب کاربری شما</p>
                        <ul className="dashbord-manage-sellers" >
                            <li className="dashbord-manage-sellers-item">
                                <div className="dashboard-seller-actions">
                                    <div className="dashboard-seller-actions-item"></div>
                                    <div className="dashboard-seller-actions-item"></div>
                                </div>
                                <div className="dashboard-seller-item-container">
                                    <p>Name Seller</p>
                                    <span>عامل فروش</span>
                                </div>
                                <div className="dashboard-seller-avatar"></div>
                            </li>
                            <li className="dashbord-manage-sellers-item"></li>
                            
                        </ul>

                        <button className="checkout-request" >
                          اضافه کردن عامل فروش جدید
                        </button>


                    </div> 
                </div>
            </div>
         );
    }
}
 
export default Dashboard;