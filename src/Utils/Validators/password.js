export default function (input) {
  if(input.length >= 4 && input.length < 8) {
    return {
      isValid: true,
      feedbackMessage: 'Weak',
      state: 'weak'
    }
  } else if(input.length >= 8 && input.length < 16) {
    return {
      isValid: true,
      feedbackMessage: 'Passable',
      state: 'passable'
    }
  } else if(input.length >= 16) {
    return {
      isValid: true,
      feedbackMessage: 'Strong',
      state: 'strong'
    }
  }
  else {
    return {
      isValid: false,
      feedbackMessage: 'Invalid',
      state: 'base'
    }
  }
}
