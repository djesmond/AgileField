import React, { Component } from 'react';
import AgileTextField from '../AgileTextField';
import passswordValidator from '../Utils/Validators/password';
import PasswordStrengthElement from './PasswordFeedbackElement';

const styles = {
  passIndicator: {
    base: {
      backgroundColor: '#ff0909',
      borderRadius: '3px 0px 0px 3px',
      width: '5%',
      height: '15px'
    },
    weak: {
      backgroundColor: '#ff0909',
      width: '15%'
    },
    passable: {
      backgroundColor: '#ffb50f',
      width: '50%'
    },
    strong: {
      borderRadius: '3px 3px 3px 3px',
      backgroundColor: '#49d000',
      width: '100%'
    }
  },
  container: {
    width: '268px'
  },
  textContainer: {
    fontSize: '12px',
    width: 'inherit',
  },
  subheader: {
    margin: '4px 0',

  },
  textRight: {
    margin: '0',
    float: 'right'
  }
};

class PasswordField extends Component {
  render() {
    const {...passThroughProps} = this.props;
    return (
      <AgileTextField
        type="password"
        validateOnChange={true}
        {...passThroughProps}
      />
    );
  }
};
PasswordField.propTypes = {
  name: React.PropTypes.string,
  label: React.PropTypes.string.isRequired,
  hintText: React.PropTypes.string,
  validator: React.PropTypes.func,
  onStateChange: React.PropTypes.func,
  onValueChange: React.PropTypes.func,
  feedbackElement: React.PropTypes.func,
  style: React.PropTypes.object,
  disabled: React.PropTypes.bool,
};
// Specifies the default values for props:
PasswordField.defaultProps = {
  hintText: 'Enter password',
  name: 'password',
  validator: passswordValidator,
  onStateChange: (state) => {return state},
  onValueChange: (state) => {return state},
  feedbackElement: PasswordStrengthElement,
  style: styles,
  disabled: false,
};
export default PasswordField;
