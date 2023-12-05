var smallerStringA1 = 'abcd'
var smallerStringB1 = 'efg'
var expected1 = 'efgabcd'

var smallerStringA2 = 'sunnyside up eggs'
var smallerStringB2 = 'biscuits and gravy'
var expected2 = 'sunnyside up eggsbiscuits and gravy'

/**
 * Combine two given strings together with the smaller string being added
 * in the front. If they are the same length, the first string will be
 * added to the front.
 * NOTE: How do we get the length of a string?
 * @returns {string} The combined strings.
 */
function combineSmallerStringFirst(s1, s2) {
    //your code here
    var combinedArray='';
    if( s1.length > s2.length){
        combinedArray = s2 + s1;
    }
    // else if(s1.length == s2.length ){
    //     combinedArray= s1+s2;
    // }
    else{//s2 > s2
        combinedArray= s1+s2;
    }
    return combinedArray;
}

// console.log(combineSmallerStringFirst(smallerStringA1, smallerStringB1))
// console.log(combineSmallerStringFirst(smallerStringA2, smallerStringB2))

/************************************************************************************************/

var stringToRepeat1 = 'pineapple'
var numberToRepeat1 = 5
var repeatedExpected1 = 'pineapplepineapplepineapplepineapplepineapple'

var stringToRepeat2 = 'margherita pizza'
var numberToRepeat2 = 2
var repeatedExpected2 = 'margherita pizzamargherita pizza'

/**
 * Given a string and an integer representing how many times the string should
 * be repeated, create a new string that is the given string repeated that
 * many times.
 * @returns {string} The given string repeated the specified amount of times.
*/
function stringRepeat(str, num) {
    //your code here
    var repeatedString = '';
    var i = 0;
    while( i < num){
        repeatedString= repeatedString+str;//order matters
        i++;
    }
    return repeatedString;
}

console.log(stringRepeat(stringToRepeat1, numberToRepeat1))
console.log(stringRepeat(stringToRepeat2, numberToRepeat2))
console.log(stringRepeat('m', 5))


/************************************************************************************************/

var wordArray = ['shawn', 'jim', 'tyler', 'heidi', 'john', 'spencer', 'michael'] // michael
var wordArrayTwo = ['a','bb','ccc','dd'] //ccc

/**
 * Finds the longest word in the given array of words.
 * @returns {string} The longest word. If there are multiple words with the same
 *    length, this should be the last word in the array with that length.
 */
function findLongestWord(arr) {
    //your code here
    var longestLength = 0;
    var longestWord = '';
    for( var i = 0; i < arr.length ; i++){
        if(arr[i].length > longestLength){//can compare the longestLength = arr[i],then return longestLength
            longestLength = arr[i].length;
            longestWord = arr[i];
        }
    }
    return longestWord;
}

console.log(findLongestWord(wordArray))
console.log(findLongestWord(wordArrayTwo))