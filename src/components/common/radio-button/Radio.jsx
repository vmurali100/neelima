import React, { Component } from 'react'

export default class Radio extends Component {
    constructor(){
        super()
    }
  

  render() {
    return (
        <div>
                <div className="cbox">
                    <input type="radio" className="radioBtn" name={this.props.name}/><p>{this.props.text}</p>
                </div>      
        </div>
    )
  }
}
