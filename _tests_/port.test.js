const Port = require('../src/port');
const Ship = require('../src/cruise-ship');

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
describe('able to add a ship to the port', () => {
    test('add ship to the port', () => {
        const port = new Port('Dover');
        const ship = {};

        port.addShip(ship);
        expect(port.shipsInPort).toContain(ship);
    });
});
describe('able to remove a ship from the port', () => {
    test('remove ship from the port', () => {
        const port = new Port('Dover');
        const maryCeleste = {};
        const titanic = {};
        
        port.addShip(titanic);
        port.addShip(maryCeleste);
        port.removeShip(titanic);

        expect(port.shipsInPort).toEqual([maryCeleste]);
    });
});