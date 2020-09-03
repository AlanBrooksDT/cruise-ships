class Ship {
    constructor(portName) {
    this.passengers = 0;
    this.currentPort = portName;
}

setSail() {
    this.currentPort = "";
};
shipDock(dockingPort) {
    this.currentPort = dockingPort;
};
}

module.exports = Ship;