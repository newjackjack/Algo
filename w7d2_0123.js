/* 
  Balance Index

  Here, a balance point is ON an index, not between indices.

  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  Return -1 if none exist.
  
*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

const nums3 = [3,2,1,1];
const expected3 = -1;

const nums4 = [-2, 5,3, 7, 0, 3, -2, 0, 3, 2];
const expected4 = 3;

const nums5 = [8,1,11,2,2,3,1,1];
const expected5 = 2;

/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) {
    // address the num arr that its length is less than 3
    if(nums.length < 3){
        return -1
    }
    // iterate thru both side 
    let sumLeft = 0
    let sumRight = 0
    for(var i = 1; i < nums.length; i++){
        sumLeft += nums[i-1]//sum the left
        //iterate the rest from i+1 
        // console.log("sumLeft: ",sumLeft)
        for(var j = i+1; j < nums.length; j++){
            sumRight += nums[j]
            if(sumLeft === sumRight){
                return i
            }
        }
        sumRight = 0
        // console.log("sumRight: ",sumRight)
    }
    return -1
}

// const nums1 = [-2, 5, 7, 0, 3];
// const expected1 = 2;

// const nums2 = [9, 9];
// const expected2 = -1;

// const nums3 = [3,2,1,1];
// const expected3 = 1;
// const nums4 = [-2, 5, 7, 0, 3, -2, 0, 3, 2];
// const expected4 = 1;


/*****************************************************************************/
console.log(balanceIndex(nums1))
console.log(balanceIndex(nums2))
console.log(balanceIndex(nums3))
console.log(balanceIndex(nums4))
console.log(balanceIndex(nums5))