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

