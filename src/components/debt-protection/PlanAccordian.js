import React, {Component} from 'react'
import { connect } from 'react-redux'
import PanelHeader from '.././common/panel/PanelHeader';
import PanelBody from '.././common/panel/PanelBody';
import Panel from '.././common/panel/Panel';

class PlanAccordian extends Component {
    constructor(props){
        super(props)
        
    }

    render(){
        return (
                <div className="row planAccordian">
                    <div className="col-lg-12 offset-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <Panel panelNumber = "PanelOne"  planName = " PLAN1"  planTitle= " Life, Disability, and Unemployment"/>
                            <Panel panelNumber = "PanelTwo"  planName = " PLAN2" planTitle= " Life and Disability"/>
                            <Panel panelNumber = "PanelThree"  planName = " PLAN3 " planTitle= " Life"/>
                           
                            
                        </div>
                    </div>                  
                </div>
        );
    }
}



export default PlanAccordian