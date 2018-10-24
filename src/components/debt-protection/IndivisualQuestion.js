import React from 'react';
import EligibilityCriteriaChoice from './EligibilityCriteriaChoice';

class IndivisualQuestion extends React.Component { 
  render() {
    return (
        <div className="row">          
            <div className="col-sm-12 col-md-12">
               <div className="row">           
                  <div className="col-sm-12 col-md-12">
                    <h5 className= "eligibilityQuestionsText">{this.props.questionTitle }</h5>
                  </div> 
              </div>
              <EligibilityCriteriaChoice  choiceId ={"choice"+this.props.questionNum}/>
            </div>          
        </div>
    );
  }
}

export default IndivisualQuestion;
