const Ship = require('../src/cruise-ship');

describe('Ship constructor', () => {
  describe('singular port and itinerary', () => {
      let port;
      let itinerary;
      let ship;

    beforeEach(() => {
        port = {
            removeShip: jest.fn(),
            addShip: jest.fn(),
          };
        itinerary = {
            ports: [port]
        }

        ship = new Ship(itinerary);
     });
        
    test('new instance of ship returns an object', () => {
        expect(ship).toBeInstanceOf(Object);
    });
    test('return number of passengers and starting port', () => {
        expect(ship.passengers).toBe(0);
        expect(port.addShip).toHaveBeenCalledWith(ship);
    });
    test('check if property names exist and values where required', () => {
        expect(ship).toHaveProperty('previousPort', null);
    });
  });
});  
describe('multiples ports initialised', () => {
  describe('test functionality of the setSail method', () => {
    let dover;
    let calais; 
    let itinerary;
    let ship; 
    let port;
                
    beforeEach(() => {
        port = {
            removeShip: jest.fn(),
            addShip: jest.fn(),
          };
      
        dover = {
          ...port,
          name: 'Dover',
          ships: []
        };
      
        calais = {
          ...port,
          name: 'Calais',
          ships: []
        };
      
        itinerary = {
            ports: [dover, calais]
          };

        ship = new Ship(itinerary);
      });
    test('add ship name to starting port at ship creation', () => {
        expect(port.addShip).toHaveBeenCalledWith(ship);
    });
    test('can set sail', () => {
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
        expect(dover.removeShip).toHaveBeenCalledWith(ship);
    });
    test('set previousPort property to current port', () => {
        ship.setSail();
        expect(ship.previousPort).toBe(dover);
    });
    test('test to see if ship is able to dock at new port', () => {
        ship.setSail();
        ship.shipDock();
        expect(ship.currentPort).toBe(calais);
        expect(ship.currentPort.addShip).toHaveBeenCalledWith(ship);
    });
    test('throws an error if try to sail futher than last itinerary port', () => {
        ship.setSail();
        ship.shipDock();
        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    });
  });
});