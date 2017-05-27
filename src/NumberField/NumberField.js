import React from 'react';

import AgileTextField from '../AgileTextField/AgileTextField';
import numberValidator from '../Utils/Validators/number';

/*
NumberField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  hintText: PropTypes.string,
  optional: PropTypes.bool,
  onStateChange: PropTypes.func,
  onValueChange: PropTypes.func,
  feedbackElement: PropTypes.func,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  minValue: PropTypes.number,
  maxValue: PropTypes.number
};
// Specifies the default values for props:
NumberField.defaultProps = {
  name: 'number',
  style: styles,
  minValue: -Infinity,
  maxValue: Infinity
};
export default NumberField;
*/
const NumberField = (props) => {
  const { minValue, maxValue, validator, feedbackElement, ...passThroughProps} = props;
  const min = minValue ? minValue : -Infinity;
  const max = maxValue ? maxValue : Infinity;
  return (
      <AgileTextField
        type="text"
        validateOnChange={true}
        validator={validator ? validator : numberValidator(min, max)}
        feedbackElement={feedbackElement ? feedbackElement : null}
        {...passThroughProps}
      />
  )
}

export default NumberField;