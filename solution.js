// *  2. Define a function, as a function expression, `maxOfThree` that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

//function expression that takes 3 paramethers as arguments
const maxOfThreeNumbers = function (num1, num2, num3) {
  // ? first created a variable of arrays that hold all the paramethers
  let largestNumber = [num1, num2, num3];
  let largest = num1;
  for (let i = 0; i < largestNumber.length; i++) {
    if (largestNumber[i] > largest) {
      largest = largestNumber[i];
    }
  }
  return largest;
};

console.log(maxOfThreeNumbers(34, 67, 99));

//  * 3. Define a function, as a function declaration, `isCharAVowel` that takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel(char) {
  if (
    char === "a" ||
    char === "e" ||
    char === "o" ||
    char === "i" ||
    char === "u"
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(isCharAVowel("o"));
console.log(isCharAVowel("r"));

// *  4. Define a function, as a function expression, `sumArray` that takes an array of numbers and returns the sum of those numbers. For example, `sumArray([2, 4, 5]);` would return `11`.

//?  Define a function called 'sumArray' that takes an array 'arr' as its parameter
const sumArray = function (arr) {
  // ? Set a variable 'total' to hold the sum of all numbers in the array, initialize it to 0
  let total = 0;

  // ? Loop through the elements of the array using 'for' loop, with index 'i' starting from 0
  // ? Continue the loop as long as 'i' is less than the length of the array 'arr'
  // ? Increment 'i' by 1 in each iteration to move to the next element
  for (let i = 0; i < arr.length; i++) {
    // ? Add the value of the current element 'arr[i]' to the 'total' variable
    total += arr[i];
  }

  // ? After the loop completes, return the final value of 'total', which is the sum of all elements in the array
  return total;
};

console.log(sumArray([34, 56, 7]));

// * 5. Define a function, as a function declaration, `multiplyArray` that takes an array of numbers and returns the product those numbers. For example, `multiplyArray([2, 4, 5]);` would return `40`.
//function declaration that takes array as parameters
function multiplyArray(arr) {
    //initializing a variable to be the total sum of the array
  let total= 1;
  for (let i = 0; i < arr.length; i++) {
    total *= arr[i];
  }

  return total;
}

console.log(multiplyArray([4, 7, 2]));
