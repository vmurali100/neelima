import React, {Component} from 'react'
import { connect } from 'react-redux'


class Disclosures extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
        }
    }

    render(){
        return (
            <div className="row disclosuresDiv">
                <div className="col-lg-12 offset-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="row">
                        <div className="col-lg-12 offset-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h5 className = "disclosuresHeading">Disclosures </h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 offset-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                            <h6 className = "disclosuresText">Your purchase of debt protection is optional. Whether or not you purchase this product will affect your application for credit or the terms of any existing credit agreement you have with us. </h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 offset-lg-12 col-md-12 col-sm-12 col-xs-12 disclosuresText">
                            <h6 className = "disclosuresText">We will give you additional information before you are required to pay for PenFed Debt Protection. This information will include a copy of the agreement containing the terms and conditions of PenFed Debt Protection </h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 offset-lg-12 col-md-12 col-sm-12 col-xs-12 disclosuresText">
                            <h6 className = "disclosuresText">There are elligibility requirements, conditions and exclusions that could prevent you from receiving debt protection benefits. You should carefully read your Penfed Debt Protection agreement for a full explanation of the terms and conditions of the Penfed Debt Protection plan. </h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 offset-lg-12 col-md-12 col-sm-12 col-xs-12 disclosuresText">
                            <h6 className = "disclosuresText">Debt Protection is not a deposit or obligation of, or guarrented by Penfed. Debt Protection is not insured or guaranteed by NCUA or any agency of the federal government. </h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 offset-lg-12 col-md-12 col-sm-12 col-xs-12 disclosuresText">
                            <h6 className = "disclosuresText">You may obtain coverage to protect your loan from an entity not affiliated with PenFed. </h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default Disclosures