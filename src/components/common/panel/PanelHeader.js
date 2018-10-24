import React, {Component} from 'react'

class PanelHeader  extends Component {
    constructor(props){
        super(props)
        
    }

    render(){
        return (
                <div class="panel-heading active" role="tab" id="headingOne">
                    <h4 class="panel-title">
                        <div role="button"  class="panelTitle" data-toggle="collapse" data-parent="#accordion" href={"#" + this.props.panelBody} aria-expanded="true" aria-controls={this.props.panelBody}>
                            <h5> {this.props.planName}:  {this.props.planTitle} </h5>
                        </div>
                    </h4>
                </div>
        );
    }
}



export default PanelHeader