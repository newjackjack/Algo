/* 
Parens Valid

Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.


const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.

/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the parenthesis are valid.
 */
function parensValid(str) {
    //make variables to store the counts of open and close parenthesis
    let open_count = 0;
    let close_count = 0;
    for (let character of str) {
        // console.log(character);
        if( character === "("){
            open_count += 1;
        }
        if( character ===")"){
            close_count += 1
        }
        if(close_count > open_count){//check if the count of closing parenthesis is greater than # of opening parenthesis
            //return false
            return false
        }
    }
    //check the numbers of open and count if the number even out at the end of the loop
    if( (open_count + close_count) % 2 !== 0){//
        return false;
    }
    return true
}

/*****************************************************************************/
console.log(parensValid(str1));
console.log(parensValid(str2));
console.log(parensValid(str3));
console.log(parensValid(str4));