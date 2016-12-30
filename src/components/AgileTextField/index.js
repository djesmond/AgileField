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
  fieldInputValid: {
      border: '1px solid #009c19',
      ':focus': {
        border: '1px solid #009c19',
        outline: 0,
      }
  },
  fieldInputInvalid: {
      border: '1px solid #c70000',
      ':focus': {
        border: '1px solid #c70000',
        outline: 0,
      }
  },
  fieldInvalidMessage: {
    margin: '4px 0px 4px 0px',
    fontSize: '12px',
    color: '#c70000',
  }
};

class AgileTextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isValid: true
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleValidate = this.handleValidate.bind(this);
  }
  handleInputChange(event) {
    this.setState({value: event.target.value});
  }
  handleValidate() {
    if(this.state.value.length > 4) {
      this.setState({isValid: true});
    }else {
      this.setState({isValid: false});
    }
  }
  render() {
    return (
      <div style={[defaultStyle.fieldContainer, defaultStyle.fieldText]}>
        <p style={defaultStyle.fieldLabel}>{this.props.label}</p>
        <p style={defaultStyle.fieldHintText}>{this.props.hintText}</p>
        {this.state.isValid &&
          <input style={defaultStyle.fieldInput} type={this.props.type} value={this.state.value} onChange={this.handleInputChange} onBlur={this.handleValidate}/>
        }
        {!this.state.isValid &&
          <input style={[defaultStyle.fieldInput, defaultStyle.fieldInputInvalid]} type={this.props.type} value={this.state.value} onChange={this.handleInputChange} onBlur={this.handleValidate}/>
        }
        {this.state.isValid &&
          <p style={defaultStyle.fieldInvalidMessage}></p>
        }
        {!this.state.isValid &&
          <p style={defaultStyle.fieldInvalidMessage}>{this.props.invalidMessage}</p>
        }
      </div>
    );
  }
}

//Specifies the propTypes
AgileTextField.propTypes = {
  type: React.PropTypes.oneOf(['text', 'email', 'password']).isRequired,
  label: React.PropTypes.string.isRequired,
  hintText: React.PropTypes.string,
  invalidMessage: React.PropTypes.string
}
// Specifies the default values for props:
AgileTextField.defaultProps = {
  type: 'text',
  label: 'label',
};

export default Radium(AgileTextField);
