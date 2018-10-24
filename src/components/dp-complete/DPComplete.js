
import React from 'react';
import DPCompleteHeader from './DPCompleteHeader';
import DPCompleteContainer from './DPCompleteContainer';
import Family from '../.././images/family.jpg';

export default class DPComplete extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
          userName:'Guest User',
          password:null
        }		
  }	
  
  render() {
   
    return (
      <div className="dpComplete">  
          <DPCompleteHeader />
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
               <h4 className="printPage"><i class="fa fa-print"></i>Print Page</h4>
            </div>
          </div>
          <DPCompleteContainer />
      </div>
    );
  }
}
