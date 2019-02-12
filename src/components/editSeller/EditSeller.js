import React, { Component } from 'react';

import cancel from './../../../assets/icons/cancel.svg'

import './EditSeller.css'

class EditSeller extends Component {

    constructor(props) {
        super(props);
        this.state = {

           
        }
    }


    render() {
        return (
            <div className="edit-seller" >
            
                
                <div className="edit-seller-blur" onClick={this.props.closeEditSeller} ></div>
                <div className="edit-seller-box" >
                    <img className="edit-seller-close" onClick={this.props.closeEditSeller} src={cancel} alt="انصراف" />
                    <div className="edit-seller-row1">
                        <button className="edit-seller-deactive" onClick={this.props.deactiveSeller} >غیر فعال کردن عامل فروش</button>
                        <div className="edit-seller-details" >
                            <div className="edit-seller-titles" >
                                <h3>{this.props.sellerName}</h3>
                                <h4>{this.props.sellerLevel}</h4>
                            </div>
                            <img src={this.props.sellerImg} alt="عامل فروش" />
                        </div>
                    </div>
                    <div className="edit-seller-row2">
                    <span sellerid={this.props.sellerId} >id :{this.props.sellerId}</span>
                        <div className="edit-seller-input-box" >
                            <p>نام عامل فروش</p>
                            <input name={this.props.sellerName} 
                                   value={this.props.sellerNameValue}   
                                   onChange={this.props.sellerInputChage} />
                        </div>
                        <div className="edit-seller-input-box" >
                            <p>ایمیل</p>
                            <input name={this.props.sellerMail} 
                                   value={this.props.sellerMailValue}  
                                   onChange={this.props.sellerInputChage} />
                        </div>
                        <div className="edit-seller-input-box" >
                            <p>گذرواژه</p>
                            <input name={this.props.sellerPass} 
                                   value={this.props.sellerPassValue}  
                                   onChange={this.props.sellerInputChage} />
                        </div>
                        <div className="edit-seller-input-box" >
                            <p>درصد کمیسیون فروش</p>
                            <input name={this.props.sellerPrecent} 
                                   value={this.props.sellerPrecentValue}  
                                   onChange={this.props.sellerInputChage} />
                        </div>
                    </div>
                    <button className="edit-seller-save" onClick={this.props.saveSellerChanges} >ذخیره تغییرات</button>
                </div>
            </div>
        );
    }
}

export default EditSeller;
