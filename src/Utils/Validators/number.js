function isNumber(value) {
  // NaN is not considered a number
  return typeof value === 'number' && !isNaN(value);
}

export default function (min, max) {
  // We wrap the actual validator in a high order function
  // To allow us to parse addtional parameters to our validator
  // This is done with closures
  // validator(input) has access to min and max
  function validator(state) {
    // The input will always be a string
    // So we convert it with '+'
    // If this fails then isNumber will return false
    const inputAsNumber = +state.value;
    const result = isNumber(inputAsNumber);
    // Check if input is empty string
    if (state.value.length === 0) {
      return {
        isValid: false,
        message: 'Cannot be left blank',
        state: 'invalid',
      };
    }
    // Check if input is a number
    if (result) {
      // Input must follow constraints if they are provided
      // If not then all numbers are valid
      if (inputAsNumber < min) {
        return {
          isValid: false,
          message: `Number must be higher than ${min}`,
          state: 'invalid',
        };
      } else if (inputAsNumber > max) {
        return {
          isValid: false,
          message: `Number must be lower than ${max}`,
          state: 'invalid',
        };
      } else {
        return {
          isValid: true,
          message: '',
          state: 'valid',
        };
      }
    } else {
      return {
        isValid: false,
        message: 'Not a number',
        state: 'invalid',
      };
    }
  }
  return validator;
}
