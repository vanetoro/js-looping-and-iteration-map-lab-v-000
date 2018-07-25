// Code your solution in this file.
function lowerCaseDrivers(arr){
    return arr.map(function(name) {return name.toLowerCase() })
}


function nameToAttributes(arr){
  return arr.map(function(name){
        return {firstName: name.split(' ')[0],
                lastName: name.split(' ')[1]}
  })
}
