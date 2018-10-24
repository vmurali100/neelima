
import React from 'react';
import ReviewAndSignHeader from './ReviewAndSignHeader';
import ReviewAndSignContainer from './ReviewAndSignContainer';

export default class ReviewAndSign extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
          userName:'Guest User',
          password:null
        }		
  }	
  
  render() {
   
    return (
      <div className="reviewAndSign">  
           <ReviewAndSignHeader /> 
           <hr className= "hrStyle"/>    
           <ReviewAndSignContainer />
      </div>
    );
  }
}
