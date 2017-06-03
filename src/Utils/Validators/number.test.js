import numberValidator from './number';

const values = [10, 'foo', '20', 3.14, '3.14', -1, '-42'];
const returnStateInvalid = {
  isValid: false,
  state: 'invalid',
};
const returnStateValid = {
  isValid: true,
  state: 'valid',
};
describe('Validate Number', () => {
  it('should check if string is a number', () => {
    const validator = numberValidator(0, 100);
    expect(validator({ value: values[0] })).toMatchObject(returnStateValid);
    expect(validator({ value: values[1] })).toMatchObject(returnStateInvalid);
    expect(validator({ value: values[2] })).toMatchObject(returnStateValid);
    expect(validator({ value: values[3] })).toMatchObject(returnStateValid);
    expect(validator({ value: values[4] })).toMatchObject(returnStateValid);
    expect(validator({ value: values[5] })).toMatchObject(returnStateInvalid);
    expect(validator({ value: values[6] })).toMatchObject(returnStateInvalid);
  });
});
