/* 
  Recursively reverse a string
  helpful methods:

  str.slice(beginIndex[, endIndex])
  returns a new string from beginIndex to endIndex exclusive
*/

const str1 = "abc";
const expected1 = "cba";

const str2 = "";
const expected2 = "";

/**
 * Recursively reverses a string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given str reversed.
 */
function reverseStr(str) {
    if ( str === ""){
        return ""
    }
    // //slice the remaining string except the first character 
    // let remainChar = str.slice(1)
    
    // return reverseStr(remainChar) + str[0]

    //second try
    let charTillLast = str.slice(0,str.length - 1)
    // console.log(charTillLast)
    return str[str.length -1] + reverseStr(charTillLast)
}

/*****************************************************************************/
console.log(reverseStr(str1))
// console.log(reverseStr(str2))
// console.log(reverseStr("abcdef"))