// Code your solution in this file
function findMatching(array, name){
  return array.filter( function(item){ return item.toLowerCase() === name.toLowerCase() } )
}

function fuzzyMatch(drivers, letters){
  return drivers.filter(function(driver){return driver.substring(0, letters.length) === letters})
}

function matchName(drivers, name){
  return drivers.filter(function(driver) {return driver.name.toLowerCase() === name.toLowerCase()})
}
