import React, { Component } from 'react';
import './App.css';

import AgileTextField from './components/AgileTextField';
import PasswordField from './components/PasswordField';

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
function CustomFeedbackElement(state) {
  return (
    <p style={[state.style.fieldFeedback.base, state.style.fieldFeedback[state.state]]}>
      Message is: {state.feedbackMessage}
    </p>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleValueChange = this.handleValueChange.bind(this);
  }
  handleValueChange(state) {
    this.setState({value: state.value});
  }
  render() {
    return (
      <div className="App">
        <h1>Agile Fields</h1>
        <div className="text">
        <h2>Text</h2>
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
      <p>One with validation and value return when value changes</p>
      <p>Value of input is: {this.state.value}</p>
        <AgileTextField
          label="Name"
          hintText="Enter your full name"
          validateInput={true}
          onValueChange={this.handleValueChange}
          />
      <p>One with custom style</p>
        <AgileTextField
          type="text"
          label="Developer doing design"
          hintText="Please don't tell the designers"
          style={customStyle}
        />
      <p>One with custom feedback element</p>
          <AgileTextField
            type="text"
            label="Just a label"
            hintText="Hello"
            validateInput={true}
            feedbackElement={CustomFeedbackElement}
          />
        <p>Disabled</p>
        <AgileTextField
          label="Add to account"
          hintText="How much money do you want?"
          disabled={true}
          />
        </div>
          <div className="password">
            <h2>Password</h2>
            <PasswordField
              label="Password"
              hintText="Create a password"
            />
          </div>
      </div>
    );
  }
}

export default App;
