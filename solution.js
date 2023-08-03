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
// ? function declaration that takes array as parameters
function multiplyArray(arr) {
  // ? initializing a variable to be the total sum of the array
  let total = 1;
  // ?looping thru the aray
  for (let i = 0; i < arr.length; i++) {
    // ? as its looping its multiplying the indexes of array and putting them in the total variable
    total *= arr[i];
  }
  // ?return the total vaiable once the looping is over
  return total;
}

console.log(multiplyArray([4, 7, 2]));

// * 6. Define a function, as a function expression, `numArgs` that returns the number of arguments passed to the function when called.

// ? function expression that takes 3 arguments
const numArg = function (num1, num2, num3) {
  // ? when setting .length to anythin it will retunr the nmber of arguments, inside a array,object,arguments
  return numArg.length;
};

console.log(numArg());

// * 7. Define a function, as a function declaration, `reverseString` that takes a string, reverses the characters, and returns it. For example, `reverseString('rockstar');` would return the string "ratskcor".

function reverseString(str) {
  // ? always need fi there is something new taht comes out it needs to be put in a new variable

  let newString = "";

  // ?  i its set to be the whole lenght og the str and then it takes out one to start counding from the last character , it will keep going until it reaches the last character of the str, and I11 will finish the last missing character

  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
console.log(reverseString("hello"));

// * 8. Define a function, as a function expression, `longestStringInArray` that takes an array of strings as an argument and returns the length of the longest string.

const longestStringInArray = function (arrStr) {
    // ? creating a variable that will hold the value of the longest string
  let longest= 0;
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i].length > longest) {
      longest = arrStr[i].length;
    }
  }
  return longest;
};

console.log(longestStringInArray(["bob", "cat", "Bananana"]));


//*  9. Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].


function stringsLongerThan(arr, num) {
    // ? Create an empty array to store the strings that are longer than 'num'
    let result = [];
  
    // ? Loop through each element in the 'arr' array
    for (let i = 0; i < arr.length; i++) {
      // ? Check if the length of the current string (arr[i]) is greater than 'num'
      if (arr[i].length > num) {
        // ? If the length is greater, add the current string to the 'result' array
        result.push(arr[i]);
      }
    }
  
    // ? After looping through all the elements in 'arr', return the 'result' array
    return result;
  }
  

console.log(stringsLongerThan(["bob", "mark", "cat", "aleks"], 4))