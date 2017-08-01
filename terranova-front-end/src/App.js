import React, { Component } from 'react';
import logo from './maps-and-flags.png';
import './App.css';

function handleClick() {
  return;
}

class Entry extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      placeholder: 'What cities have you been to?',
    };
  }

  handleClick() {
    this.setState({
      placeholder: ' ',
    });
  }

  render() {
    return (
      <div className="Entry" onClick={this.handleClick}>
        <input type="text" id="search" name="search" 
        placeholder= {this.state.placeholder}/>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="Title">
            T E R R A N O V A
          </div>
        </div>
        <div className="App-border"> 
        </div>  
        <div className="App-body">
          <form action="search.java">
          <Entry 
            onClick={() => this.handleClick()}
          />
          <div className="Search-button">
              <input type="submit" value="SEARCH" />
          </div>
          </form>
        </div>
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
