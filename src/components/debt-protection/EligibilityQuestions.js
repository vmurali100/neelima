import React from 'react';
import IndivisualQuestion from './IndivisualQuestion';

class EligibilityQuestions extends React.Component { 
  render() {
    return (
        <div>
              
            <IndivisualQuestion questionNum ={1} questionTitle = "Within the last two years, have you been advised of, treated for, or taken any medication for heart attck or other heart disease or disorder, coronary artery disease, cancer, stroke, cirrhosis, AIDS or a positive HIV test ? " /> 
            <IndivisualQuestion questionNum ={2} questionTitle = "Do you currently work 25 or more hours per week ?"/>  
            <IndivisualQuestion questionNum ={3} questionTitle = "Are you currently not self-employed, and have not received unemploment benefits within the past 2 years ?" />         
       </div>
    );
  }
}

export default EligibilityQuestions;
