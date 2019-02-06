import React,{Component} from 'react';

import './dashboard.css';



class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div className="part-1">
                    <div className="sellers">
                        <p>حساب کاربری شما</p>
                        <ul className="manage-sellers" ></ul>
                    </div> 
                </div>
                <div className="part-2"></div>
            </div>
         );
    }
}
 
export default Dashboard;