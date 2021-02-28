
const formatVolumeIconPath = require('../assets/scripts/main');

describe('formatVolumeIconPath test', () => {
    test('greater than 66', () => {
        expect(formatVolumeIconPath(70)).toMatch('3');
    });

    test('greater than 33', () => {
        expect(formatVolumeIconPath(50)).toMatch('2');
    });

    test('greater than 0', () => {
        expect(formatVolumeIconPath(5)).toMatch('1');
    });

    test('0 or less', () => {
        expect(formatVolumeIconPath(0)).toMatch('0');
    });
});
