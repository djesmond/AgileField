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
        />
        <AgileTextField
          type="text"
          label="Name"
          validateInput={true}
        />
      </div>
    );
  }
}

export default App;
