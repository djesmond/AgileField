import React from 'react';
import Radium from 'radium';
import _ from 'lodash/object';

import bindState from '../bindState';
import DefaultFeedbackElement from './DefaultFeedbackElement';

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
  fieldLabelOptional: {
    color: '#7a7a7a',
    fontStyle: 'italic'
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

/*
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
      if(this.props.validateOnChange) {
        this.handleValidate();
      }
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
        <p style={this.state.style.fieldLabel}>
          {this.props.label}
          {this.props.optional &&
            <span style={this.state.style.fieldLabelOptional}> - Optional</span>
          }
        </p>
        {this.props.hintText.length > 0 &&
          <p style={this.state.style.fieldHintText}>{this.props.hintText}</p>
        }
          <input style={[this.state.style.fieldInput.base, this.state.style.fieldInput[this.state.state]]}
            type={this.props.type}
            name={this.props.name}
            value={this.state.value}
            onChange={this.handleInputChange}
            onBlur={this.props.validateInput && this.handleValidate}
            disabled={this.props.disabled}
          />
          {this.props.feedbackElement(this.state)}
      </div>
    );
  }
}

//Specifies the propTypes
AgileTextField.propTypes = {
  type: PropTypes.oneOf(['text', 'password']),
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  optional: PropTypes.bool,
  hintText: PropTypes.string,
  validator: PropTypes.func,
  validateInput: PropTypes.bool,
  validateOnChange: PropTypes.bool,
  onStateChange: PropTypes.func,
  onValueChange: PropTypes.func,
  feedbackElement: PropTypes.func,
  style: PropTypes.object,
  disabled: PropTypes.bool,
};
// Specifies the default values for props:
AgileTextField.defaultProps = {
  type: 'text',
  optional: false,
  hintText: '',
  validator: defaultValidator,
  validateInput: false,
  validateOnChange: false,
  onStateChange: (state) => {return state},
  onValueChange: (state) => {return state},
  feedbackElement: DefaultFeedbackElement,
  disabled: false,
};
*/

const Field = (props) => {
  const style = props.style ? _.merge({},defaultStyle, props.style) : defaultStyle;
  return (
    <div style={[style.fieldContainer, style.fieldText]}>
        <p style={style.fieldLabel}>
          {props.label}
          {props.optional &&
            <span style={style.fieldLabelOptional}> - Optional</span>
          }
        </p>
        {props.hintText.length > 0 &&
          <p style={style.fieldHintText}>{props.hintText}</p>
        }
          <input style={[style.fieldInput.base, style.fieldInput[props.state.state]]}
              type={props.type}
              name={props.name}
              value={props.state.value}
              onChange={props.onChange}
              onBlur={props.validateInput && props.handleValidate}
              disabled={props.disabled}
          />
          {props.feedbackElement ? (
              props.feedbackElement(props.state)) : DefaultFeedbackElement(props.state)}
      </div>
  )
}



export default bindState(Radium(Field));
