import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../.././images/penfed-logo.png';

class ReviewAndSignHeader extends React.Component { 
  render() {
    return (
          <div>
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <h2>Please Review & Sign Your Document</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-6">
                        <h4>Pease Review & Act on These Documents</h4>
                        <h6>DocuSignQA-Penfed</h6>
                        <h6>Penfed</h6>
                    </div>
                    <div className="col-sm-6 col-md-6">
                        <a className="virtusauidocs-logo" href="index.html"><img src={Logo}  className= "logoStyle"/></a>
                        <h6>Powered By: DocuSign</h6>
                    </div>
                    
                </div>
          </div>
    );
  }
}

export default ReviewAndSignHeader;
