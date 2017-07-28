import React, { Component } from 'react';
import logo from './maps-and-flags.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="Title">
            T E R R A N O V A
          </div>
        <div className="App-border"> 
        </div>  
        </div>
        <p className="Intro">
          <i> Work in progress. </i>
        </p>
        <div className="App-footer">
          <div className="Credits">
            (C) Mahfuza Shovik & Ridwan Meah
            <br/> Icon made by <a href="https://www.flaticon.com/authors/freepik">
            Freepik</a> from <a href="https://www.flaticon.com">www.flaticon.com.</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
