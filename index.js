// Code your solution in this file!
const driversArray = ['Bob', 'Sally', 'Jenny', 'Craig', 'Arron', 'Atkins']

// Return an array of the first two drivers
const returnFirstTwoDrivers = (drivers => {
    let arr = []
    arr.push(drivers[0], drivers[1])
    return arr
})

// Returns an array of the last two drivers
const returnLastTwoDrivers = (drivers => {
   return drivers.slice(-2)   
})

// Array containing the first two functions created
const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ]

const createFareMultiplier = function(num){
    return ((fare) => fare * num)
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, chooseDriver){
    return chooseDriver(drivers)
}
console.log(selectDifferentDrivers(driversArray, returnLastTwoDrivers))