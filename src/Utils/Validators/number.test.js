import numberValidator from './number';
const values = [10, "foo", "20", 3.14, "3.14"];
const returnStateInvalid = {
  isValid: false,
  state: 'invalid'
};
const returnStateValid = {
  isValid: true,
  state: 'valid'
};
describe('Validate Number', () => {
  it('should check if string is a number', () => {
    expect(numberValidator(values[0])).toMatchObject(returnStateValid);
    expect(numberValidator(values[1])).toMatchObject(returnStateInvalid);
    expect(numberValidator(values[2])).toMatchObject(returnStateValid);
    expect(numberValidator(values[3])).toMatchObject(returnStateValid);
    expect(numberValidator(values[4])).toMatchObject(returnStateValid);
  });
});
