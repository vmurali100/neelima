import React, {Component} from 'react'
import HeaderLogo from './HeaderLogo';
import HeaderTitle from './HeaderTitle';
import HeaderPhoneIcon from './HeaderPhoneIcon';
import HeaderLockIcon from './HeaderLockIcon';


class Header extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="row headerContainer">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="row appHeader">                 
                        <HeaderLogo />
                        <HeaderTitle />
                        <HeaderPhoneIcon />
                        <HeaderLockIcon/>
                    </div>
                </div>
          </div>
                
        );
    }
}



export default Header