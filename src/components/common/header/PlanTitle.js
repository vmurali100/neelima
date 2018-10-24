import React, {Component} from 'react'
import { connect } from 'react-redux'


class PlanTitle extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
        }
    }

    render(){
        return (
                 <div className="row">
                    <div className="col-lg-12 offset-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h2>Choose a plan and check if you're eligible </h2>
                    </div>
                </div>
        );
    }
}



export default PlanTitle