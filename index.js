function reverse(word){
  return word.split("").reverse().join("");
}

function isPalindrome(word) {

 const reverseWord = reverse(word);

  if(word===reverseWord){
    return true;
  }
    return false;

}

/* 
  Add your pseudocode here
  create an array from the string
  const wordArray=word.split("")
  reverse the array
  const reverseArray=wordArray.reverse()
  join the reverse array
  const reverseWord=reverseArray.join("")
*/

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
