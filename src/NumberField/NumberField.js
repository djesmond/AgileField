import React, { Component } from 'react';
import AgileTextField from '../AgileTextField';
import numberValidator from '../Utils/Validators/number';

const styles = {
};

class NumberField extends Component {
  render() {
    const {...passThroughProps} = this.props;
    return (
      <AgileTextField
        type="text"
        validateInput={true}
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
};
// Specifies the default values for props:
NumberField.defaultProps = {
  name: 'number',
  validator: numberValidator,
  style: styles,
};
export default NumberField;
