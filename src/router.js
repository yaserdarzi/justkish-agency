import React, { Component } from 'react'; 
import { Router ,  Route , browserHistory , IndexRoute  } from 'react-router';



// our components ----------------->
import RootComponent from './root';
import DashboardScreen from './container/dashboard/dashboard';
import HomeScreen from './container/home/Home';



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
                  <Route   path="home" component={HomeScreen} /> 
                
              </Route>
          
            </Router>
         
      );
    }
  }
  
  export default RouterComponent;