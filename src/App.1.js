import React, { Component } from 'react'
import MainPage from './containers/MainPage'


class App extends Component {
  render() {
    return (
      <div className="App appBody">
        <div className="container" style={{ marginTop: "5px"}} >
          <div className="row">
            <div className="col-lg-12 offset-lg-12 col-md-12 col-sm-12 col-xs-12">
              <MainPage />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
