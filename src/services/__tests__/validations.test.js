// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    test('should return true', () => {
        const result = isValid('12345678');
        expect(result).toBe(true);
    });
    test('should return true', () => {
        const result = isValid('1234567&');
        expect(result).toBe(true);
    });
});


