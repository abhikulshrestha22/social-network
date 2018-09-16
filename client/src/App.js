import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  //initialize state
  state = { passwords:[]}

  //fetch passwords after first mount
  componentDidMount(){
    this.getPasswords();
  }

  getPasswords = ()=>{
    // get the password and store them in state
    fetch('/api/passwords')
      .then(res =>res.json())
      .then(passwords=>this.setState({passwords}));
  }


  render() {
    const {passwords} = this.state;

    return (
      <div className="App">
        {/* render the password if we have them */}
        {
          passwords.length ? (
            <div>
              <h1>5 passwords</h1>
              <ul className="passwords">
                {/*
                  Generally it's bad to use "index" as a key.
                It's ok for this example because there will always
                be the same number of passwords, and they never
                change positions in the array.
                */}
                {passwords.map((password,index)=>
                  <li key={index}> {password}</li>
                )}
              </ul>
              <button 
                className="more"
                onClick={this.getPasswords}>
                Get More
              </button>
            </div>
          ): (
            //render a helpful message otherwise
            <div>
              <h1>No passwords :( </h1>
              <button 
                className="more"
                onClick={this.getPasswords}>Try Again?</button>
            </div>
          )
        }
      </div>
    );
  }
}

export default App;