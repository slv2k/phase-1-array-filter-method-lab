// Code your solution here
function findMatching(array, string) {
    return array.filter(driver => driver === string || driver === string.toLowerCase())
}

function fuzzyMatch(array, string) {
    return array.filter(driver => driver.charAt(0) === string)
}

function matchName(array, string) {
    return array.filter(driverName => driverName.name === string)
}