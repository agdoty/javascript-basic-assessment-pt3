/////////////
// Num. 5  //////////////////////////////////////////////////////////
// Create a function called objectLooper that will go through the  //
// given object below and change all keys that start with 'm' to   //
// have a value of "no m&m's for you"                              //
/////////////////////////////////////////////////////////////////////
var candies = {
  mAndm: 'delicious',
  kitkat: 'to die for',
  skittles: 'meh',
  marsbars: 'never tried',
  mugrootbeer: 'not candy... but the best'
};

for(var key in candies){
  if(key.charAt(0) === 'm'){
    console.log(this.key + "  hit")
    candies[key] =  "no m&m's for you";
  }
}

/////////////
// Num. 6  //////////////////////////////////////////////////////////
// Create a fuction called getName that prompts the user for their //
// name, store that name in a var called name. Return "hello"      //
/////////////////////////////////////////////////////////////////////

function getName(){
  var name = window.prompt("what's your name?")
  return "hello"
}

/////////////
// Num. 7  //////////////////////////////////////////////////////////
// Create a function called vowelCounter that uses your getName    //
// function you created in the previous problem to get the         //
// return value, loops through that return value and returns the   //
// number of vowels in that return value. Have I said return value //
// enough?                                                         //
/////////////////////////////////////////////////////////////////////

function vowelCounter(func){
  var str = func.split('');
  var counter = 0;
  for(var i = 0; i < str.length; i++){
    if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
      counter += 1;
    }
  }
  return counter;
}

vowelCounter(getName())
