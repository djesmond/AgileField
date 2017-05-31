export default function (input) {
  if (input.length > 0) {
    return {
      isValid: true,
      message: '',
      state: 'valid',
    };
  } else {
    return {
      isValid: false,
      message: 'Empty string not allowed',
      state: 'invalid',
    };
  }
}
