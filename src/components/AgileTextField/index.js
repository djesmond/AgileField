import React, { Component } from 'react';
import Radium from 'radium';
import _ from 'lodash/object';

//Default style used as defualt prop
const defaultStyle = {
  fieldContainer: {
    width: '300px',
    minHeight: '90px',
    margin: '8px 0px',
  },
  fieldText: {
    textAlign: 'left',
    fontFamily: 'sans-serif',
    lineHeight: 1,
  },
  fieldLabel: {
    fontSize: '14px',
    margin: '0px 0px 4px 0px',
  },
  fieldHintText: {
    margin: '0px 0px 4px 0px',
    fontSize: '12px',
    color: '#7a7a7a',
  },
  fieldInput: {
    base: {
      border: '1px solid #c3c3c3',
      borderRadius: '3px',
      padding: '8px',
      width: '250px',
      fontSize: '16px',
      ':focus': {
        border: '1px solid #494949',
        outline: 0,
      },
      ':disabled': {
        backgroundColor: '#f7f7f7',
      }
    },
    valid: {
      border: '1px solid #009c19',
      ':focus': {
        border: '1px solid #009c19',
        outline: 0,
      }
    },
    invalid: {
      border: '1px solid #c70000',
      ':focus': {
        border: '1px solid #c70000',
        outline: 0,
      }
    }
  },
  fieldFeedback: {
    base: {
      margin: '4px 0px 4px 0px',
      fontSize: '12px',
      color: '#7a7a7a',
    },
    valid: {
      color: '#009c19',
    },
    invalid: {
      color: '#c70000',
    },
  }
};

class AgileTextField extends Component {
  constructor(props) {
    super(props);
    //Overwrite defaultStyle if custom has been provided, Without removing untouched defaultStyles
    //Creates a new object based on the defaultStyle and the custom style from prop
    var styles = this.props.style ? _.merge({},defaultStyle, this.props.style) : defaultStyle;
    this.state = {
      state: 'base',
      value: '',
      isValid: true,
      feedbackMessage: '',
      style: styles
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleValidate = this.handleValidate.bind(this);
  }
  handleInputChange(event) {
    this.setState({value: event.target.value}, () => {
      //Call done inside callback
      //Insures that the state has been updated before calling
      this.props.onValueChange(this.state);
    });
  }
  handleValidate() {
    //The validator returns an object representing the state
    var result = this.props.validator(this.state.value);
    this.setState(result, () => {
      //Call done inside callback
      //Insures that the state has been updated before calling
      this.props.onStateChange(this.state);
    });
  }
  render() {
    return (
      <div style={[this.state.style.fieldContainer, this.state.style.fieldText]}>
        <p style={this.state.style.fieldLabel}>{this.props.label}</p>
        {this.props.hintText.length > 0 &&
          <p style={this.state.style.fieldHintText}>{this.props.hintText}</p>
        }
          <input style={[this.state.style.fieldInput.base, this.state.style.fieldInput[this.state.state]]}
            type={this.props.type}
            name={this.props.name}
            value={this.state.value}
            onChange={this.handleInputChange}
            onBlur={this.props.validateInput ? this.handleValidate : ''}
            disabled={this.props.disabled}
            />

          <p style={[this.state.style.fieldFeedback.base, this.state.style.fieldFeedback[this.state.state]]}>
            {this.state.feedbackMessage}
          </p>
      </div>
    );
  }
}

//Default validator
function defaultValidator(input) {
  if(input.length > 0) {
    return {
      isValid: true,
      feedbackMessage: '',
      state: 'valid',
    }
  }else if (input.length === 0) {
    return {
      isValid: false,
      feedbackMessage: 'Empty string not allowed',
      state: 'invalid',
    }
  }
}

//Specifies the propTypes
AgileTextField.propTypes = {
  type: React.PropTypes.oneOf(['text', 'email', 'password']),
  name: React.PropTypes.string,
  label: React.PropTypes.string.isRequired,
  hintText: React.PropTypes.string,
  validator: React.PropTypes.func,
  validateInput: React.PropTypes.bool,
  onStateChange: React.PropTypes.func,
  onValueChange: React.PropTypes.func,
  style: React.PropTypes.object,
  disabled: React.PropTypes.bool,
}
// Specifies the default values for props:
AgileTextField.defaultProps = {
  type: 'text',
  hintText: '',
  validator: defaultValidator,
  validateInput: false,
  onStateChange: (state) => {return state},
  onValueChange: (state) => {return state},
  disabled: false,
};

export default Radium(AgileTextField);
