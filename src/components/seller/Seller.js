import React, { Component } from 'react';

import edit from './../../../assets/icons/edit_profile.svg'
import off from './../../../assets/icons/dashboard-2.svg'
import defaultAvatar from './../../../assets/icons/defaultAvatar.svg'


import './Seller.css';

class Seller extends Component {
    render() {
        return (
            <div className="seller-com">
                <li className="seller-com-manage-sellers-item"   >
                    <div className="seller-com-actions">
                        <div className="seller-com-off"><i className="fas fa-trash-alt"></i></div>
                        <div className="seller-com-edit"> <i className="fas fa-pen"></i> </div>
                    </div>
                    <div className="seller-com-left" >
                        <div className="seller-com-name">
                            <p>{this.props.name}</p>
                            <span>{this.props.level}</span>
                        </div>
                        <div className="seller-com-avatar">
                        {this.props.avatar === '' ? <img className="default-avatar" src={defaultAvatar} alt="profile" /> : <img className="default-avatar" src={this.props.avatar} alt="profile" /> }
                            
                        </div>
                    </div>
                </li>
            </div>
        );
    }
}

export default Seller;
