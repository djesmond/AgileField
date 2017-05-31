import React, { Component } from 'react';
import PropTypes from 'prop-types';

import defaultValidator from '../Utils/Validators/default';

const FieldPropTypes = {
  validator: PropTypes.func,
  validateInput: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
  validateOnChange: PropTypes.bool,
  onStateChange: PropTypes.func,
  onValueChange: PropTypes.func,
  initialState: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

// This function takes a component...
function bindState(WrappedComponent) {
  // ...and returns another component...
  class Field extends Component {
    constructor(props) {
      super(props);
      this.state = this.props.initialState;
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleValidate = this.handleValidate.bind(this);
    }
    handleInputChange(event) {
      this.setState({ value: event.target.value }, () => {
      // Call done inside callback
      // Insures that the state has been updated before calling
        if (this.props.validateOnChange) {
          this.handleValidate();
        }
        this.props.onValueChange(this.state);
      });
    }
    handleValidate() {
    // The validator returns an object representing the state
      const result = this.props.validator(this.state.value);
      this.setState(result, () => {
      // Call done inside callback
      // Insures that the state has been updated before calling
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
      );
    }
  }
  // Specifies the propTypes
  Field.propTypes = FieldPropTypes;
// Specifies the default values for props:
  Field.defaultProps = {
    validator: defaultValidator,
    validateInput: false,
    validateOnChange: false,
    onStateChange: state => state,
    onValueChange: state => state,
    initialState: {
      state: 'base',
      value: '',
      isValid: true,
      message: '',
    },
  };

  return Field;
}

export { FieldPropTypes };
export default bindState;
