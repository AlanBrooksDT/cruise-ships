class Port {
    constructor(name) {
       this.name = name;
       this.shipsInPort = [];
    };

addShip(ship) {
    this.shipsInPort.push(ship);
    };

removeShip(ship) {
    const removeShipIndex = this.shipsInPort.indexOf(ship);
    this.shipsInPort.splice(removeShipIndex, 1);
    };
};
module.exports = Port;