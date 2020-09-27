// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => {
  return arr.slice(0,2)
}

const returnLastTwoDrivers = (arr) => {
  return arr.slice(arr.length - 2)
}

const createFareMultiplier = int => {
  return function innerFunction(fare) {
    return int * fare
  }
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arr, func) {
  return func(arr)
}