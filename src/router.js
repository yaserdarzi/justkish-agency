import React, { Component } from 'react'; 
import { Router ,  Route , browserHistory , IndexRoute  } from 'react-router';



// our components ----------------->
import RootComponent from './root';
import DashboardScreen from './container/dashboard/dashboard';
import HomeScreen from './container/home/Home';
import IndexScreen from './container/beforLogin/inddex/index';
import ForgetPasword from './container/beforLogin/forgetPassword/ForgetPassword';



class RouterComponent extends Component {

    constructor(props) {
      super(props);
      this.state = { current:false   } 
  } 
  
 
  
    render() {

 
      return (
       
            <Router history={browserHistory}>
            
            <Route path="/" component={RootComponent}>
                  <IndexRoute   component={HomeScreen} /> 
                  <Route   path="dashboard" component={DashboardScreen} /> 
                  <Route   path="index" component={IndexScreen} /> 
                  <Route   path="forgetpassword" component={ForgetPasword} /> 
                  <Route   path="home" component={HomeScreen} /> 
                
              </Route>
          
            </Router>
         
      );
    }
  }
  
  export default RouterComponent;