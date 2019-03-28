import React, { Component } from 'react';
import { DateRangePicker } from "react-advance-jalaali-datepicker";

//
// external compoent ---------------------------->
//
import SaleBox from '../../components/saleBox/SaleBox'
import Token from '../../api/token';
import base from '../../api/baseURL';
import SideLeft from '../../components/sideLeft/sideLeft';



//
// icons and images --------------------------------->
//
import profile from '../../assets/images/profile.jpg'

import search from '../../assets/icons/search.svg'
import arrowdown2 from '../../assets/icons/arrow-down2.svg'
import user from '../../assets/icons/user.svg'
import gridview from '../../assets/icons/grid_view.svg'
import cardview from '../../assets/icons/card_view.svg'
import pdf from '../../assets/icons/pdf.svg'
import excel from '../../assets/icons/excel.svg'


import './FailedPayment.css';


class FailedPayment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {},
            userType: '',
            isLoading: false,
            userAvatar: 'https://www.drupal.org/files/issues/default-avatar.png'

        }
    }



    render() {


        return (
            <div className="failed-payment">
                <div className="failed-payment-box container" >
                    
                </div>
            </div>
        );
    }
}

export default FailedPayment;
