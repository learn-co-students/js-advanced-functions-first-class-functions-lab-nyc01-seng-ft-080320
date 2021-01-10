const returnFirstTwoDrivers = function(driverArray) {
    return driverArray.slice(0,2)
}

const returnLastTwoDrivers = function(driverArray) {
    return driverArray.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(int) {
    return function(fare) {
        return fare * int
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(driverArray, selectDrivers) {
    return selectDrivers(driverArray)
}