import React from 'react';

const styles = {
  passIndicator: {
    base: {
      backgroundColor: '#ff0909',
      borderRadius: '3px 0px 0px 3px',
      width: '5%',
      height: '15px'
    },
    weak: {
      backgroundColor: '#ff0909',
      width: '15%'
    },
    passable: {
      backgroundColor: '#ffb50f',
      width: '50%'
    },
    strong: {
      borderRadius: '3px 3px 3px 3px',
      backgroundColor: '#49d000',
      width: '100%'
    }
  },
  container: {
    width: '268px'
  },
  textContainer: {
    fontSize: '12px',
    width: 'inherit',
  },
  subheader: {
    margin: '4px 0',

  },
  textRight: {
    margin: '0',
    float: 'right'
  }
};

function PasswordStrength({state, feedbackMessage}) {
  return(
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <p style={styles.subheader}>
          Strength: <span style={styles.textRight}>{feedbackMessage}</span>
        </p>
      </div>
      <div style={[styles.passIndicator.base, styles.passIndicator[state]]}></div>
    </div>
  )
};

export default PasswordStrength;
