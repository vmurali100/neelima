import React, {Component} from 'react'
import { connect } from 'react-redux'
import Header from './Header';
import Footer from './Footer';
import PageBody from './PageBody';
import ReviewAndSign from '.././components/review-sign-agreement/ReviewAndSign';
import DPComplete from '.././components/dp-complete/DPComplete';
import {Switch, Route, Link } from "react-router-dom";

class MainPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
        }
    }

    render(){
        return (
                  <div className="form-group row">
                    <div className="col-sm-12">
                        <Header />
                        <Switch>
                            <Route exact path="/" component={PageBody} />
                            <Route path="/review" component={ReviewAndSign} />
                            <Route path="/complete" component={DPComplete} />
                        </Switch>
                        <Footer />
                    </div>
                  </div>
        );
    }
}



export default MainPage