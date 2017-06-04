import React from 'react';
import PropTypes from 'prop-types';

import AgileTextField, { AgileTextFieldPropTypes } from '../AgileTextField/AgileTextField';
import numberValidator from '../../Utils/Validators/number';

const NumberField = ({
  minValue,
  maxValue,
  validator = numberValidator(minValue, maxValue),
  feedbackElement = null,
  ...passThroughProps
}) => (
  <AgileTextField
    type="text"
    validateOnChange
    validator={validator}
    feedbackElement={feedbackElement}
    {...passThroughProps}
  />
  );
// Extend the props from AgileTextField
NumberField.propTypes = {
  ...AgileTextFieldPropTypes,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
};

NumberField.defaultProps = {
  minValue: -Infinity,
  maxValue: Infinity,
};

export default NumberField;
