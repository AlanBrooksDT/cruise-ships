const Port = require('../src/port');

describe('port constructor', () => {
  describe('ports and ships', () =>{
      let port;
      let ship;
      let maryCeleste;
      let titanic;

      beforeEach(() => {
        port = new Port('Dover');
        maryCeleste = jest.fn();
        titanic = jest.fn();
        ship = jest.fn();
      });
    test('new instance of port returns an object', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    test('new port contains a name property', () => {
        expect(new Port()).toHaveProperty('name');
    });
    test('can add ship to the port', () => {
        port.addShip(ship);
        expect(port.shipsInPort).toContain(ship);
    });
    test('remove ship from the port', () => {   
        port.addShip(titanic);
        port.addShip(maryCeleste);
        port.removeShip(titanic);

        expect(port.shipsInPort).toEqual([maryCeleste]);
    });
  });
});
