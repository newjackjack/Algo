/* 
  Given an array of strings
  return the number of times each string occurs (a frequency / hash table)
*/

const arr1 = ["a", "a", "a"];
const expected1 = {
  a: 3,
};

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
  a: 2,
  b: 1,
  c: 3,
  B: 1,
  d: 1,
};

const arr3 = [];
const expected3 = {};

/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @returns {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
 */
function makeFrequencyTable(arr) {

// Create an object to store string
    let expectedDic = {}
    // console.log(expectedArr['a'])
    
    for( var i = 0; i < arr.length ; i++){
    //if we found a string in index 0, put it into object and the value is assigned to 1
        if( expectedDic[arr[i]]){
            //truthy and falsey value. falsey: undefined, none, NaN
            //if arr[i] is not in the dictionary,if( expectedDic[arr[i]]) will return false. So, we make use of that.
            expectedDic[arr[i]] += 1;
            // console.log(expectedArr)
        }
        else{//if the key is not in the dictionary
            //make the key
            expectedDic[arr[i]] = 1;
        }
    }
    return expectedDic;
}
/*****************************************************************************/
console.log(makeFrequencyTable(arr1));
console.log(makeFrequencyTable(arr2));