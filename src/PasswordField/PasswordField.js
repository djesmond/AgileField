import React from 'react';
import AgileTextField from '../AgileTextField/AgileTextField';

import passswordValidator from '../Utils/Validators/password';
import PasswordFeedbackElement from './PasswordFeedbackElement';

const PasswordField = (props) => {
  const { validator, feedbackElement, ...passThroughProps} = props;
  return (
      <AgileTextField
        type="password"
        validateOnChange={true}
        validator={validator ? validator : passswordValidator}
        feedbackElement={feedbackElement ? feedbackElement : PasswordFeedbackElement}
        {...passThroughProps}
      />
  )
}
export default PasswordField;
