/* 
  Given a SORTED array of integers, dedupe the array 
  Because array elements are already in order, all duplicate values will be grouped together.

  Ok to use a new array

  Bonus: do it in O(n) time (no nested loops, new array ok)
  Bonus: Do it in-place (no new array)
  Bonus: Do it in-place in O(n) time and no new array
  Bonus: Keep it O(n) time even if it is not sorted
*/

const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [1, 1, 2, 3, 3, 4];
const expected3 = [1, 2, 3, 4];

const nums4 = [1, 1];
const expected4 = [1];

const nums5 = [];
const expected5 = [];

/**
 * De-dupes the given sorted array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array deduped.
 */
function dedupeSorted(nums) {
    if(nums.length == 0){
        return nums
    }
    let dict = {}
    let expectedArr = []
    let firstNum = nums[0]
    expectedArr.push(nums[0])
    dict[firstNum ] = 1
    for (let number of nums){
        // put the first element as a key in the dictionary, assigning value 1 to that key
        if(dict[number] !== 1){
            //we know the key doesn't exit
            dict[number] = 1//make the value of current key to 1
            expectedArr.push(number)
        }
    }
    return expectedArr
}
/*****************************************************************************/
console.log("----------------first approach, without include-----------------")
console.log(dedupeSorted(nums1))
console.log(dedupeSorted(nums2))
console.log(dedupeSorted(nums3))
console.log(dedupeSorted(nums4))
console.log(dedupeSorted(nums5))

/*****************************************************************************/
console.log("-----------------Second approach, using includes-----------------")

function dedupeSorted1(nums){
    let expectArr = []
    for(var i = 0; i < nums.length; i++){
        if( ! expectArr.includes(nums[i])){//includes also use a for loop to check if the element exist
            expectArr.push(nums[i])
        }
    }
    return expectArr 
}
console.log(dedupeSorted1(nums1))
console.log(dedupeSorted1(nums2))
console.log(dedupeSorted1(nums3))
console.log(dedupeSorted1(nums4))
console.log(dedupeSorted1(nums5))