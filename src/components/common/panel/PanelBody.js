import React, {Component} from 'react'
import DebtProtectionPlanOne from '../.././debt-protection/DebtProtectionPlanOne';

class PanelBody  extends Component {
    constructor(props){
        super(props)
        
    }

    render(){
        return (
                <div id={this.props.panelBody} class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                    <div class="panel-body">
                        <DebtProtectionPlanOne />
                    </div>
                </div>
        );
    }
}



export default PanelBody