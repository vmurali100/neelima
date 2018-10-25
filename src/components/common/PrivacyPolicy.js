import React, {Component} from 'react'
import { connect } from 'react-redux'


class PrivacyPolicy extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="row ">
                <div className="col-lg-12 offset-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="row">
                        <div className="col-lg-12 offset-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h5 className = "privacypolicy"> To help the government fight the funding of terrorism and money laundering activities, Federal Law requires 
                            all Financial institutions to obtain, verify and record information that identifies each person who opens an account. What this means for you:
                            When you open an account, we will ask your name, address, date of birth and other information that will identify you. We may also ask to see 
                            your driver's license or other identifying documents.</h5>
                            <h6>Please see our Privacy Policy for more information on how we useand keep your information safe.</h6>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default PrivacyPolicy;