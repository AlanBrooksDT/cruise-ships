const Port = require('../src/port');

describe('port constructor', () => {
    test('new instance of port returns an object', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
});
describe('port has a name property', () => {
    test('new port contains a name property', () => {
        expect(new Port()).toHaveProperty('name');
    });
});