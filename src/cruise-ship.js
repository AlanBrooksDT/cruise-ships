class Ship {
    constructor(itinerary) {
        this.passengers = 0;
        this.itinerary = itinerary;
        this.currentPort = itinerary.ports[0];
        this.previousPort = null;
}

setSail() {
    this.previousPort = this.currentPort;
    this.currentPort = null;
};
shipDock() {
    const itinerary = this.itinerary;
    const previousPortIndex = itinerary.ports.indexOf(this.previousPort);

    this.currentPort = itinerary.ports[previousPortIndex + 1];
};
}

module.exports = Ship;