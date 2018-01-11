
//1. Write a function called numSorter that takes an array
//of integers as an argument. Return an array of integers where every integer has been squared.

//2. Write a function called findNum that takes an array of numbers and returns one number.
//This number is the first occurance of a number that is divisible by both seven and nine.
//If no number is found, then return null.

//3. Write a function called keepLarge that takes an array of integers and returns an array
// of only the integers that are greater or equal to 100.

//4. Write a function called removeNum that takes an array of numbers and an integer.
//The function removes the number from the array and returns the resulting array.
const array=[1,2,3,4,5,6,7,8];
function numSorter(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * array[i];
  }
  return array;
}
function findNum(array){
  for (let i = 0; i < array.length; i++) {

  }
}
function keepLarge(array){
  for (let i = 0; i < array.length; i++) {

  }
}
function removeNum(array){
  for (let i = 0; i < array.length; i++) {

  }
}
console.log(numSorter(array));
