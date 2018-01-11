
//1. Write a function called numSorter that takes an array
//of integers as an argument. Return an array of integers where every integer has been squared.

//2. Write a function called findNum that takes an array of numbers and returns one number.
//This number is the first occurance of a number that is divisible by both seven and nine.
//If no number is found, then return null.

//3. Write a function called keepLarge that takes an array of integers and returns an array
// of only the integers that are greater or equal to 100.

//4. Write a function called removeNum that takes an array of numbers and an integer.
//The function removes the number from the array and returns the resulting array.

//sample array
const array=[63,2,3,4,5,6,751,8];
//question 1
function numSorter(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * array[i];
  }
  return array;
}
//question 2
function findNum(array){
  for (let i = 0; i < array.length; i++) {
    if(array[i]%7 ==0&& array[i]%9 ==0){
      return array[i];
    }
    else{
      return null;
    }
  }

}
//question 3
function keepLarge(array){
  for (let i = 0; i < array.length; i++) {
    if(array[i] >=100){
      console.log(array[i]);
    }
  }


}
//question 4
function removeNum(array){
  for (let i = 0; i < array.length; i++) {

  }
}

console.log(keepLarge(array));
