import React, {Component} from 'react';
// import Header from "./header/header";
// import Footer from "./footer/footer";
import IndexComponent from "./container/beforLogin/inddex/index";
import HeaderComponentAfterLogin from './components/header/Header';
import ForgetPasword from './container/beforLogin/forgetPassword/ForgetPassword';

import Token from './api/token';

// const Token = 'Login'
// const Token = 'logout'
 
export default class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        console.log(Token) 
    }

    
    componentWillReceiveProps(prevProps, prevState){
        // console.log("resive")
 
    }

    render() { 
        return ( 
            <div>
                {/* <div>
                    {Token === 'logout' ? ( '' ): ( <HeaderComponentAfterLogin/> )}            
                </div>
                <div> 
                    {Token === 'logout' ? ( <ForgetPasword /> ): ( this.props.children )}            
                </div> */}


                <div>
                    {Token === null ? ( 
                      ''
                     ): 
                    (
                      <HeaderComponentAfterLogin/>
                    )}            
                </div>

                <div> 
                    { this.props.children}
                </div>
             
                <div>
                    {/* <Footer /> */}
                </div>
            </div>
         );
    }
}
 