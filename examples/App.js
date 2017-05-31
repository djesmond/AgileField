import React, { Component } from 'react';
import './App.css';

import { AgileTextField, PasswordField, NumberField } from '../src/index';

function customValidator(input) {
  if (input.length > 6) {
    return {
      isValid: false,
      message: 'Must be less than 6 characters',
      state: 'invalid',
    };
  } else if (input.length > 0 && input.length < 6) {
    return {
      isValid: true,
      message: '',
      state: 'valid',
    };
  } else {
    return {
      isValid: false,
      message: 'That\'s too boring!',
      state: 'invalid',
    };
  }
}

const customStyle = {
  fieldHintText: {
    color: '#00bf13',
  },
  fieldInput: {
    base: {
      color: '#df01c9',
    },
  },
};

const CustomFeedbackStyle = {
  fieldFeedback: {
    base: {
      margin: '4px 0px 4px 0px',
      fontSize: '12px',
      color: '#7a7a7a',
    },
    valid: {
      color: '#009c19',
    },
    invalid: {
      color: '#c70000',
    },
  },
};

function CustomFeedbackElement(state) {
  return (
    <p style={[CustomFeedbackStyle.fieldFeedback.base, CustomFeedbackStyle.fieldFeedback[state.state]]} >
      Message is: {state.message}
    </p>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleValueChange = this.handleValueChange.bind(this);
  }
  handleValueChange(state) {
    this.setState({ value: state.value });
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
          <p>Marked as optional</p>
          <AgileTextField
            label="Location"
            optional
          />
          <p>One with validation</p>
          <AgileTextField
            label="Name"
            hintText="Enter your full name"
            validateInput
          />
          <p>One with custom validation</p>
          <AgileTextField
            label="Text"
            hintText="Explain your life with less than 6 characters"
            validateInput
            validator={customValidator}
          />
          <p>One with validation and value return when value changes</p>
          <p>Value of input is: {this.state.value}</p>
          <AgileTextField
            label="Name"
            hintText="Enter your full name"
            validateInput
            onValueChange={this.handleValueChange}
          />
          <p>One with custom style</p>
          <AgileTextField
            label="Developer doing design"
            hintText="Please don't tell the designers"
            style={customStyle}
          />
          <p>One with custom feedback element</p>
          <AgileTextField
            label="Just a label"
            hintText="Hello"
            validateInput
            feedbackElement={CustomFeedbackElement}
          />
          <p>Disabled</p>
          <AgileTextField
            label="Add to account"
            hintText="How much money do you want?"
            disabled
          />
          <p>One with custom initial state</p>
          <AgileTextField
            label="Election"
            hintText="Enter the name of the president"
            initialState={{
              state: 'invalid',
              value: 'Hillary Clinton',
              isValid: false,
              message: 'Sorry, the orange won...',
            }}
          />
        </div>
        <div className="password">
          <h2>Password</h2>
          <p>Password creation with strength indicator</p>
          <PasswordField
            label="Password"
            hintText="Create a password"
          />
        </div>
        <div className="number">
          <h2>Number</h2>
          <p>Simple number input</p>
          <NumberField
            label="Number"
          />
          <p>One with min and max value</p>
          <NumberField
            label="Range"
            hintText="Must be between 0 and 10"
            minValue={0}
            maxValue={10}
          />
        </div>
      </div>
    );
  }
}

export default App;
