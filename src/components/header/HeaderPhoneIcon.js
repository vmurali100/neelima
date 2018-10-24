import React, {Component} from 'react'
import PhoneIcon from './images/phone_icon_outline.svg';

class HeaderPhoneIcon extends Component {
    constructor(props){
        super(props)
        
    }

    render(){
        return (
                <div className= "col-lg-1 col-md-1 col-sm-1 col-xs-3">
                    <img src={PhoneIcon}  className= "phoneIconStyle"/>
                </div>
        );
    }
}



export default HeaderPhoneIcon