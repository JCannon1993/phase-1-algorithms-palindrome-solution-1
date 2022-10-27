function isPalindrome(word) {
  const reversedWord = reverse(word)
  return word === reversedWord
}

function reverse(word){
const wordArray = word.split("")
console.log('initial split into array:' , wordArray)
const reversedWordArray = wordArray.reverse()
console.log('reversing array :', reversedWordArray)
const reversedWord = reversedWordArray.join("")
console.log('reversed word joining:', reversedWord)
return reversedWord
}

  // Add your pseudocode here

/*
  Add written explanation of your solution here
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
