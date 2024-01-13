// unsolved str2 case

/* 
  String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

const str2 = "a3b2c12d10";
const expected2 = "aaabbccccccccccccdddddddddd";

/**
 * Create a function that decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
function decodeStr(str) {
    newStr = ""
    for (var i = 0; i < str.length; i++) {
        let isNumber = isNaN(parseInt(str[i])) === false//That we know we find a letter
        // console.log(str[i].repeat(parseInt(str[i+1])))
        if(isNaN(str[i+1])){
            newStr += str[i].repeat(parseInt(str[i+1]+str[i+2]))
        }
        newStr += str[i].repeat(parseInt(str[i+1]))
    }
    return newStr
}

console.log(decodeStr(str1))
console.log(decodeStr(str2))

function decodeStr2(str) {
    newStr = ""
    for (var i = 0; i < str.length; i++) {
        let isNumber = isNaN(parseInt(str[i])) === false//That we know we find a letter
        // console.log(str[i].repeat(parseInt(str[i+1])))
        let num = ""
        for(var j = i; j < str.length; j++){
            if(isNaN(parseInt(str[j])) === true){//we find a number
                num+=str[j]
            }
            newStr += str[i].repeat(parseInt(num))
        }
        
        // newStr += str[i].repeat(parseInt(str[i+1]))
    }
    return newStr
}