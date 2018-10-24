import React, {Component} from 'react'
import { connect } from 'react-redux'
import PlanTitle from '.././common/header/PlanTitle';
import PlanAccordian from './PlanAccordian';
import Disclosures from './Disclosures';

class ChooseAPlan extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
        }
    }

    render(){
        return (
                <div className="row chooseAPlan">
                    <div className="col-lg-12 offset-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <PlanTitle />
                        <PlanAccordian />
                        <Disclosures />
                    </div>
                </div>
        );
    }
}



export default ChooseAPlan