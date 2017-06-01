import React, { Component } from 'react';
import logo from './logo.svg';
import RaisedButton from 'material-ui/RaisedButton';
import './App.css';
import Articles from './home/Articles'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      landingPage: true
    }
  }

  render() {
    if (this.state.landingPage) {
      return (
        <div className="App">
        <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 onClick={ () => this.setState({ landingPage : false })}>Welcome to React</h2>
        </div>
       <RaisedButton
        primary
        label="Start"
        onTouchTap={ () => this.setState({ landingPage : false })}
       />
        </div>
      );
    } else {
      return (<Articles />);
    }
  }
}

export default App;
