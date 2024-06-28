/* 
  Given a string containing space separated words
  Reverse each word in the string.

  If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
function reverseWords(str) {
    let tempArr = '';
    let expectedArr = '';
    // console.log(str[10]);
    for( var i = 0; i < str.length; i++){
        tempArr += str[i]
        // console.log(tempArr);
        //if a word is followed by a space
        if( str[i] === ' ' || (str[i+1] === undefined)){
            for(var j = tempArr.length-1; j >= 0; j--){
                expectedArr += tempArr[j]
            }//this for loop do the reverse of first string
            tempArr = '';
            // console.log(expectedArr)
            expectedArr+= ' '
        }
        //if the words is not followed a space, do reverse
    }
    return expectedArr;
}

/*****************************************************************************/
console.log(reverseWords(str1))
console.log(reverseWords(str2))
console.log(reverseWords(str3))