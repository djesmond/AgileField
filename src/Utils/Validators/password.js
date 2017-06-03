export default function (state) {
  if (state.value.length >= 4 && state.value.length < 8) {
    return {
      isValid: true,
      message: 'Weak',
      state: 'weak',
    };
  } else if (state.value.length >= 8 && state.value.length < 16) {
    return {
      isValid: true,
      message: 'Passable',
      state: 'passable',
    };
  } else if (state.value.length >= 16) {
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
