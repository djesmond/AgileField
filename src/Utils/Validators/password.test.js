import passwordValidator from './password';

const returnStateBase = {
  isValid: false,
  state: 'base',
};
const returnStateStrong = {
  isValid: true,
  state: 'strong',
};

describe('Validating password input', () => {
  it('The password isnt long enough', () => {
    const result = passwordValidator({ value: '' });
    expect(result).toMatchObject(returnStateBase);
  });
  it('The password is very long enough', () => {
    const result = passwordValidator({ value: 'aaaaaaaaaaaaaaaa' });
    expect(result).toMatchObject(returnStateStrong);
  });
});
