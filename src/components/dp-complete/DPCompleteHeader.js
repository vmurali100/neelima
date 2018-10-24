import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../.././images/penfed-logo.png';

class DPCompleteHeader extends React.Component { 
  render() {
    return (
          <div className="row">
            <div className="col-sm-12 col-md-12">
                <h3 className= "dpCompleteHeader">You're now enrolled in debt protection !</h3>             
            </div>
          </div>
    );
  }
}

export default DPCompleteHeader;
