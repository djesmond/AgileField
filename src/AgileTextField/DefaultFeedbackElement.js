import React from 'react';

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
  }
}

function DefaultFeedbackElement({state, feedbackMessage}) {
  return(
    <p style={[style.fieldFeedback.base, style.fieldFeedback[state]]}>
      {feedbackMessage}
    </p>
  )
};
export default DefaultFeedbackElement;
