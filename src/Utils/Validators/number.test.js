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
    expect(validator(values[0])).toMatchObject(returnStateValid);
    expect(validator(values[1])).toMatchObject(returnStateInvalid);
    expect(validator(values[2])).toMatchObject(returnStateValid);
    expect(validator(values[3])).toMatchObject(returnStateValid);
    expect(validator(values[4])).toMatchObject(returnStateValid);
    expect(validator(values[5])).toMatchObject(returnStateInvalid);
    expect(validator(values[6])).toMatchObject(returnStateInvalid);
  });
});
