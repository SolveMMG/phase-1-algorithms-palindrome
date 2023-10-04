function isPalindrome(word) {
  const lowerCase = word.toLowerCase();
  const reversed = lowerCase.split("").reverse().join("");
  return reversed === word;
  // Write your algorithm here
}

/* 
  Add your pseudocode here
  it takes a word 
  reverses it 
  then tests if it is equal to the word inputed
*/

/*
  Add written explanation of your solution here
  The function takes a word and reverses it to test if the word
  is a palindrome.
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
