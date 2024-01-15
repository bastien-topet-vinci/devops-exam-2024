// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    test('should return true or false as the function is defined', () => {
        const result = isValid('');
        expect(result).toBe(false);
    });

    test('should returns false', () => {
        const result = isValid('12345678');
        expect(result).toBe(true);
    });
});


