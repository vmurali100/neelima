import React, {Component} from 'react'
import { connect } from 'react-redux'
import PenfedLogo from './images/penfed-logo.png';

class HeaderLogo extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
        }
    }

    render(){
        return (
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-9 lineLogo ">
                    <a  href="index.html"><img src={PenfedLogo}  className= "logoStyle"/></a>
                    
                </div>
        );
    }
}



export default HeaderLogo