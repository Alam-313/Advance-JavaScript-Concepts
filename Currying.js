                                                   It is defined as a function which takes an argument and return a function which expects another argument.


//-------------------------------FINITE CURRYING------------------------//
To find the sum of (2)(3)(4) using currying

function sum(a){
  return function(b){
    return function (c){
      return a+b+c;

    }
  }

}
console.log(sum(2)(3)(4)) // OUTPUT WILLL BE 9

now we may encountere problem like adding (2)(3)(6)(12)(23)(19) and so on so it become difficult to solve this using finite currying 
In order to solve this we have to use infinite currying problem solving method as shown below.

function sum(a){
  return function (b){
    if(b) return sum(a+b)
    return a;

  }

}
console.log(sum(2)(3)(6)(12)(23)(19)()) //OUTPUT WILL BE 65
