// Code your solution in this file!
// Function to return the first two drivers from an array
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// Function to return the last two drivers from an array
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// Array containing the two selection functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Function that creates a fare multiplier
const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
};

// Fare multiplier functions
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

// Function to select different drivers based on a given function
const selectDifferentDrivers = function(arrayOfDrivers, selectingFunction) {
  return selectingFunction(arrayOfDrivers);
};

// Example usage:
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); // Output: ['Antonia', 'Nuru']
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); // Output: ['Amari', 'Mo']

console.log(fareDoubler(10)); // Output: 20
console.log(fareTripler(12)); // Output: 36

console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers)); // Output: ['Antonia', 'Nuru']
console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers)); // Output: ['Amari', 'Mo']