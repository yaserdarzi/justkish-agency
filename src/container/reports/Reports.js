import React, { Component } from 'react';
import { DateRangePicker } from "react-advance-jalaali-datepicker";
import { Link } from 'react-router';

//
// external compoent ---------------------------->
//
// import SaleBox from '../../components/saleBox/SaleBox'
import Token from '../../api/token';
import base from '../../api/baseURL';
import SideLeft from '../../components/sideLeft/sideLeft';
import ReportBox from '../../components/report/reportBox';
import PriceDigit from '../../components/priceDigit/priceDigit';




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


import './Reports.css';


class Reports extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {},
            userType: '',
            isLoading: false,
            userAvatar: 'https://www.drupal.org/files/issues/default-avatar.png',
            reports:[],
            AllAgents:[]

        }
    }

    componentWillMount(){
        this._getAllAgents();
        this._getReports();

    }



    _getReports =async() => {
        await this.fetchReports('agency/report/sales?page=0');
 
     }
 
     fetchReports(key) {
 
         this.setState({
            isLoadingAllReport: true
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
                 this.setState({
                     reports:responsJson.data.factorProduct,
                     isLoadingAllReport: false ,
                     totoalPrice:responsJson.data.totalPrice,
                     countAll: responsJson.data.countAll
                 })
             })
     }
 

     // 
     // Get All Agents --------->
     //
 
     _getAllAgents =async() => {
        await this.fetchAgents('agency/agent');
 
     }
 
     fetchAgents(key) {
 
         this.setState({
            isLoadingAllAgents: true
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
                 this.setState({
                     AllAgents:responsJson.data,
                     isLoadingAllAgents : false
                 })
             })
     }
 


    render() {

        const renderResportsSelas = (
            this.state.isLoadingAllReport === false ? 
                this.state.reports.map((item,index) => 
                    <ReportBox 
                        key={index} 
                        data={item}  
                        tours={item.products != null ? item.products : item.tours} 
                    />
                )
                :
                <div className="loader"></div>
           
        );

        const renderAllAgents = (
           this.state.isLoadingAllAgents === false ?
                this.state.AllAgents.map((item,index) => 
                <li className="seller-list" key={index}>
                    <img className="seller-img" src={item.image} alt="عاملین" />
                    <span className="seller-box" >
                        <span className="seller-name" >{item.name}</span>
                        <span className="seller-level" >{item.type === 'normal' ? 'عامل فروش' : 'مدیر'}</span>
                    </span>
                </li>
                ) :
            ''
        )




        return (
            <div className="reports">
                {this.state.isLoading === true ? <div className="LoadingPattern"><div className="loader"></div></div> : ''}
                <div className="reports-box container" >

                    <div className="part1" >
                        <SideLeft />
                    </div>
                    <div className="part2" >
                        <div className="filter" >
                        <div className="date" >
                                <div className="datePicker">

                                    <DateRangePicker
                                        placeholderStart="از"
                                        placeholderEnd="تا"
                                        format="jYYYY/jMM/jDD"
                                        onChangeStart={this.change}
                                        onChangeEnd={this.changeTimeDate}
                                        idStart="rangePickerStart"
                                        idEnd="rangePickerEnd"
                                    />

                                </div>
                            </div>
                            <div className="search-sellers">

                                <div className="sellers" >
                                    <span className="selers-right" >
                                        <img src={user} alt="کاربر" />
                                        <span> کانترمن ها</span>
                                    </span>
                                    <img src={arrowdown2} alt="فلش" />
                                    <ul className="sellers-list" >

                                        <p className="all-sellers" >همه کانترمن ها</p>

                                        {renderAllAgents}
                        

                                    </ul>

                                </div>

                                <div className="sell-report" >
                                    <span className="sell-report-right" >
                                        <img src={user} alt="کاربر" />
                                        <span>گزارش فروش</span>
                                    </span>
                                    <img src={arrowdown2} alt="فلش" />
                                    <ul className="report-lists" >
                                        <li className="report-list" >
                                           <Link to="/reports" >
                                                <span>گزارش فروش</span>
                                           </Link>
                                        </li>
                                        <li className="report-list" >
                                            <Link to="/management" >
                                                <span>گزارش مالی</span>
                                            </Link>
                                        </li>
                                    </ul></div>
                                <button className="search-btn" >
                                    <img src={search} alt="جستجو" ></img>
                                </button>
                            </div>

                        </div>
                        <div className="all-income" >
                            <div className="all-income-sale" >
                                <p className="income-text" >
                                    <span>مجموع درآمد</span>
                                    <span> {PriceDigit(this.state.totoalPrice,'price')}</span>
                                    <span> تومان </span>
                                </p>
                                <p className="sale-text" >
                                    <span>تعداد فروش </span>
                                    <span>{this.state.countAll}</span>
                                </p>
                            </div>
                            <div className="pdf-grid" >
                                <div>
                                    <img src={pdf} alt="پی دی اف" />
                                    <img src={excel} alt="اکسل" />
                                </div>
                                <div>
                                    <img src={gridview} alt="grid" />
                                    <img src={cardview} alt="card" />
                                </div>
                            </div>
                        </div>
                        <div className="reports-search" >
                            <div className="reports-search-title" >
                                <h1>گزارش فروش</h1>
                                <div className="reports-search-input">
                                    <i className="fas fa-search"></i>
                                    <input className="" placeholder="جستجو در نتایج" />
                                </div>
                            </div>
                            <div className="reports-search-table table-desktop" >
                                <div className="reports-search-table-title" >
                                    <div>شماره </div>
                                    <div>شماره سند </div>
                                    <div className="reports-search-table-child3">شرح</div>
                                    <div>تاریخ</div>
                                    <div>اپراتور</div>
                                    <div>سود کل</div>
                                    <div>سود اپراتور</div>
                                </div>
                 
                                {/* {this.state.reports.length > 0 ?  renderResportsSelas : <div className="no-data-for-showing-grid"><p>اطلاعاتی برای نمایش ثبت نشده است.</p></div>} */}
                              {renderResportsSelas}
                    


                            </div>

                            <div className=" table-tablet" >
                                <div className="reports-search-table">
                                    <div>
                                        <div className="reports-search-table-title" >شماره</div>
                                        <div className="reports-search-table-body">1</div>
                                    </div>
                                    <div>
                                        <div className="reports-search-table-title">شماره سند	</div>
                                        <div className="reports-search-table-body">1265</div>
                                    </div>
                                    <div>
                                        <div className="reports-search-table-title">شرح</div>
                                        <div className="reports-search-table-body reports-search-table-body-3span ">
                                            <span>20  عدد</span>
                                            <span> رزرو  265118 </span>
                                            <span> رفرنس xz125659</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="reports-search-table-title">تاریخ</div>
                                        <div className="reports-search-table-body">12 بهمن 1397</div>
                                    </div>
                                    <div>
                                        <div className="reports-search-table-title">اپراتور</div>
                                        <div className="reports-search-table-body">فتحیان</div>
                                    </div>
                                    <div>
                                        <div className="reports-search-table-title">بدهکار</div>
                                        <div className="reports-search-table-body reports-search-table-child-bold">250.000 ت</div>
                                    </div>
                                    <div>
                                        <div className="reports-search-table-title">www</div>
                                        <div className="reports-search-table-body reports-search-table-child-bold">250.000 ت</div>
                                    </div>
                                    <div>
                                        <div className="reports-search-table-title">مانده</div>
                                        <div className="reports-search-table-body reports-search-table-child-bold">250.000 ت</div>
                                    </div>
                                </div>






                                <div className="reports-search-table">


                                    <div>
                                        <div className="reports-search-table-title" >شماره</div>
                                        <div className="reports-search-table-body">2</div>
                                    </div>
                                    <div>
                                        <div className="reports-search-table-title">شماره سند	</div>
                                        <div className="reports-search-table-body">1265</div>
                                    </div>
                                    <div>
                                        <div className="reports-search-table-title">شرح</div>
                                        <div className="reports-search-table-body reports-search-table-body-3span ">
                                            <span>20  عدد</span>
                                            <span> رزرو  265118 </span>
                                            <span> رفرنس xz125659</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="reports-search-table-title">تاریخ</div>
                                        <div className="reports-search-table-body">12 بهمن 1397</div>
                                    </div>
                                    <div>
                                        <div className="reports-search-table-title">اپراتور</div>
                                        <div className="reports-search-table-body">فتحیان</div>
                                    </div>
                                    <div>
                                        <div className="reports-search-table-title">بدهکار</div>
                                        <div className="reports-search-table-body reports-search-table-child-bold">250.000 ت</div>
                                    </div>
                                    <div>
                                        <div className="reports-search-table-title">بستانکار</div>
                                        <div className="reports-search-table-body reports-search-table-child-bold">250.000 ت</div>
                                    </div>
                                    <div>
                                        <div className="reports-search-table-title">مانده</div>
                                        <div className="reports-search-table-body reports-search-table-child-bold">250.000 ت</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


        );
    }
}

export default Reports;
