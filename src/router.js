import React, { Component } from 'react'; 
import { Router ,  Route , browserHistory , IndexRoute  } from 'react-router';



// our components ----------------->
import RootComponent from './root';
import DashboardScreen from './container/dashboard/dashboard';
import ManagementScreen from './container/home/Home';
import AddSellers from './container/addSellers/AddSellers';
import IndexScreen from './container/beforLogin/inddex/index';
import Wallet from './container/wallet/Wallet'
import ForgetPasword from './container/beforLogin/forgetPassword/ForgetPassword';
import CreateTicketScreen from './container/createTicket/CreateTicket';
import SupportScreen from './container/support/support';
import ProfileScreen from './container/profile/Profile';
import TicketIssuedScreen from './container/ticketIssued/TicketIssued'
import ChangePasswordScreen from './container/changePassword/changePassword';
import PaymentMethodScreen from './container/paymentMethod/PaymentMethod';




class RouterComponent extends Component {

    constructor(props) {
      super(props);
      this.state = { current:false   } 
  } 
  
 
  
    render() {

 
      return (
       
            <Router history={browserHistory}>
            
            <Route path="/" component={RootComponent}>
                  <IndexRoute   component={IndexScreen} /> 
                  <Route   path="dashboard" component={DashboardScreen} /> 
                  <Route   path="index" component={IndexScreen} /> 
                  <Route   path="wallet" component={Wallet} /> 
                  <Route   path="forgetpassword" component={ForgetPasword} /> 
                  <Route   path="addsellers" component={AddSellers} /> 
                  <Route   path="management" component={ManagementScreen} /> 
                  <Route   path="create-ticket" component={CreateTicketScreen} /> 
                  <Route   path="support" component={SupportScreen} /> 
                  <Route   path="profile" component={ProfileScreen} /> 
                  <Route   path="ticket-issued" component={TicketIssuedScreen} /> 
                  <Route   path="change-password" component={ChangePasswordScreen} /> 
                  <Route   path="payment-method" component={PaymentMethodScreen} /> 

                
              </Route>
          
            </Router>
         
      );
    }
  }
  
  export default RouterComponent;