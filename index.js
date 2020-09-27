
const returnFirstTwoDrivers = function(driverArray) {
    let firstTwoDrviers

    return firstTwoDrviers = driverArray.slice(0, 2)
}

const returnLastTwoDrivers = function(driverArray) {
    let lastTwoDrivers

    return lastTwoDrivers = driverArray.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(integer) {
    return function(fare) {
        return fare * integer
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(driverArray, driverFunction) {
    return driverFunction(driverArray)
}