import React, {Component} from 'react'
import { connect } from 'react-redux'
import LockIcon from './images/lock_icon.svg';

class HeaderLockIcon extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
        }
    }

    render(){
        return (
                <div className= "col-lg-1 col-md-1 col-sm-1 col-xs-0 lockIcon">
                   
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">   
                            <img src={LockIcon}  className= "secureIcon"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-11 col-md-11 col-sm-11 col-xs-11">   
                            <label className="secure">SECURE</label>
                        </div>
                    </div>
                </div>
        );
    }
}



export default HeaderLockIcon