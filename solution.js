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
  let longest = 0;
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

console.log(stringsLongerThan(["bob", "mark", "cat", "aleks"], 4));

// *10. Write a JavaScript function that accepts an argument and returns the type.
//* Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function checkValue(argument) {
  return typeof argument;
}

console.log(checkValue({}));
console.log(checkValue(true));
console.log(checkValue(function () {}));
console.log(checkValue(3));
console.log(checkValue(""));
console.log(checkValue());

//*11. Write a JavaScript function which returns the n rows by n columns identity matrix.

// Function to create an n by n identity matrix
function createIdentityMatrix(n) {
  // Initialize an empty matrix
  let matrix = [];
  // Loop through each row of the matrix
  for (let i = 0; i < n; i++) {
    // Initialize an empty array for the current row
    let rows = [];
    // Loop through each column of the current row
    for (let j = 0; j < n; j++) {
      // Check if the current position is on the diagonal
      if (i === j) {
        // If on the diagonal, push 1 to the current row
        rows.push(1);
      } else {
        // If not on the diagonal, push 0 to the current row
        rows.push(0);
      }
      // Push the current row to the matrix
      matrix.push(rows);
    }
    // Return the matrix (Note: this should be outside the loop)
    return matrix;
  }
}

// Print the result of the function
console.log(createIdentityMatrix(4));


//* 12 Write a JavaScript function to get the function name.

function abc(){

}


// Function to get the name of the function
function getFunctionName(func) {
  return func.name;
}

// Testing the function
console.log(getFunctionName(abc));

// * 13. The marketing team is spending way too much time typing in hashtags.
// * Let's help them with our own Hashtag Generator!

//*  Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag(str) {
  // final result will be set here
  let result = "";

  // check if it's an empty string or the length is greater than 140
  if (str === "" || str.length > 140) {
    return false;
  } else {
    // add hashtag to the beginning of the string
    let modifiedStr = "#" + str;

    // capitalize the first letter of each word
    for (let i = 0; i < modifiedStr.length; i++) {
      if (i === 0 || modifiedStr[i - 1] === " ") {
        modifiedStr =
          modifiedStr.substring(0, i) +
          modifiedStr[i].toUpperCase() +
          modifiedStr.substring(i + 1);
      }
    }

    // trim all the white space in the string
    modifiedStr = modifiedStr.trim();

    // set the string to result
    result = modifiedStr;

    // return result
    return result;
  }
}


console.log(generateHashtag(""), false, "Expected an empty string to return false")
console.log(generateHashtag(" ".repeat(200), false, "Still an empty string"))
console.log(generateHashtag("Do We have A Hashtag"), "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
console.log(generateHashtag("Codewars"), "#Codewars", "Should handle a single word.")
console.log(generateHashtag("Codewars Is Nice"), "#CodewarsIsNice", "Should remove spaces.")
console.log(generateHashtag(("Codewars is nice"), "#CodewarsIsNice", "Should capitalize first letters of words."))
console.log(generateHashtag("code" + " ".repeat(140) + "wars"), "#CodeWars")
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"), false, "Should return false if the final word is longer than 140 chars.")
console.log(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138), "Should work")
console.log(generateHashtag("a".repeat(140)), false, "Too long")



//* 14. Given a string of words, you need to find the highest scoring word.

//* Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

//* For example, the score of abad is 8 (1 + 2 + 1 + 4).

//* You need to return the highest scoring word as a string.

//* If two words score the same, return the word that appears earliest in the original string.

//* All letters will be lowercase and all inputs will be valid.


function high(x) {
  // Split the string x into an array of words using space as the delimiter and store it in the variable words
  const words = x.split(' ');
  // Initialize variables highestWord and highestScore to keep track of the word with the highest score and its score
  let highestWord = '';
  let highestScore = 0;

  // Iterate through each word in the words array
  for (let i = 0; i < words.length; i++) {
    // Initialize the currentScore variable to keep track of the score of the current word
    let currentScore = 0;
    // Iterate through each character in the current word
    for (let j = 0; j < words[i].length; j++) {
      // Calculate the score of the current character and add it to the currentScore
      currentScore += words[i].charCodeAt(j) - 96;
    }
    // Check if the currentScore is greater than the highestScore
    // If it is, update the highestScore and highestWord to the current score and word
    if (currentScore > highestScore) {
      highestScore = currentScore;
      highestWord = words[i];
    }
  }
  // Return the word with the highest score along with the score itself
  return highestWord + " " + highestScore;
}


console.log(high("aaa bbb ccc")); 
console.log(high("zodiac zone")); 
console.log(high("hello world")); 
console.log(high("alphabet soup")); 
console.log(high("programming is fun"));

// * 15. Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

function reverseWords(str) {
  let words = str.split(' ');

  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      words[i] = words[i].split('').reverse().join('');
    }
  }

  return words.join(' ');
}


console.log(reverseWords("Welcome")); 
console.log(reverseWords("Hey fellow warriors"));
console.log(reverseWords("This is a test")); 
console.log(reverseWords("This is another test"));
console.log(reverseWords("Coding is fun")); 



// * 16. You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

