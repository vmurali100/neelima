import React from 'react';
import { Link } from 'react-router-dom';

class EnollButton extends React.Component { 
  

  render() {
    return (
        <div className="row">           
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                <Link to= {"/" + this.props.navPath} ><button type="button" className="penfedRectButton" >{this.props.buttonTitle}</button></Link>
            </div>  
        </div>  
    );
  }
}

export default EnollButton;
