/*          __                        __         
           /\ \                      /\ \        
 _ __    __\ \ a\___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/

    Given to a Coding Dojo alumni by Riot Games.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/
//             V
const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";
// RIOT

function reHash(str) {
    //create a freq map obj
    let map = {};
    //create a variable to store the expected string
    let expectedStr = "";
    //loop thru the string to find letter followed by number
    for (let i = 0; i < str.length; i++) {
        //
        const char = str[i];
        let numStr = ""
        while (!isNaN(str[i + 1])) {
            numStr += str[i + 1];
            i++;
        }
        numStr = parseInt(numStr);
        // console.log(numStr);
        //check if char is in the map
        if (map.hasOwnProperty(char)) {
            map[char] += numStr;
        }
        else {
            map[char] = numStr;
        }
        // console.log(map)
        //sort the map
        
    }
    console.log(Object.keys(map).sort())
    for (key of Object.keys(map).sort()) {
        console.log(key)
        expectedStr += key;
        expectedStr += map[key];
    }
    return expectedStr;
}
console.log(reHash(str1));



// for(let j = i+1; isNaN(str[j]); j++){
//     //the inner for loop find the number after the alphebet
//     //create a variable for number place
//     let number = str[j]
//     //if the next index is a number
//     if(isNaN(str[j])){
//         //make the key-value
//         map[str[i]] = parseInt(number);
//         break;
//     }
//     //if the next index is not a number, we break

// }
//     // 