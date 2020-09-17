const Itinerary = require('../src/itinerary'); 

describe('checks for an itinerary object', () => {
    test('check for object instance', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });
    test('check itinerary instance has a ports property', () => {
        expect(new Itinerary()).toHaveProperty('ports');
    });
    test('checks that ports property receives values', () =>{
        const port = jest.fn();
        const port2 = jest.fn();
        const itinerary = new Itinerary([port, port2]);
        expect(itinerary.ports).toEqual([port, port2]);
    });
});