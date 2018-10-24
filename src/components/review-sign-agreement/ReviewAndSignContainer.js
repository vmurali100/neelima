import React from 'react';
import { Link } from 'react-router-dom';
import PenfedButton from '.././common/button/PenfedButton';
import Logo from '../.././images/penfed-logo.png';

class ReviewAndSignContainer extends React.Component { 
  render() {
    return (
          <div>
            <div className="row">
                <div className="co2-sm-2 col-md-2">
                    <div className="row">
                        <div className="co2-sm-6 col-md-6 squareDiv">
                            <div class="square"></div>
                        </div>
                        <div className="co2-sm-6 col-md-6 triangleDiv">
                            <div class="triangle-right"></div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-6">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <h5>Please read the Electronics Records and Signature Disclosure</h5>
                        </div>
                        <div className="col-sm-12 col-md-12">
                           <input type="checkbox" name="agreed" value="agreed"/>I agree to use electonics records and signatures
                        </div>
                     </div>
                </div>
                <div className="col-sm-2 col-md-2">
                    <PenfedButton buttonTitle = "CONTINUE" navPath = "complete"/>
                </div>
                <div className="col-sm-2 col-md-2">
                    <button type="button" class="btn-default">MORE ACTIONS</button>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-12">
                    <iframe src="https://qpncvs.axshare.com/#p=registered_accounts___gap&hi=1&id=hfvi5p" height="500" width="800" align="right"></iframe>
                </div>
            </div>
                
          </div>
    );
  }
}

export default ReviewAndSignContainer;
