// Code your solution in this file!
const returnFirstTwoDrivers = function(arrOfDrivers){
    const firstTwo = [];
    firstTwo.push(arrOfDrivers[0]);
    firstTwo.push(arrOfDrivers[1])
    return firstTwo

}

const returnLastTwoDrivers = function(arrOfDrivers){
    const lastTwo = []
    lastTwo.push(arrOfDrivers[arrOfDrivers.length - 2])
    lastTwo.push(arrOfDrivers[arrOfDrivers.length - 1])
    return lastTwo
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (int) => {
    return function(fare){
        return fare * int
    }
}

const fareDoubler = (fare) => {
    const doubledFare = createFareMultiplier(2)(fare)
    return doubledFare
}

const fareTripler = function(fare){
    const tripledFare = createFareMultiplier(3)(fare);
    return tripledFare
}

const selectDifferentDrivers = (driversArr, funct) => {
    return funct(driversArr)
}