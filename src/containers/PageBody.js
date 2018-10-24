import React, {Component} from 'react'
import { connect } from 'react-redux'
import ChooseAPlan from '.././components/debt-protection/ChooseAPlan';
import PlanAccordian from '.././components/debt-protection/PlanAccordian';

class PageBody extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
        }
    }

    render(){
        return (
                <div className="row pageBody">                        
                    <div className="col-lg-12 offset-lg-12 col-md-12 col-sm-12 col-xs-12">
                       <ChooseAPlan />   
                    </div>         
                </div>
        );
    }
}



export default PageBody