import React, { Component } from 'react';
import './App.css';
// import ReactDOM from 'react-dom';
// const City = import City from './components/City/City';
const City = require("./components/City/City");

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2>Welcome to React</h2>
          </div>
        </div>

        <div className="container">
          <p className="App-intro"> Hello Sunshine!</p>
            {/* Added this.props.children to dump all of the child components into place */}
            {this.props.City}
        </div>

      </div>
    );
  }
}



export default App;

