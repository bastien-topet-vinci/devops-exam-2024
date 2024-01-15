// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    test('should return true', () => {
        const result = isValid('1&345678');
        expect(result).toBe(true);
    });
    test('should return true', () => {
        const result = isValid('1234567&');
        expect(result).toBe(true);
    });
    test('should return false', () => {
        const result = isValid('123');
        expect(result).toBe(false);
    });
    test('should return false', () => {
        const result = isValid('KidTaluva&');
        expect(result).toBe(false);
    });
    test('should return true', () => {
        const result = isValid('KidTaluva&1');
        expect(result).toBe(true);
    });
});


