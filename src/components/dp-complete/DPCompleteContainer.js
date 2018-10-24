import React from 'react';
import Logo from '../.././images/penfed-logo.png';
import PenfedButton from '.././common/button/PenfedButton';
import { Link } from 'react-router-dom';

class DPCompleteContainer extends React.Component { 
  render() {
    return (
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
               
            </div>
            <div className="col-lg-4  col-md-4 col-sm-4 col-xs-4 debtProtectionr">
                <div class="row"> 
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">                
                        <h3>Debt Protection</h3>
                    </div>
                </div>
                <div class="row">                 
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">                
                        <h6>Credit Card Account: </h6>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">                
                        <h6>Power cash rewards(...1234)</h6>
                    </div>
                </div>
                <div class="row">                 
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">                
                        <h6>Plan Type: </h6>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">                
                        <h6>Plan 1</h6>
                    </div>
                </div>
                <div class="row">                 
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">                
                        <h6>Coverage: </h6>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">                
                        <h6>Life, Disability and Unemployment</h6>
                    </div>
                </div>
            </div>

            <div className="col-lg-4  col-md-4 col-sm-4 col-xs-4 whatsNext">
                <div class="row "> 
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">                
                        <h3>What's next ?</h3>
                    </div>
                </div>
                <div class="row">
                    
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">                
                        <h6>A confirmation email will be sent to user@email.com.</h6>
                    </div>
                </div>
                <div class="row">
                    
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">                
                        <h6>We will send you a copy of your policy documets to you message inbox within PenFed Online</h6>
                    </div>
                </div>
                <div class="row">  
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">                
                        <h6>Thank you for trusting PenFed with your financial needs!</h6>
                    </div>
                </div>
                <div class="row">  
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 returnHomeButton">                                         
                            <PenfedButton buttonTitle = "RETURN TO ACCOUNTS HOME" navPath = ""/>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">                
             
            </div>
          </div>
    );
  }
}

export default DPCompleteContainer;
