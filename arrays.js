var chocolateBars = ['snickers', `hundred grand`, `kitkat`, `skittles`]
function addElementToBeginningOfArray() {
  console.log(chocolateBars)
}
function destructivelyAddElementToBeginningOfArray() {
  console.log(chocolateBars.unshift)
}
function addElementToEndOfArray() {
  console.log(chocolateBars)
}
function destructivelyAddElementToEndOfArray() {
  console.log(chocolateBars.shift)
}
function accessElementInArray() {
  return chocolateBars(0)
}