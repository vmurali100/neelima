import React, { Component } from 'react';
import Radio from '../common/radio-button/Radio';

export default class AccordionContent1 extends Component {
    constructor(){
        super()
        this.state = {
            answer1:'',
            answer2:'',
            answer3:''
        }
    }
  
  render() {
    return (
        <div>
        
        <div className="row">
            <div className="col-md-7">
                <h5>Check If you're eligible</h5>
                <div className="checkQuestion">
                     <p className="question">  text changed by Murali</p>
                    <form>
                    <Radio name="answer1" text="Yes"/>
                    <Radio name="answer1" text="No"/>
                    </form>
                   
                </div>
                <div  className="checkQuestion">
                    <p className="question">Do you currently work 25 or more hours Per Week</p>
                    <Radio name="answer2"  text="Yes"/>
                    <Radio name="answer2"  text="No"/>
                </div>
                <div  className="checkQuestion">
                <p className="question">Are you currently not self-employed and have not received unemployemnt benifits within the last 2 years </p>
                    <Radio name="answer3"  text="Yes"/>
                    <Radio name="answer3"  text="No"/>
                </div> 

                <button className="btn btn-success">ENROLL AND SIGN AGGREMENT</button>     
       </div>
      {/* <div className="col-md-5">
            <CostingDetails/>
      </div> */}
    </div>
    </div>
    )
  }
}
