export default function (input) {
  if (input.length >= 4 && input.length < 8) {
    return {
      isValid: true,
      message: 'Weak',
      state: 'weak',
    };
  } else if (input.length >= 8 && input.length < 16) {
    return {
      isValid: true,
      message: 'Passable',
      state: 'passable',
    };
  } else if (input.length >= 16) {
    return {
      isValid: true,
      message: 'Strong',
      state: 'strong',
    };
  } else {
    return {
      isValid: false,
      message: 'Invalid',
      state: 'base',
    };
  }
}
