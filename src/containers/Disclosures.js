import React, {Component} from 'react'
import Disclosures from '.././components/common/disclosure/index';


class Header extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
           
                <div className="row disclosurerContainer">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="row disclosureBody">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">                 
                                <Disclosures/>
                            </div>
                        </div>
                    </div>
                </div>
            
        );
    }
}



export default Header