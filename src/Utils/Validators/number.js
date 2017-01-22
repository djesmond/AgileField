var isNumber = function(value) {
  //NaN is not considered a number
  return typeof value === 'number' && !isNaN(value);
};

export default function(input) {
  //The input will always be a string
  //So we convert it with '+'
  //If this fails then isNumber will return false
  var result = isNumber(+input);
  if(input.length === 0) {
    return {
      isValid: false,
      feedbackMessage: 'Cannot be left blank',
      state: 'invalid'
    }
  }
  if(result) {
    return {
      isValid: true,
      feedbackMessage: '',
      state: 'valid'
    }
  }else {
    return {
      isValid: false,
      feedbackMessage: 'Not a number',
      state: 'invalid'
    }
  }
}
