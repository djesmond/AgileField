import React from 'react';

import AgileTextField, { AgileTextFieldPropTypes } from '../AgileTextField/AgileTextField';
import passswordValidator from '../Utils/Validators/password';
import PasswordFeedbackElement from './PasswordFeedbackElement';

const PasswordField = ({
  validator = passswordValidator,
  feedbackElement = PasswordFeedbackElement,
  ...passThroughProps
}) => (
  <AgileTextField
    type="password"
    validateOnChange
    validator={validator}
    feedbackElement={feedbackElement}
    {...passThroughProps}
  />
  );
PasswordField.propTypes = {
  ...AgileTextFieldPropTypes,
};
export default PasswordField;
