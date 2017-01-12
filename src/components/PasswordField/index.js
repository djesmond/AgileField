import React, { Component } from 'react';
import AgileTextField from '../AgileTextField';

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

function passswordValidator(input) {
  if(input.length > 4 && input.length < 8) {
    return {
      isValid: true,
      feedbackMessage: 'Weak',
      state: 'weak'
    }
  } else if(input.length > 8 && input.length < 16) {
    return {
      isValid: true,
      feedbackMessage: 'Passable',
      state: 'passable'
    }
  } else if(input.length > 16) {
    return {
      isValid: true,
      feedbackMessage: 'Strong',
      state: 'strong'
    }
  }
  else {
    return {
      isValid: false,
      feedbackMessage: 'Invalid',
      state: 'base'
    }
  }
};

function PasswordStrength(state) {
  return(
    <div style={state.style.container}>
      <div style={state.style.textContainer}>
        <p style={state.style.subheader}>
          Strength: <span style={state.style.textRight}>{state.feedbackMessage}</span>
        </p>
      </div>
      <div style={[state.style.passIndicator.base, state.style.passIndicator[state.state]]}></div>
    </div>
  )
};

class PasswordField extends Component {
  render() {
    return (
      <AgileTextField
        label={this.props.label}
        hintText={this.props.hintText}
        type="password"
        name={this.props.name}
        validateInput={this.props.validateInput}
        style={styles}
        validator={this.props.validator}
        onStateChange={this.props.onStateChange}
        onValueChange={this.props.onValueChange}
        feedbackElement={this.props.feedbackElement}
        disabled={this.props.disabled}
      />
    );
  }
};
PasswordField.propTypes = {
  type: React.PropTypes.oneOf(['password']),
  name: React.PropTypes.string,
  label: React.PropTypes.string.isRequired,
  hintText: React.PropTypes.string,
  validator: React.PropTypes.func,
  validateInput: React.PropTypes.bool,
  onStateChange: React.PropTypes.func,
  onValueChange: React.PropTypes.func,
  feedbackElement: React.PropTypes.func,
  style: React.PropTypes.object,
  disabled: React.PropTypes.bool,
};
// Specifies the default values for props:
PasswordField.defaultProps = {
  type: 'password',
  hintText: 'Enter password',
  name: 'password',
  validator: passswordValidator,
  validateInput: true,
  onStateChange: (state) => {return state},
  onValueChange: (state) => {return state},
  feedbackElement: PasswordStrength,
  disabled: false,
};
export default PasswordField;
