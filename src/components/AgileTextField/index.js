import React, { Component } from 'react';
import Radium from 'radium';

class AgileTextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: 'base',
      value: '',
      isValid: true,
      message: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleValidate = this.handleValidate.bind(this);
  }
  handleInputChange(event) {
    this.setState({value: event.target.value});
  }
  handleValidate() {
    //The validator returns an object representing the state
    var result = this.props.validator(this.state.value);
    console.log(result);
    this.setState(result);
  }
  render() {
    return (
      <div style={[this.props.style.fieldContainer, this.props.style.fieldText]}>
        <p style={this.props.style.fieldLabel}>{this.props.label}</p>
        {this.props.hintText.length > 0 &&
          <p style={this.props.style.fieldHintText}>{this.props.hintText}</p>
        }
          <input style={[this.props.style.fieldInput.base, this.props.style.fieldInput[this.state.state]]}
            type={this.props.type}
            value={this.state.value}
            onChange={this.handleInputChange}
            onBlur={this.props.validateInput ? this.handleValidate : ''}/>


          <p style={[this.props.style.fieldMessage.base, this.props.style.fieldMessage[this.state.state]]}>
            {this.state.message}
          </p>
      </div>
    );
  }
}
//Default style used as defualt prop
const defaultStyle = {
  fieldContainer: {
    width: '300px',
    minHeight: '90px',
    margin: '8px',
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
  fieldMessage: {
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

//Default validator
function defaultValidator(input) {
  if(input.length > 0) {
    return {
      isValid: true,
      message: '',
      state: 'valid',
    }
  }else if (input.length === 0) {
    return {
      isValid: false,
      message: 'Not a valid string',
      state: 'invalid',
    }
  }
}

//Specifies the propTypes
AgileTextField.propTypes = {
  type: React.PropTypes.oneOf(['text', 'email', 'password']).isRequired,
  name: React.PropTypes.string,
  label: React.PropTypes.string.isRequired,
  hintText: React.PropTypes.string,
  validator: React.PropTypes.func,
  validateInput: React.PropTypes.bool,
  style: React.PropTypes.object,
}
// Specifies the default values for props:
AgileTextField.defaultProps = {
  type: 'text',
  label: 'label',
  hintText: '',
  validator: defaultValidator,
  validateInput: false,
  style: defaultStyle,
};

export default Radium(AgileTextField);
