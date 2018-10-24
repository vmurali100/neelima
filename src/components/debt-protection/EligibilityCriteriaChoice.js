import React from 'react';

class EligibilityCriteriaChoice extends React.Component { 
  render() {
    return (
        <div className="col-sm-12 col-md-12 yesNoRadioButton">
            <input type="radio" name={this.props.choiceId} /> Yes
            <input type="radio" name={this.props.choiceId} /> No
     </div>
    );
  }
}

export default EligibilityCriteriaChoice;
