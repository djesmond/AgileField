import React from 'react';
import PropTypes from 'prop-types';

import AgileTextField, {AgileTextFieldPropTypes} from '../AgileTextField/AgileTextField';
import numberValidator from '../Utils/Validators/number';

const NumberField = ({ 
  minValue = -Infinity, 
  maxValue = Infinity, 
  validator = numberValidator(minValue, maxValue), 
  feedbackElement = null, 
  ...passThroughProps
}) => {
  return (
      <AgileTextField
        type="text"
        validateOnChange={true}
        validator={validator}
        feedbackElement={feedbackElement}
        {...passThroughProps}
      />
  )
}
//Extend the props from AgileTextField
NumberField.propTypes = {
  ...AgileTextFieldPropTypes,
  minValue: PropTypes.number,
  maxValue: PropTypes.number
};

export default NumberField;