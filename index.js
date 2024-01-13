function isPalindrome(word) {
  // Convert the word to lowercase to make the comparison case-insensitive
  const lowercasedWord = word.toLowerCase();
  
  // Initialize two pointers, one at the beginning and one at the end of the word
  let start = 0;
  let end = lowercasedWord.length - 1;

  // Iterate until the pointers meet in the middle
  while (start < end) {
    // If the characters at the pointers are not equal, the word is not a palindrome
    if (lowercasedWord[start] !== lowercasedWord[end]) {
      return false;
    }

    // Move the pointers towards the center
    start++;
    end--;
  }

  // If the loop completes without returning false, the word is a palindrome
  return true;
}

/* 
  Pseudocode:
  1. Convert the input word to lowercase.
  2. Initialize two pointers, `start` at the beginning and `end` at the end of the word.
  3. Iterate while `start` is less than `end`.
    a. If characters at `start` and `end` are not equal, return false (not a palindrome).
    b. Move `start` and `end` towards the center.
  4. If the loop completes without returning false, the word is a palindrome, return true.

  Explanation:
  - The function compares characters from the start and end of the word, moving towards the center.
  - If at any point the characters are not equal, the word is not a palindrome.
  - If the loop completes without returning false, the word is a palindrome.
  - The comparison is case-insensitive to consider words like "Racecar" as palindromes.

  You can run the provided tests using `node index.js` to verify the correctness of the implementation.
*/

// Custom tests
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
