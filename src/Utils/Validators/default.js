export default function (input) {
  if(input.length > 0) {
    return {
      isValid: true,
      feedbackMessage: '',
      state: 'valid',
    }
  }else if (input.length === 0) {
    return {
      isValid: false,
      feedbackMessage: 'Empty string not allowed',
      state: 'invalid',
    }
  }
}
