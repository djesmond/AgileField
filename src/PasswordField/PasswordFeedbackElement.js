import React from 'react';

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

export default PasswordStrength;
