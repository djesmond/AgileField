import React from 'react';

import AgileTextField, {AgileTextFieldPropTypes} from '../AgileTextField/AgileTextField';
import passswordValidator from '../Utils/Validators/password';
import PasswordFeedbackElement from './PasswordFeedbackElement';

const PasswordField = ({ 
  validator = passswordValidator, 
  feedbackElement = PasswordFeedbackElement, 
  ...passThroughProps
}) => {
  return (
      <AgileTextField
        type="password"
        validateOnChange={true}
        validator={validator}
        feedbackElement={feedbackElement}
        {...passThroughProps}
      />
  )
}
PasswordField.propTypes = {
 ...AgileTextFieldPropTypes
};
export default PasswordField;
