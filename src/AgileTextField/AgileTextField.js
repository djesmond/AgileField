import React from 'react';
import Radium from 'radium';
import _ from 'lodash/object';
import PropTypes from 'prop-types';

import bindState, { FieldPropTypes } from '../bindState';
import DefaultFeedbackElement from './DefaultFeedbackElement';


// Default style used as defualt prop
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
  fieldLabel: {
    fontSize: '14px',
    margin: '0px 0px 4px 0px',
  },
  fieldLabelOptional: {
    color: '#7a7a7a',
    fontStyle: 'italic',
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
      },
    },
    valid: {
      border: '1px solid #009c19',
      ':focus': {
        border: '1px solid #009c19',
        outline: 0,
      },
    },
    invalid: {
      border: '1px solid #c70000',
      ':focus': {
        border: '1px solid #c70000',
        outline: 0,
      },
    },
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
  },
};

const AgileTextFieldPropTypes = {
  ...FieldPropTypes,
  type: PropTypes.oneOf(['text', 'password']),
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  optional: PropTypes.bool,
  hintText: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  feedbackElement: PropTypes.func,
};

const AgileTextField = (props) => {
  const style = props.style ? _.merge({}, defaultStyle, props.style) : defaultStyle;
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
      <input
        style={[style.fieldInput.base, style.fieldInput[props.state.state]]}
        type={props.type}
        name={props.name}
        value={props.state.value}
        onChange={props.onChange}
        onBlur={props.validateInput && props.handleValidate}
        disabled={props.disabled}
      />
      {props.feedbackElement ?
        (props.feedbackElement(props.state)) : DefaultFeedbackElement(props.state)
      }
    </div>
  );
};
AgileTextField.propTypes = AgileTextFieldPropTypes;
AgileTextField.defaultProps = {
  type: 'text',
  name: 'Field',
  optional: false,
  hintText: '',
  style: null,
  disabled: false,
  feedbackElement: null,
};

export { AgileTextFieldPropTypes };
export default bindState()(Radium(AgileTextField));
