import React, { Component } from 'react';
import AgileTextField from '../AgileTextField';
import numberValidator from '../Utils/Validators/number';

const styles = {
};

class NumberField extends Component {
  render() {
    const {minValue, maxValue, ...passThroughProps} = this.props;
    return (
      <AgileTextField
        type="text"
        validateInput={true}
        validator={numberValidator(minValue, maxValue)}
        {...passThroughProps}
      />
    );
  }
};
NumberField.propTypes = {
  name: React.PropTypes.string,
  label: React.PropTypes.string.isRequired,
  hintText: React.PropTypes.string,
  onStateChange: React.PropTypes.func,
  onValueChange: React.PropTypes.func,
  feedbackElement: React.PropTypes.func,
  style: React.PropTypes.object,
  disabled: React.PropTypes.bool,
  minValue: React.PropTypes.number,
  maxValue: React.PropTypes.number
};
// Specifies the default values for props:
NumberField.defaultProps = {
  name: 'number',
  style: styles,
  minValue: -Infinity,
  maxValue: Infinity
};
export default NumberField;
