const Ship = require('../src/cruise-ship');

describe('Ship constructor', () => {
    test('new instance of ship returns an object', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
});
describe('check if properties returning', () => {
    test('return number of passengers and starting port', () => {
        const ship = new Ship("Southampton");
        expect(ship.passengers).toBe(0);
        expect(ship.startingPort).toBe("Southampton");
    });
});
describe('set the passenger to sail from port', () => {
    test('identify port sailing from', () => {
        const ship = new Ship("Dover");
        ship.setSail();
        expect(ship.startingPort).toBeFalsy();
    })
})