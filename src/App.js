import React, { Component } from 'react';
import './App.css';

import AgileTextField from './components/AgileTextField';

function customValidator(input) {
  if(input.length > 6) {
    return {
      isValid: false,
      feedbackMessage: 'Must be less than 6 characters',
      state: 'invalid'
    }
  }else if (input.length === 0) {
    return {
      isValid: false,
      feedbackMessage: 'That\'s too boring!',
      state: 'invalid'
    }
  }
  else if(input.length > 0 && input.length < 6) {
    return {
      isValid: true,
      feedbackMessage: '',
      state: 'valid'
    }
  }
}
const customStyle = {
  fieldHintText: {
    color: '#00bf13'
  },
  fieldInput: {
    base: {
      color: '#df01c9'
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Agile Text Fields</h1>
        <p>A simple input with a label and hintText</p>
        <AgileTextField
          label="Name"
          hintText="Enter your full name"
        />
      <p>Without hint text</p>
          <AgileTextField
            label="Name"
          />
      <p>One with validation</p>
        <AgileTextField
          type="text"
          label="Name"
          hintText="Enter your full name"
          validateInput={true}
        />
      <p>One with custom validation</p>
        <AgileTextField
          label="Text"
          hintText="Explain your life with less than 6 characters"
          validateInput={true}
          validator={customValidator}
        />
      <p>One with custom style</p>
          <AgileTextField
            type="text"
            label="Developer doing design"
            hintText="Please don't tell the designers"
            style={customStyle}
          />
        <p>Disabled</p>
        <AgileTextField
          label="Add to account"
          hintText="How much money do you want?"
          disabled={true}
          />
      </div>
    );
  }
}

export default App;
