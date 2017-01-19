import defaultValidator from './default';

const returnStateInvalid = {
  isValid: false,
  state: 'invalid'
};
const returnStateValid = {
  isValid: true,
  state: 'valid'
};

describe('Validating default validator', () => {
    it('The input is an empty string', () => {
        const result = defaultValidator('');
        expect(result).toMatchObject(returnStateInvalid);
    });
    it('The input is atleast 1 character', () => {
        const result = defaultValidator('a');
        expect(result).toMatchObject(returnStateValid);
    });
});
