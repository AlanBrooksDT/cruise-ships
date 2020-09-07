const Ship = require('../src/cruise-ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('Ship constructor', () => {
    test('new instance of ship returns an object', () => {
        const port = new Port("Southampton");
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);
        expect(ship).toBeInstanceOf(Object);
    });
});
describe('check if properties returning', () => {
    test('return number of passengers and starting port', () => {
        const port = new Port("Southampton");
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);
        expect(ship.passengers).toBe(0);
        expect(ship.currentPort).toBe(port);
    });
});
describe('test functionality of the setSail method', () => {
    test('identify port sailing from', () => {
        const fromPort = new Port("Dover");
        const toPort = new Port("Calais");
        const itinerary = new Itinerary([fromPort, toPort]);
        const ship = new Ship(itinerary);
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
    });
    test('set previousPort property to current port', () => {
        const fromPort = new Port("Dover");
        const toPort = new Port("Calais");
        const itinerary = new Itinerary([fromPort, toPort]);
        const ship = new Ship(itinerary);
        ship.setSail();
        expect(ship.previousPort).toBe(fromPort);
    });
});
describe('test to see if ship is able to dock at new port', () => {
    test('dock at new port', () => {
        const fromPort = new Port("Dover");
        const toPort = new Port("Calais");
        const itinerary = new Itinerary([fromPort, toPort]);
        const ship = new Ship(itinerary);
        ship.setSail();
        ship.shipDock();
        expect(ship.currentPort).toBe(toPort);
    });
});
describe('test for properties existing within new ship object', () => {
    test('check if property names exist and values where required', () => {
        const port = new Port("Southampton");
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);
        expect(ship).toHaveProperty('previousPort', null);
    });
});
describe('cannot sail further than the last point in the itinerary', () => {
    test('throws an error if try to sail futher', () => {
        const fromPort = new Port("Dover");
        const toPort = new Port("Calais");
        const itinerary = new Itinerary([fromPort, toPort]);
        const ship = new Ship(itinerary);
        ship.setSail();
        ship.shipDock();
        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    });
})