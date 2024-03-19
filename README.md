# Sandrajones

Sandrajones is a Node.js module for performing calculations related to electrical circuits. It provides functions to calculate total resistance, capacitance, and inductance in both series and parallel circuits.

## Installation

You can install the module via npm: `npm install sandrajones`

## Usage
```javascript
const circuitCalc = require('circuit-calc');

// Example usage
const resistances = [10, 20, 30]; // in ohms
const capacitances = [0.001, 0.002, 0.003]; // in farads
const inductances = [0.1, 0.2, 0.3]; // in henries

console.log("Total resistance in series:", circuitCalc.totalResistanceInSeries(resistances));
console.log("Total resistance in parallel:", circuitCalc.totalResistanceInParallel(resistances));
console.log("Total capacitance in series:", circuitCalc.totalCapacitanceInSeries(capacitances));
console.log("Total capacitance in parallel:", circuitCalc.totalCapacitanceInParallel(capacitances));
console.log("Total inductance in series:", circuitCalc.totalInductanceInSeries(inductances));
console.log("Total inductance in parallel:", circuitCalc.totalInductanceInParallel(inductances));
```

