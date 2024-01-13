/* 
  String: Is Palindrome

  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
  
  Do not ignore spaces, punctuation and capitalization
 */
  const str1 = "a x a";
  const expected1 = true;
  
  const str2 = "racecar";
  const expected2 = true;
  
  const str3 = "Dud";
  const expected3 = false;
  
  const str4 = "oho!";
  const expected4 = false;
  /**
   * Determines if the given str is a palindrome (same forwards and backwards).
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str
   * @returns {boolean} Whether the given str is a palindrome or not.
   */
  function isPalindrome(str) {
    let compare_str = ""
    // a loop going backward to store it in an empty string
    for(var j = str.length-1; j >= 0; j--){
        compare_str += str[j]
    }
    if(str === compare_str){//compare original str to the compare_str(moving backward)
        return true
    }
    else{
        return false
    }
  }
// console.log(isPalindrome(str4))
console.log(isPalindrome(str1))
console.log(isPalindrome(str2))
console.log(isPalindrome(str3))
console.log(isPalindrome(str4))
console.log(isPalindrome("mom"))
console.log(isPalindrome("TENET"))
// console.log(isPalindrome("a man a plan a canal panama"))
// console.log(isPalindrome("do geese see god"))
