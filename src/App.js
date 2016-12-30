import React, { Component } from 'react';
import './App.css';

import AgileTextField from './components/AgileTextField';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AgileTextField
          type="text"
          label="Email"
          hintText="Example: johndoe@email.com"
          invalidMessage="Not a valid Email"
        />
        <AgileTextField
          type="text"
          label="Name"
          hintText="Enter your full name"
          invalidMessage="Not a valid name"
        />
      </div>
    );
  }
}

export default App;
