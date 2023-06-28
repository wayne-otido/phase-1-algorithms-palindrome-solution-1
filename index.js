function isPalindrome(word) {
  // Write your algorithm here
  reversedWord = word.split("").reverse().join("")
  return word === reversedWord
}

/* Pseudocode:
  input word
  if word = reversedWord,
    return true
  else,
    return false
*/

/* Explanation:
  (.split()) The word(string) passed into the function is split into an array of its individual characters.
  (.reverse()) The order of the array is then reversed. i.e the last character becomes the first and vice versa.
  (.join()) The reversed array is joined back together to make a new string.
  (===) the reversed word is tested against the initial word. if it is strictly equal to the initial word, true is returned. otherwise, false is
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
