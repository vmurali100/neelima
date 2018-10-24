import React, {Component} from 'react'
import { connect } from 'react-redux'

class HeaderTitle extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
        }
    }

    render(){
        return (
                <div className= "col-lg-6 col-md-6 col-sm-6 col-xs-0 headerTitle">
                    <h3 className= "debtProtectionEnro"> <span className="debtProtectionText">Debt Protection</span> Enrollment</h3>
                    
                </div>
        );
    }
}



export default HeaderTitle