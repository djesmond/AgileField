import React from 'react';
import PropTypes from 'prop-types';

const style = {
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

const DefaultFeedbackPropTypes = {
  state: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

function DefaultFeedbackElement({ state, message }) {
  return (
    <p style={[style.fieldFeedback.base, style.fieldFeedback[state]]}>
      {message}
    </p>
  );
}
DefaultFeedbackElement.propTypes = DefaultFeedbackPropTypes;

export default DefaultFeedbackElement;
