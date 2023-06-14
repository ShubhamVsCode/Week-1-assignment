/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  const string = str
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, "");

  let firstHalf = string.substring(0, Math.floor(string.length / 2));

  let secondHalf = string.substring(
    Math.floor(
      (string.length / 2) % 2 === 0 ? string.length / 2 : string.length / 2 + 1
    )
  );

  let reverseSecondHalf = secondHalf.split("").reverse().join("");

  console.log({
    firstHalf,
    reverseSecondHalf,
  });
  return firstHalf === reverseSecondHalf;
}

console.log(isPalindrome("Able, was I ere I saw Elba!"));

module.exports = isPalindrome;
