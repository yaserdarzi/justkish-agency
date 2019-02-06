import React from 'react';

import './Input.css';



const input = (props) => {


    return (
        <div className="Inputbox">

            <div  className="input-label">
                <input    type={props.type}
                          onClick={props.clicked} 
                          placeholder=" "
                          onChange={props.changed}
                          name={props.name}
                          required
                          maxLength={props.max}
                          style={{color:props.color}}
                          />
                <span className="span-label">{props.placeHolder }</span>
               {props.error ? (  <span className="input-error-text bounceIn" >{props.error}</span> ) : (null)}
            </div>


        </div>
    )
}

export default input;


/*
example using 

      <Input 
            type={'text'} 
            name={'email'}
            placeHolder={'Email'}
            changed={this.changedHandler}
            error={this.state.forgetEmailError}
        />


*/