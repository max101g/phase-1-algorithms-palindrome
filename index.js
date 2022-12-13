function isPalindrome(word) {
  // Write your algorithm here
   const reverseWord = reverseString(word);

   if(word === reverseWord){
    return true;
   }else{
    return false;
   }
}

function reverseString(word){
  const wordArray = word.split("");
  const reverseWordArray = wordArray.reverse();
  const reverseWord = reverseWordArray.join("");

  return reverseWord;
}
/* 
  Add your pseudocode here
   If the input string is the same after I reverse it, I should return true
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"))

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"))

  console.log("Expecting: true");
  console.log("=>", isPalindrome("ab"))

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"))  

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

}

module.exports = isPalindrome;