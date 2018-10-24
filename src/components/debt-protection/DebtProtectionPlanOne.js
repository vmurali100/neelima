import React, {Component} from 'react'
import PenfedButton from '.././common/button/PenfedButton';
import EligibilityQuestions from './EligibilityQuestions';

class DebtProtectionPlanOne  extends Component {
    constructor(props){
        super(props)
        
    }

    render(){
        return (
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">                         
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                   <h5 className="eligibilityCheckTitle">Check if you're eligible </h5>
                                </div>
                            </div>
                            
                            <EligibilityQuestions />
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 enrollSignButton">
                                    <PenfedButton buttonTitle = "ENROLL & SIGN AGREEMENT" navPath = "review"/>
                                </div>
                            </div>
                            
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                   <h5 className="eligibilityCheckTitle">Your monthly cost </h5>
                                </div>
                        </div>
                        <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                   <label>CREDIT CARD ACCOUNT </label>
                                </div>
                        </div>
                        <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                   <h3 className="eligibilityCheckTitle">Power Cash Reward(...1234)</h3>
                                </div>
                        </div>
                    </div>
                </div>
        );
    }
}



export default DebtProtectionPlanOne