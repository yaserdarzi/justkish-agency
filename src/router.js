import React, { Component } from 'react'; 
import { Router ,  Route , browserHistory , IndexRoute  } from 'react-router';



// our components ----------------->
import RootComponent from './root';
import DashboardScreen from './container/dashboard/dashboard';
import ManagementScreen from './container/home/Home';
import AddSellers from './container/addSellers/AddSellers';
import IndexScreen from './container/beforLogin/inddex/index';
import ForgetPasword from './container/beforLogin/forgetPassword/ForgetPassword';
import CreateTicketScreen from './container/createTicket/createTicket';
import SupportScreen from './container/support/support';



class RouterComponent extends Component {

    constructor(props) {
      super(props);
      this.state = { current:false   } 
  } 
  
 
  
    render() {

 
      return (
       
            <Router history={browserHistory}>
            
            <Route path="/" component={RootComponent}>
                  <IndexRoute   component={ManagementScreen} /> 
                  <Route   path="dashboard" component={DashboardScreen} /> 
                  <Route   path="index" component={IndexScreen} /> 
                  <Route   path="forgetpassword" component={ForgetPasword} /> 
                  <Route   path="addsellers" component={AddSellers} /> 
                  <Route   path="management" component={ManagementScreen} /> 
                  <Route   path="create-ticket" component={CreateTicketScreen} /> 
                  <Route   path="support" component={SupportScreen} /> 
                
              </Route>
          
            </Router>
         
      );
    }
  }
  
  export default RouterComponent;