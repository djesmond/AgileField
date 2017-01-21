import React from 'react';
function DefaultFeedbackElement(state) {
  return(
    <p style={[state.style.fieldFeedback.base, state.style.fieldFeedback[state.state]]}>
      {state.feedbackMessage}
    </p>
  )
};
export default DefaultFeedbackElement;
