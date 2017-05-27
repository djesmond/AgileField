import React, { Component } from 'react';
import PropTypes from 'prop-types';

import defaultValidator from '../Utils/Validators/default';

// This function takes a component...
function bindState(WrappedComponent) {
  // ...and returns another component...
  class Field extends Component {
    constructor(props) {
      super(props);
      this.state = {
      state: 'base',
      value: '',
      isValid: true,
      feedbackMessage: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleValidate = this.handleValidate.bind(this);
  }
  handleInputChange(event) {
    this.setState({value: event.target.value}, () => {
      //Call done inside callback
      //Insures that the state has been updated before calling
      if(this.props.validateOnChange) {
        this.handleValidate();
      }
      this.props.onValueChange(this.state);
    });
  }
  handleValidate() {
    //The validator returns an object representing the state
    var result = this.props.validator(this.state.value);
    this.setState(result, () => {
      //Call done inside callback
      //Insures that the state has been updated before calling
      this.props.onStateChange(this.state);
    });
  }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return (
          <WrappedComponent 
              state={this.state} 
              onChange={this.handleInputChange}
              handleValidate={this.handleValidate}
              {...this.props}
          />
      )
    }
  };
  //Specifies the propTypes
Field.propTypes = {
  type: PropTypes.oneOf(['text', 'password']),
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  optional: PropTypes.bool,
  hintText: PropTypes.string,
  validator: PropTypes.func,
  validateInput: PropTypes.bool,
  validateOnChange: PropTypes.bool,
  onStateChange: PropTypes.func,
  onValueChange: PropTypes.func,
  style: PropTypes.object,
  disabled: PropTypes.bool,
};
// Specifies the default values for props:
Field.defaultProps = {
  type: 'text',
  optional: false,
  hintText: '',
  validator: defaultValidator,
  validateInput: false,
  validateOnChange: false,
  onStateChange: (state) => {return state},
  onValueChange: (state) => {return state},
  disabled: false,
};

  return Field
}
export default bindState;