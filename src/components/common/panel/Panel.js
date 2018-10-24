import React, {Component} from 'react'
import PanelHeader from './PanelHeader';
import PanelBody from './PanelBody';

class Panel extends Component {
    constructor(props){
        super(props)       
    }

    render(){
        return (
            <div className="planPanel">
                <div class="panel panel-default">
                    <PanelHeader panelHeading = {"header" + this.props.panelNumber} panelBody = {"body" + this.props.panelNumber}  planName = {this.props.planName} planTitle = {this.props.planTitle}/>
                    <PanelBody  panelHeading = {"header" + this.props.panelNumber}  panelBody = {"body"+ this.props.panelNumber} />
                </div>
            </div>
        );
    }
}



export default Panel