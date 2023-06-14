/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  const map1 = new Map();
  const map2 = new Map();

  let string1 = str1.trim().toLowerCase();
  let string2 = str2.trim().toLowerCase();

  if (string1.length !== string2.length) {
    return false;
  }

  for (let i = 0; i < string1.length; i++) {
    let count1 = map1.get(string1[i]) || 0;
    map1.set(string1[i], count1 + 1);

    let count2 = map2.get(string2[i]) || 0;
    map2.set(string2[i], count2 + 1);
  }

  let result = true;

  map1.forEach((value, key) => {
    if (value !== map2.get(key)) {
      result = false;
    }
  });

  return result;

  // let string1 = str1.trim().toLowerCase();
  // let string2 = str2.trim().toLowerCase();

  // if (string1.length !== string2.length) {
  //   return false;
  // }

  // return (
  //   string1.split("").sort().join("") === string2.split("").sort().join("")
  // );
}

isAnagram("shubham", "mabhshu");

module.exports = isAnagram;
