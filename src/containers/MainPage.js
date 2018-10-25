import React, {Component} from 'react'
import { connect } from 'react-redux'
import Header from './Header';
import Footer from './Footer';
import PageBody from './PageBody';
import ReviewAndSign from '.././components/review-sign-agreement/ReviewAndSign';
import Disclosures from './Disclosures';
import DPComplete from '.././components/dp-complete/DPComplete';
import {Switch, Route, Link } from "react-router-dom";
import Accordion from '../components/Accordion/accordion';
import AccordionItem from '../components/Accordion/AccordionItem';
import '../index.css'
class MainPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
        }
    }

    render(){
        return (
                  <div className="mainPage">
                    
                        <Header />

                       <div className="mainArea">
                       <h3 className="mainHeading">Choose a plan and check if you are eligible </h3>

                       <Accordion atomic={true}>
                            <AccordionItem title="Plan 1 : Life , Disablitiy and Unemployment">
                                <AccordionContent1 />
                            </AccordionItem>
                            <AccordionItem title="Plan 2 : Life And Disablitiy">
                                <AccordionContent2 />
                            </AccordionItem>
                            <AccordionItem title="Plan 3 : Life">
                                <AccordionContent3 />
                            </AccordionItem>
                        </Accordion> 
                       </div>                       
                  </div>
        );
    }
}

const AccordionContent1 = () => (
    <div>
        
        <div className="row">
            <div className="col-md-7">
                <h5>Check If you're eligible</h5>
                <div className="checkQuestion">
                     <p className="question">  text changed by Murali</p>
                    <div className="cbox">
                        <input type="radio" className="radioBtn"/>
                    </div>
                    <div className="cbox">
                        <input type="radio" className="radioBtn"/>
                    </div>
                </div>
                <div  className="checkQuestion">
                    <p className="question">Do you currently work 25 or more hours Per Week</p>
                    <div className="cbox">
                            <input type="radio" className="radioBtn"/>
                        </div>
                        <div className="cbox">
                            <input type="radio" className="radioBtn"/>
                        </div>
                </div>
                <div  className="checkQuestion">
                <p className="question">Are you currently not self-employed and have not received unemployemnt benifits within the last 2 years </p>
                <div className="cbox">
                        <input type="radio" className="radioBtn"/>
                    </div>
                    <div className="cbox">
                        <input type="radio" className="radioBtn"/>
                    </div>
                </div> 

                <button className="btn btn-success">ENROLL AND SIGN AGGREMENT</button>     
       </div>
      <div className="col-md-5">
      <h5>Your monthly cost</h5>
      <p className="creditCard">YOUR CREDIT CARD ACCOUNT</p>
      <p>Power Cash Rewards(..1234)</p>
      <p className="creditCard">CURRENT BALANCE</p>
            <p className="currentBalance">$2000</p>
      <p className="creditCard">MONTHLY PAYMENT</p>
      <p className="monthlyPayment">$4.20</p>
      <p><label>How Payments Work : </label> We will add monthly payments to your current credit card balance at your next statement cycle</p>

        <h5>What you will get </h5>

        <ul>
            <li><p><label>Loss of life : </label> Cancels the remaining loan balance as of date of death(up to $70,000)</p></li>
            <li><p><label>Disablitiy : </label> Cancels up to 12 payments per occurance (aggregate maximum of $24,000, up to $1000 per month)</p></li>
            <li><p><label>Involunatary Unemployment : </label> Cancels up to 6 payments per occurance (aggregate maximum of $15,000, up to $1000 per month)</p></li>

        </ul>
      </div>
    </div>
    </div>
  );
  const AccordionContent2 = () => (
    <div>
    <div className="row">
      <div className="col-md-6">
        <p>I am from Left</p>
      </div>
      <div className="col-md-6">
        <p>I am from Right</p>
      </div>
    </div>
  </div>
  );const AccordionContent3 = () => (
    <div>
    <div className="row">
      <div className="col-md-6">
        <p>I am from Left</p>
      </div>
      <div className="col-md-6">
        <p>I am from Right</p>
      </div>
    </div>
  </div>
  );
export default MainPage