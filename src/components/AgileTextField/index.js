import React, { Component } from 'react';
import Radium from 'radium';

//Used if not overwritten
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
    margin: 0,
    fontSize: '14px',
  },
  fieldHintText: {
    margin: '4px 0px 4px 0px',
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
      <div style={[defaultStyle.fieldContainer, defaultStyle.fieldText]}>
        <p style={defaultStyle.fieldLabel}>{this.props.label}</p>
        <p style={defaultStyle.fieldHintText}>{this.props.hintText}</p>
          <input style={[defaultStyle.fieldInput.base, defaultStyle.fieldInput[this.state.state]]}
            type={this.props.type}
            value={this.state.value}
            onChange={this.handleInputChange}
            onBlur={this.handleValidate}/>

          <p style={[defaultStyle.fieldMessage.base, defaultStyle.fieldMessage[this.state.state]]}>
            {this.state.message}
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
}
// Specifies the default values for props:
AgileTextField.defaultProps = {
  type: 'text',
  label: 'label',
  validator: defaultValidator,
};

export default Radium(AgileTextField);
