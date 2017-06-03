import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import _ from 'lodash/object';

import defaultValidator from '../Utils/Validators/default';

const FieldPropTypes = {
  validator: PropTypes.func,
  validateInput: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
  validateOnChange: PropTypes.bool,
  setStateUpdater: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  onStateChange: PropTypes.func,
  onValueChange: PropTypes.func,
  initialState: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};
const FieldDefaultProps = {
  validator: defaultValidator,
  validateInput: false,
  validateOnChange: false,
  setStateUpdater: (prevState, props) => ({ value: event.target.value }), // eslint-disable-line 
  onStateChange: state => state,
  onValueChange: state => state,
  initialState: {
    state: 'base',
    value: '',
    isValid: true,
    message: '',
  },
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function bindState(fieldProps = {}) {
  return function wrapComponent(WrappedComponent) {
    class Field extends Component {
      constructor(props) {
        super(props);
        this.state = this.props.initialState;
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleValidate = this.handleValidate.bind(this);
      }
      handleInputChange(event) {
        this.setState(this.props.setStateUpdater, () => {
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
        const result = this.props.validator(this.state);
        this.setState(result, () => {
        // Call done inside callback
        // Insures that the state has been updated before calling
          this.props.onStateChange(this.state);
        });
      }

      render() {
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
    Field.propTypes = FieldPropTypes;
    Field.defaultProps = FieldDefaultProps;
    // Set the display name
    Field.displayName = `Field(${getDisplayName(WrappedComponent)})`;
    return Field;
  };
}

export { FieldPropTypes };
export default bindState;
