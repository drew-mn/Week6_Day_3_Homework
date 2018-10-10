const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
return this.journeys.map(journey => journey.startLocation);
};


Traveller.prototype.getJourneyEndLocations = function () {
return this.journeys.map(journey => journey.endLocation);
};

Traveller.prototype.getModesOfTransport = function () {
return this.journeys.map(modes => modes.transport);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
return this.journeys.filter(journey => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
return this.journeys.filter(journey => journey.distance > minDistance)
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
// assign two parameters (accumulator, currentValue)
// accumulator =  total | currentValue = journey
  return this.journeys.reduce((totalDistance, journey) => {
    // return accumulator(running total) += distance traveled
    return totalDistance += journey.distance;
    // add a second argument of 0 after callback to ensure distances are calculated from starting point of 0.
  },0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
};


module.exports = Traveller;
