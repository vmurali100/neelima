import React, {Component} from 'react'
import { connect } from 'react-redux'

class Footer extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
        }
    }

    render(){
        return (
                <div className="">                   
                    <div className="row appFooter">
                        <div className="col-lg-12 offset-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h6>This Credit union is federally insured by the National Credit Union Administration</h6>
                            <h6>Rates are current as of Month 2018 unless otherwise noted and are subject to change</h6>
                        </div>
                    </div>
                    <div className="row appFooterCopyright">
                        <div className="col-lg-12 offset-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <label>@2018 Pentagon Federal Credit Union</label>
                        </div>
                    </div>
                </div>
        );
    }
}



export default Footer