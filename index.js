// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
    return arr.slice(0,2)
}

const returnLastTwoDrivers = function(arr) {
    return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(ride) {
    return function(fare) {
        return fare * ride
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = function(drivers, func) {
    return func(drivers)
}