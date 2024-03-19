const math = require('mathjs');
const _ = require('lodash');

// Function to calculate the total resistance in a series circuit
function totalResistanceInSeries(resistances) {
    return _.sum(resistances);
}

// Function to calculate the total resistance in a parallel circuit
function totalResistanceInParallel(resistances) {
    return math.round(1 / _.sum(resistances.map(r => 1 / r)), 2);
}

// Function to calculate the total capacitance in a series circuit
function totalCapacitanceInSeries(capacitances) {
    return _.sum(capacitances);
}

// Function to calculate the total capacitance in a parallel circuit
function totalCapacitanceInParallel(capacitances) {
    return math.round(_.sum(capacitances), 2);
}

// Function to calculate the total inductance in a series circuit
function totalInductanceInSeries(inductances) {
    return _.sum(inductances);
}

// Function to calculate the total inductance in a parallel circuit
function totalInductanceInParallel(inductances) {
    return math.round(1 / _.sum(inductances.map(l => 1 / l)), 2);
}

module.exports = {
    totalResistanceInSeries,
    totalResistanceInParallel,
    totalCapacitanceInSeries,
    totalCapacitanceInParallel,
    totalInductanceInSeries,
    totalInductanceInParallel
};
