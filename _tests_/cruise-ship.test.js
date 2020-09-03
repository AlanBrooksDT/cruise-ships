const Ship = require('../src/cruise-ship');
const Port = require('../src/port');

describe('Ship constructor', () => {
    test('new instance of ship returns an object', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
});
describe('check if properties returning', () => {
    test('return number of passengers and starting port', () => {
        const port = new Port("Southampton")
        const ship = new Ship(port);
        expect(ship.passengers).toBe(0);
        expect(ship.currentPort).toBe(port);
    });
});
describe('set the passenger to sail from port', () => {
    test('identify port sailing from', () => {
        const port = new Port("Dover");
        const ship = new Ship(port);
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
    });
});
describe('test to see if ship is able to dock at new port', () => {
    test('dock at new port', () => {
        const fromPort = new Port("Dover");
        const ship = new Ship(fromPort);
        ship.shipDock("Calais");
        expect(ship.currentPort).toBe("Calais");
    })
})