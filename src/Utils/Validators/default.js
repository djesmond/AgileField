export default function (state) {
  if (state.value.length > 0) {
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
