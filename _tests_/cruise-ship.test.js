const Ship = require('../src/cruise-ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('Ship constructor', () => {
  describe('singular port and itinerary', () => {
      let port;
      let itinerary;
      let ship;

      beforeEach(() => {
        port = new Port("Southampton");
        itinerary = new Itinerary([port]);
        ship = new Ship(itinerary);
      })
    test('new instance of ship returns an object', () => {
        expect(ship).toBeInstanceOf(Object);
    });
    test('return number of passengers and starting port', () => {
        expect(ship.passengers).toBe(0);
        expect(ship.currentPort).toBe(port);
    });
    test('check if property names exist and values where required', () => {
        expect(ship).toHaveProperty('previousPort', null);
    });
    test('add ship name to starting port at ship creation', () => {
        expect(port.shipsInPort).toContain(ship);
    });
  });  
});
describe('multiples ports initialised', () => {
    describe('test functionality of the setSail method', () => {
        let dover;
        let calais; 
        let itinerary;
        let ship;

        beforeEach(() => {
            dover = new Port("Dover");
            calais = new Port("Calais");
            itinerary = new Itinerary([dover, calais]);
            ship = new Ship(itinerary);
    });
    test('identify port sailing from', () => {
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
        expect(dover.shipsInPort).not.toContain(ship);
    });
    test('set previousPort property to current port', () => {
        ship.setSail();
        expect(ship.previousPort).toBe(dover);
    });
    test('test to see if ship is able to dock at new port', () => {
        ship.setSail();
        ship.shipDock();
        expect(ship.currentPort).toBe(calais);
        expect(calais.shipsInPort).toContain(ship);
    });
    test('throws an error if try to sail futher than last itinerary port', () => {
        ship.setSail();
        ship.shipDock();
        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    });
    });
});